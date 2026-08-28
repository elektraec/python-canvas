
const W = window.B26_WEEKS || [];
let pyodide=null, pyLoad=null, currentWeek=null;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));
const store=()=>JSON.parse(localStorage.getItem("b26v2")||'{"checks":{},"xp":0,"examBest":0}');
const write=s=>localStorage.setItem("b26v2",JSON.stringify(s));
function norm(v){return String(v).trim().toUpperCase().replace(/\s+/g," ")}
function addXP(key,pts=10){let s=store();if(!s.checks[key]){s.checks[key]=true;s.xp+=pts;write(s);updateStats();}}
function updateStats(){const s=store(), total=W.reduce((a,w)=>a+w.exercises.length,0), done=Object.keys(s.checks).length, pct=total?Math.round(done*100/total):0;
 $("#progressText").textContent=`${done}/${total} verificados`;$("#xpText").textContent=`${s.xp} XP`;$("#progressBar").style.width=pct+"%";$("#bestExam").textContent=s.examBest+"%";}
function buildNav(){let nav=$("#weeksNav");nav.innerHTML=W.map(w=>`<button class="navbtn" data-week="${w.week}">Semana ${w.week} · ${esc(w.title)}</button>`).join("");
 nav.onclick=e=>{let b=e.target.closest("[data-week]");if(!b)return;renderWeek(+b.dataset.week);$("#sidebar").classList.remove("open")};}
function tabsInit(){ $$(".tabbtn").forEach(b=>b.onclick=()=>{let id=b.dataset.panel;$$(".tabbtn").forEach(x=>x.classList.toggle("active",x===b));$$(".panel").forEach(p=>p.classList.toggle("active",p.id===id));});}
function checkAnswer(wi,ei,input,fb){let ex=W[wi].exercises[ei],c=ex.check,v=document.getElementById(input).value,ok=false;if(c.type==="number"){let n=Number(String(v).replace(",","."));ok=Number.isFinite(n)&&Math.abs(n-Number(c.answer))<1e-6}else ok=norm(v)===norm(c.answer);
 let el=document.getElementById(fb);el.textContent=ok?"✓ Correcto. +10 XP":"✗ Revisa el razonamiento e inténtalo otra vez.";el.className="feedback "+(ok?"ok":"bad");if(ok)addXP(`w${W[wi].week}e${ei}`,10);}
window.checkAnswer=checkAnswer;
function toggle(id){document.getElementById(id).classList.toggle("hidden")} window.toggle=toggle;
async function ensurePy(){if(pyodide)return pyodide;if(pyLoad)return pyLoad;pyLoad=(async()=>{if(typeof loadPyodide==="undefined"){await new Promise((res,rej)=>{let s=document.createElement("script");s.src="https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js";s.onload=res;s.onerror=rej;document.head.appendChild(s)})} pyodide=await loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.27.7/full/"});return pyodide})();return pyLoad;}
async function runPython(ed,out,btn){let o=document.getElementById(out),b=document.getElementById(btn);b.disabled=true;b.textContent="Cargando…";o.textContent="Preparando Python…";try{let py=await ensurePy();await py.runPythonAsync("import sys,io\n_stdout=io.StringIO()\nsys.stdout=_stdout");try{await py.runPythonAsync(document.getElementById(ed).value);o.textContent=py.runPython("_stdout.getvalue()")||"(Ejecutado sin salida)"}catch(e){o.textContent=String(e)}}catch(e){o.textContent="No se pudo cargar Pyodide.\n"+e}finally{b.disabled=false;b.textContent="▶ Ejecutar Python"}} window.runPython=runPython;
function resetEditor(id,txt){document.getElementById(id).value=txt}window.resetEditor=resetEditor;

function githubInfo(){let host=location.hostname.split(".")[0], parts=location.pathname.split("/").filter(Boolean), repo=parts[0];if(location.hostname.endsWith("github.io")&&host&&repo)return {owner:host,repo};return null;}
function colabUrl(w){let g=githubInfo();if(!g)return null;return `https://colab.research.google.com/github/${g.owner}/${g.repo}/blob/main/laboratorio/notebooks/semana${String(w.week).padStart(2,"0")}.ipynb`;}

function exerciseHTML(wi,ei){let w=W[wi],e=w.exercises[ei],inp=`a${wi}-${ei}`,fb=`f${wi}-${ei}`,sid=`s${wi}-${ei}`,ed=`ed${wi}-${ei}`,out=`o${wi}-${ei}`,run=`r${wi}-${ei}`,starter=e.starter||e.solution;
 let lab=w.language==="Python"?`<h4>Laboratorio Python</h4><textarea id="${ed}" class="editor" spellcheck="false">${esc(starter)}</textarea><div class="toolbar"><button id="${run}" class="btn secondary" onclick="runPython('${ed}','${out}','${run}')">▶ Ejecutar Python</button><button class="btn" onclick='resetEditor("${ed}",${JSON.stringify(starter)})'>Restaurar</button></div><div id="${out}" class="output">La salida aparecerá aquí.</div>`:"<h4>Práctica en PSeInt</h4><p class='muted'>Analiza la secuencia y contrástala con la solución docente.</p>";
 return `<article class="card"><span class="pill">Ejercicio ${ei+1}</span><span class="pill">${esc(w.language)}</span><h3>${esc(e.title)}</h3><p>${esc(e.statement)}</p><h4>Solución razonada</h4><ol>${e.reasoning.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>
 <div class="check"><strong>Comprueba tu comprensión</strong><p>${esc(e.check.question)}</p><div class="checkrow"><input id="${inp}" placeholder="Tu respuesta"><button class="btn primary" onclick="checkAnswer(${wi},${ei},'${inp}','${fb}')">Comprobar</button></div><div id="${fb}" class="feedback"></div></div>${lab}
 <div class="toolbar"><button class="btn" onclick="toggle('${sid}')">👁 Mostrar / ocultar solución</button></div><div id="${sid}" class="hidden"><div class="codebox">${esc(e.solution)}</div><p><b>Resultado esperado:</b> ${esc(e.expected)}</p></div></article>`;}

function shuffled(a){return [...a].sort(()=>Math.random()-.5)}
function parsonsHTML(wi){let w=W[wi],lines=shuffled(w.parsons.lines);return `<div class="card"><h3>🧩 Parsons Problem</h3><p>${esc(w.parsons.title)}</p><p class="muted">Arrastra las líneas hasta dejarlas en el orden correcto.</p><ul id="parsonsList" class="parsons-list">${lines.map((l,i)=>`<li class="parsons-item" draggable="true" data-line="${esc(l)}">${esc(l)}</li>`).join("")}</ul><button class="btn primary" onclick="checkParsons(${wi})">Comprobar orden</button><div id="parsonsFeedback" class="feedback"></div></div>`;}
function initDrag(){let list=$("#parsonsList");if(!list)return;let drag=null;list.querySelectorAll(".parsons-item").forEach(it=>{it.addEventListener("dragstart",()=>{drag=it;it.classList.add("dragging")});it.addEventListener("dragend",()=>it.classList.remove("dragging"));it.addEventListener("dragover",e=>{e.preventDefault();if(drag&&drag!==it){let r=it.getBoundingClientRect(),after=e.clientY>r.top+r.height/2;list.insertBefore(drag,after?it.nextSibling:it)}})});}
function checkParsons(wi){let got=$$("#parsonsList .parsons-item").map(x=>x.dataset.line), exp=W[wi].parsons.lines, ok=got.length===exp.length&&got.every((x,i)=>x===exp[i]),f=$("#parsonsFeedback");f.textContent=ok?"✓ Orden correcto. +20 XP":"✗ Todavía no. Observa la secuencia lógica.";f.className="feedback "+(ok?"ok":"bad");if(ok)addXP(`parsons${W[wi].week}`,20)}window.checkParsons=checkParsons;

function flowHTML(wi){let w=W[wi],steps=w.flow_steps;return `<div class="card"><h3>🔀 Diagrama lógico</h3><p>Reconstruye mentalmente la secuencia del primer ejercicio y luego revela el flujo.</p><button class="btn secondary" onclick="toggle('flowReveal')">Mostrar / ocultar flujo</button><div id="flowReveal" class="hidden" style="margin-top:12px"><div class="flow-list">${steps.map((s,i)=>`<div class="flow-step"><span class="num">${i+1}</span><span>${esc(s)}</span></div>`).join("")}</div></div></div>`;}

function randomQuizHTML(wi){let w=W[wi],pool=w.exercises.map((e,i)=>({e,i})),q=pool[Math.floor(Math.random()*pool.length)],id=`rq-${wi}`,fb=`rqf-${wi}`;return `<div class="card"><h3>🎲 Pregunta aleatoria</h3><p>${esc(q.e.check.question)}</p><div class="checkrow"><input id="${id}" placeholder="Tu respuesta"><button class="btn primary" onclick="checkRandom(${wi},${q.i},'${id}','${fb}')">Responder</button></div><div id="${fb}" class="feedback"></div><button class="btn" style="margin-top:10px" onclick="renderWeek(${w.week},'random')">Otra pregunta</button></div>`;}
function checkRandom(wi,ei,id,fb){let e=W[wi].exercises[ei],c=e.check,v=document.getElementById(id).value,ok=c.type==="number"?Math.abs(Number(String(v).replace(",","."))-Number(c.answer))<1e-6:norm(v)===norm(c.answer),f=document.getElementById(fb);f.textContent=ok?"✓ Correcto. +5 XP":"✗ Intenta otra vez.";f.className="feedback "+(ok?"ok":"bad");if(ok)addXP(`random${W[wi].week}-${ei}`,5)} window.checkRandom=checkRandom;

function resourcesHTML(wi){
  let w=W[wi];
  return `<div class="card"><h3>📚 Conceptos clave</h3><p class="muted">Consulta esta sección mientras resuelves las actividades.</p>
  <dl class="concept-grid">${w.concepts.map(c=>`<div class="concept"><dt>${esc(c.term)}</dt><dd>${esc(c.definition)}</dd></div>`).join("")}</dl>
  <div class="study-tip"><b>💡 Estrategia de estudio:</b> ${esc(w.study_tip)}</div></div>
  <div class="card" style="margin-top:15px"><h3>🔎 Para profundizar</h3><p class="muted">Fuentes oficiales y académicas seleccionadas para ampliar el tema.</p>
  <ul class="ref-list">${w.references.map(r=>`<li><a href="${r.url}" target="_blank" rel="noopener">${esc(r.title)}</a><br><span class="muted">${esc(r.note)}</span></li>`).join("")}</ul></div>`;
}

function renderWeek(n,tab){let wi=W.findIndex(w=>w.week===n);if(wi<0)return;currentWeek=n;let w=W[wi];$$(".navbtn").forEach(b=>b.classList.toggle("active",+b.dataset.week===n));history.replaceState(null,"",`${location.pathname}?semana=${n}`);
 let cu=colabUrl(w);$("#content").innerHTML=`<section class="hero"><div class="muted" style="color:#fff;opacity:.8">PROGRAMACIÓN Y PENSAMIENTO COMPUTACIONAL · B26</div><h2>Semana ${w.week} — ${esc(w.title)}</h2><p>${esc(w.focus)}</p></section>
 
 <div class="activity-tabs"><button class="btn tabbtn active" data-panel="lesson">📘 Clase</button><button class="btn tabbtn" data-panel="parsons">🧩 Ordenar código</button><button class="btn tabbtn" data-panel="flow">🔀 Flujo</button><button class="btn tabbtn" data-panel="random">🎲 Aleatorio</button><button class="btn tabbtn" data-panel="resources">📚 Conceptos y fuentes</button>${w.language==="Python"&&cu?`<a class="btn good" target="_blank" rel="noopener" href="${cu}">🚀 Abrir en Colab</a>`:""}</div>
 <section id="lesson" class="panel active"><div class="grid">${w.exercises.map((_,ei)=>exerciseHTML(wi,ei)).join("")}</div><div class="card" style="margin-top:15px"><h3>Aplicaciones en ingeniería</h3><div class="career-grid">${w.careers.map(c=>`<div class="career"><strong>${esc(c[0])}</strong><p>${esc(c[1])}</p><div class="muted">${esc(c[2])}</div></div>`).join("")}</div></div></section>
 <section id="parsons" class="panel">${parsonsHTML(wi)}</section><section id="flow" class="panel">${flowHTML(wi)}</section><section id="random" class="panel">${randomQuizHTML(wi)}</section><section id="resources" class="panel">${resourcesHTML(wi)}</section>`;
 tabsInit();initDrag();updateStats();if(tab){let b=$(`.tabbtn[data-panel="${tab}"]`);if(b)b.click()}window.scrollTo({top:0,behavior:"smooth"});}
window.renderWeek=renderWeek;


function examStart(){
  const options=W.map(w=>`<option value="${w.week}">Semana ${w.week} — ${esc(w.title)}</option>`).join("");
  $("#content").innerHTML=`
    <section class="hero"><h2>📝 Modo examen</h2>
    <p>Selecciona una semana. Cada intento incluye al menos 5 preguntas con contexto, combinando definiciones, comprensión y ejercicios.</p></section>
    <div class="card">
      <h3>Configurar examen</h3>
      <label for="examWeek"><b>Semana</b></label>
      <select id="examWeek" style="width:100%;margin:8px 0 14px;padding:10px;border:1px solid var(--line);border-radius:9px">${options}</select>
      <label for="examCount"><b>Número de preguntas</b></label>
      <select id="examCount" style="width:100%;margin:8px 0 14px;padding:10px;border:1px solid var(--line);border-radius:9px">
        <option value="5" selected>5 preguntas</option>
        <option value="7">7 preguntas</option>
      </select>
      <button class="btn primary" onclick="examGenerate()">Generar examen</button>
    </div>`;
}
window.examStart=examStart;

function examGenerate(){
  const weekNum=Number(document.getElementById("examWeek").value);
  const requested=Math.max(5,Number(document.getElementById("examCount").value)||5);
  const w=W.find(x=>x.week===weekNum);
  let pool=shuffled(w.exam_bank||[]).slice(0,Math.min(requested,(w.exam_bank||[]).length));
  sessionStorage.setItem("b26exam",JSON.stringify({week:weekNum,items:pool}));
  $("#content").innerHTML=`
    <section class="hero"><h2>📝 Examen · Semana ${w.week}</h2><p>${esc(w.title)} · ${pool.length} preguntas</p></section>
    <div id="examQuestions">${pool.map((q,i)=>`
      <div class="exam-q"><span class="badge">${esc(q.category||"Pregunta")}</span>
      <p><b>${i+1}.</b> ${esc(q.question)}</p>
      ${q.type==="open"
        ? `<textarea id="exam${i}" rows="4" placeholder="Escribe tu respuesta"></textarea>`
        : `<input id="exam${i}" placeholder="Respuesta" autocomplete="off">`}
      </div>`).join("")}</div>
    <div class="toolbar"><button class="btn primary" onclick="examSubmit()">Enviar examen</button>
    <button class="btn" onclick="examStart()">Cambiar semana</button></div>
    <div id="examResult" class="card" style="margin-top:14px"></div>`;
}
window.examGenerate=examGenerate;

function examSubmit(){
  const saved=JSON.parse(sessionStorage.getItem("b26exam")||'{"items":[]}');
  const items=saved.items||[];
  let autoScore=0,autoCount=0,details=[];
  items.forEach((q,i)=>{
    const v=document.getElementById("exam"+i).value;
    if(q.type==="open"){
      details.push(`<li><b>Respuesta abierta.</b> Compara tu respuesta con esta orientación:<br>${esc(q.answer)}</li>`);
      return;
    }
    autoCount++;
    const ok=q.type==="number"
      ? Number.isFinite(Number(String(v).replace(",","."))) && Math.abs(Number(String(v).replace(",","."))-Number(q.answer))<1e-6
      : norm(v)===norm(q.answer);
    if(ok)autoScore++;
    details.push(`<li>${ok?"✓":"✗"} ${esc(q.question)}<br><b>Respuesta esperada:</b> ${esc(q.answer)}</li>`);
  });
  const pct=autoCount?Math.round(autoScore/autoCount*100):0;
  let s=store();
  if(autoCount && pct>s.examBest)s.examBest=pct;
  write(s);updateStats();
  $("#examResult").innerHTML=`
    <h3>Resultado automático: ${autoScore}/${autoCount} (${pct}%)</h3>
    ${items.length-autoCount?`<p class="muted">${items.length-autoCount} pregunta(s) abierta(s) se revisan mediante comparación con una respuesta orientativa y no cuentan en el porcentaje automático.</p>`:""}
    <ol>${details.join("")}</ol>
    <div class="toolbar"><button class="btn primary" onclick="examGenerate()">Nuevo examen de esta semana</button>
    <button class="btn" onclick="examStart()">Elegir otra semana</button></div>`;
}
window.examSubmit=examSubmit;


function exportProgress(){
  const payload={format:"B26_PROGRESS_V3",exportedAt:new Date().toISOString(),state:store()};
  let blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
  let a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="progreso_b26.json";a.click();URL.revokeObjectURL(a.href);
  setProgressStatus("Progreso exportado correctamente.","ok");
}
window.exportProgress=exportProgress;
function setProgressStatus(msg,kind=""){let el=document.getElementById("progressStatus");if(!el)return;el.textContent=msg;el.className="statusmsg "+kind;}
function importProgressFile(file){
  if(!file)return;let reader=new FileReader();
  reader.onload=()=>{try{let parsed=JSON.parse(reader.result);let state=parsed&&parsed.format==="B26_PROGRESS_V3"?parsed.state:parsed;
    if(!state||typeof state!=="object")throw new Error("Formato no válido");
    let clean={checks:(state.checks&&typeof state.checks==="object")?state.checks:{},xp:Number(state.xp)||0,examBest:Number(state.examBest)||0};
    clean.xp=Math.max(0,clean.xp);clean.examBest=Math.min(100,Math.max(0,clean.examBest));write(clean);updateStats();setProgressStatus("✓ Progreso importado y restaurado.","ok");
  }catch(e){setProgressStatus("No se pudo importar: archivo no válido.","bad");}
  finally{let i=document.getElementById("importFile");if(i)i.value="";}};
  reader.readAsText(file);
}
window.importProgressFile=importProgressFile;
function resetProgress(){
  if(!confirm("¿Restablecer todo el progreso, XP y mejor resultado de examen?"))return;
  write({checks:{},xp:0,examBest:0});updateStats();setProgressStatus("Progreso restablecido a cero.","ok");
}
window.resetProgress=resetProgress;
document.addEventListener("DOMContentLoaded",()=>{buildNav();updateStats();$("#menuBtn").onclick=()=>$("#sidebar").classList.toggle("open");$("#examBtn").onclick=examStart;$("#exportBtn").onclick=exportProgress;$("#importBtn").onclick=()=>$("#importFile").click();$("#importFile").onchange=e=>importProgressFile(e.target.files[0]);$("#resetBtn").onclick=resetProgress;let n=+new URLSearchParams(location.search).get("semana")||1;renderWeek(W.some(w=>w.week===n)?n:1);});

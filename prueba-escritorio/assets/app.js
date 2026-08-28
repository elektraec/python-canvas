
const EX=window.PAPEL_EXERCISES||[];
const TOPICS=window.PAPEL_TOPICS||[];
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

const KEY="b26_escritorio_v3";
function state(){
  try{return JSON.parse(localStorage.getItem(KEY))||{done:{},xp:0,currentTopic:"Variables",currentId:null}}
  catch{return {done:{},xp:0,currentTopic:"Variables",currentId:null}}
}
function save(s){localStorage.setItem(KEY,JSON.stringify(s))}
function normalize(v){return String(v??"").trim().replace(/\s+/g," ").toLowerCase()}
function completedCount(){return Object.keys(state().done||{}).length}
function updateStats(){
  const s=state(), done=completedCount(), pct=EX.length?Math.round(done*100/EX.length):0;
  $("#doneText").textContent=`${done}/${EX.length}`;
  $("#xpText").textContent=`${s.xp} XP`;
  $("#progressBar").style.width=pct+"%";
}
function buildNav(){
  const s=state();
  $("#topicNav").innerHTML=TOPICS.map(t=>`
    <button class="topic-btn ${t.name===s.currentTopic?"active":""}" data-topic="${esc(t.name)}">
      <span>${t.icon}</span><span>${esc(t.name)}<small>${esc(t.subtitle)}</small></span>
    </button>`).join("");
  $("#topicNav").onclick=e=>{
    const b=e.target.closest("[data-topic]"); if(!b)return;
    const st=state(); st.currentTopic=b.dataset.topic; st.currentId=null; save(st);
    renderTopic(b.dataset.topic); $("#sidebar").classList.remove("open");
  }
}
function renderHome(){
  $("#content").innerHTML=`
    <section class="hero">
      <div class="kicker" style="color:#fff;opacity:.75">PRUEBA DE ESCRITORIO · B26</div>
      <h2>Aprende a ejecutar código con la mente</h2>
      <p>Completa trazas de variables, condiciones y ciclos antes de ejecutar un programa. La meta es comprender qué ocurre paso a paso.</p>
    </section>
    <div class="topic-grid">
      ${TOPICS.map(t=>{
        const items=EX.filter(x=>x.topic===t.name);
        const st=state();
        const done=items.filter(x=>st.done?.[x.id]).length;
        return `<button class="topic-card" data-topic="${esc(t.name)}">
          <div class="big">${t.icon}</div>
          <h3>${esc(t.name)}</h3>
          <p>${esc(t.subtitle)}</p>
          <p style="margin-top:10px"><b>${done}/${items.length}</b> completados</p>
        </button>`;
      }).join("")}
    </div>`;
  $$(".topic-card").forEach(b=>b.onclick=()=>{
    const st=state(); st.currentTopic=b.dataset.topic; st.currentId=null; save(st); buildNav(); renderTopic(b.dataset.topic);
  });
}
function renderTopic(topic){
  buildNav();
  const list=EX.filter(x=>x.topic===topic);
  const st=state();
  let ex=list.find(x=>x.id===st.currentId);
  if(!ex) ex=list.find(x=>!st.done?.[x.id])||list[0];
  if(!ex){renderHome();return}
  st.currentId=ex.id; st.currentTopic=topic; save(st);
  renderExercise(ex);
}
function renderExercise(ex){
  const st=state();
  const list=EX.filter(x=>x.topic===ex.topic);
  const idx=list.findIndex(x=>x.id===ex.id);
  const done=!!st.done?.[ex.id];
  $("#content").innerHTML=`
    <section class="hero">
      <div class="kicker" style="color:#fff;opacity:.78">${esc(ex.topic)} · NIVEL ${ex.level}</div>
      <h2>${esc(ex.title)}</h2>
      <p>${esc(ex.objective)}</p>
    </section>

    <div class="toolbar">
      ${list.map((x,i)=>`<button class="btn ${x.id===ex.id?"soft":""}" data-ex="${x.id}">${i+1}. ${esc(x.title)}</button>`).join("")}
    </div>

    <section class="card">
      <div class="exercise-head">
        <div>
          <div class="kicker">Código para analizar</div>
          <h3>Haz la prueba de escritorio</h3>
          <p>Completa la tabla sin ejecutar el código. Usa “Pista” o “Paso a paso” solo si lo necesitas.</p>
        </div>
        <span class="pill">${done?"✓ Completado":"Pendiente"}</span>
      </div>

      <div class="codewrap">
        <pre><code id="codeText">${esc(ex.code)}</code></pre>
        <button class="copy-btn" id="copyBtn">Copiar</button>
      </div>

      <div class="trace-wrap">
        <table class="trace-table">
          <thead><tr>${ex.columns.map(c=>`<th>${esc(c)}</th>`).join("")}</tr></thead>
          <tbody>
            ${ex.rows.map((row,r)=>`<tr>${row.map((cell,c)=>{
              if(c===0) return `<td class="fixed-cell">${esc(cell)}</td>`;
              return `<td><input class="trace-input" data-r="${r}" data-c="${c}" autocomplete="off" aria-label="${esc(ex.columns[c])}, fila ${r+1}"></td>`;
            }).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>

      <div class="output-box">
        <div class="output-row">
          <b>¿Qué imprime el programa?</b>
          <input class="output-input" id="outputAnswer" placeholder="Escribe la salida">
        </div>
      </div>

      <div class="actions">
        <button class="btn primary" id="checkBtn">✓ Comprobar</button>
        <button class="btn" id="hintBtn">💡 Pista</button>
        <button class="btn" id="stepBtn">👣 Paso a paso</button>
        <button class="btn" id="clearBtn">Limpiar</button>
        <button class="btn good" id="nextBtn">Siguiente ejercicio →</button>
      </div>

      <div id="hint" class="hint">${esc(ex.hint)}</div>
      <div id="feedback" class="feedback"></div>
      <div id="stepPanel" class="step-panel">
        <b>Traza guiada</b>
        <p class="muted">Revela una fila cada vez y compárala con tu razonamiento.</p>
        <div id="stepContent"></div>
        <button class="btn soft" id="revealBtn">Revelar siguiente paso</button>
      </div>
    </section>`;

  $$("[data-ex]").forEach(b=>b.onclick=()=>selectExercise(b.dataset.ex));
  $("#copyBtn").onclick=async()=>{await navigator.clipboard.writeText(ex.code);$("#copyBtn").textContent="Copiado ✓";setTimeout(()=>$("#copyBtn").textContent="Copiar",900)};
  $("#hintBtn").onclick=()=>$("#hint").classList.toggle("show");
  $("#stepBtn").onclick=()=>$("#stepPanel").classList.toggle("show");
  $("#clearBtn").onclick=()=>{$$(".trace-input").forEach(i=>{i.value="";i.classList.remove("ok","bad")});$("#outputAnswer").value="";$("#feedback").className="feedback";};
  $("#checkBtn").onclick=()=>checkExercise(ex);
  $("#nextBtn").onclick=()=>nextExercise(ex);
  let step=0;
  $("#revealBtn").onclick=()=>{
    if(step>=ex.rows.length){$("#revealBtn").disabled=true;$("#revealBtn").textContent="Traza completa";return}
    const row=ex.rows[step];
    $("#stepContent").insertAdjacentHTML("beforeend",`<div class="step-line"><b>${esc(row[0])}</b> · ${ex.columns.slice(1).map((c,i)=>`${esc(c)} = <b>${esc(row[i+1])}</b>`).join(" · ")}</div>`);
    step++;
    if(step>=ex.rows.length){$("#revealBtn").textContent="Traza completa";$("#revealBtn").disabled=true}
  };
}
function selectExercise(id){
  const ex=EX.find(x=>x.id===id); if(!ex)return;
  const st=state(); st.currentId=id; st.currentTopic=ex.topic; save(st); renderExercise(ex);
}
function checkExercise(ex){
  let correct=0,total=0;
  $$(".trace-input").forEach(inp=>{
    const r=+inp.dataset.r,c=+inp.dataset.c;
    const expected=ex.rows[r][c];
    const ok=normalize(inp.value)===normalize(expected);
    total++; if(ok)correct++;
    inp.classList.toggle("ok",ok); inp.classList.toggle("bad",!ok);
  });
  const out=$("#outputAnswer");
  const outOk=normalize(out.value)===normalize(ex.output);
  total++; if(outOk)correct++;
  out.classList.toggle("ok",outOk); out.classList.toggle("bad",!outOk);

  const fb=$("#feedback");
  if(correct===total){
    const st=state();
    const first=!st.done?.[ex.id];
    st.done=st.done||{}; st.done[ex.id]=true;
    if(first)st.xp=(st.xp||0)+20;
    save(st); updateStats(); buildNav();
    fb.className="feedback show ok";
    fb.innerHTML=`✓ <b>Traza correcta.</b> Resultado final: <code>${esc(ex.output)}</code>${first?" · +20 XP":""}`;
  }else{
    fb.className="feedback show bad";
    fb.innerHTML=`Revisa las celdas marcadas. Tienes <b>${correct}/${total}</b> respuestas correctas.`;
  }
}
function nextExercise(ex){
  const list=EX.filter(x=>x.topic===ex.topic);
  const idx=list.findIndex(x=>x.id===ex.id);
  const next=list[(idx+1)%list.length];
  selectExercise(next.id);
}
function exportProgress(){
  const blob=new Blob([JSON.stringify({format:"B26_ESCRITORIO_V3",exportedAt:new Date().toISOString(),state:state()},null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="progreso_prueba_escritorio_b26.json";a.click();URL.revokeObjectURL(a.href);
}
function resetProgress(){
  if(!confirm("¿Restablecer todo el progreso de Prueba de Escritorio?"))return;
  localStorage.removeItem(KEY);buildNav();updateStats();renderHome();
}
document.addEventListener("DOMContentLoaded",()=>{
  buildNav();updateStats();renderHome();
  $("#menuBtn").onclick=()=>$("#sidebar").classList.toggle("open");
  $("#homeBtn").onclick=renderHome;
  $("#exportBtn").onclick=exportProgress;
  $("#resetBtn").onclick=resetProgress;
});

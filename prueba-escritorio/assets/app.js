const EX=window.PAPEL_EXERCISES||[];
const TOPICS=window.PAPEL_TOPICS||[];
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

const KEY="b26_escritorio_v6";
const LEGACY_KEY="b26_escritorio_v5";
function state(){
  try{
    let raw=localStorage.getItem(KEY);
    if(!raw){
      const old=localStorage.getItem(LEGACY_KEY);
      if(old){localStorage.setItem(KEY,old);raw=old;}
    }
    return JSON.parse(raw)||{done:{},xp:0,currentTopic:"Variables",currentId:null};
  }catch{return {done:{},xp:0,currentTopic:"Variables",currentId:null}}
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

const EXAMPLES={
  v1:{title:"Actualizar una variable",code:`x = 6\nx = x + 2\nx = x * 3\nprint(x)`,columns:["Paso","Instrucción","x","¿Qué ocurrió?"],rows:[["1","x = 6","6","x recibe 6"],["2","x = x + 2","8","6 + 2 = 8; x cambia a 8"],["3","x = x * 3","24","8 × 3 = 24; x cambia a 24"]],output:"24",note:"Cada asignación reemplaza el valor anterior de x."},
  v2:{title:"Dos variables que se conservan",code:`a = 4\nb = 3\na = a + b\nb = b + 2\nprint(a, b)`,columns:["Paso","Instrucción","a","b","¿Qué ocurrió?"],rows:[["1","a = 4","4","-","a recibe 4; b aún no tiene valor"],["2","b = 3","4","3","a conserva 4; b recibe 3"],["3","a = a + b","7","3","4 + 3 = 7; solo cambia a"],["4","b = b + 2","7","5","3 + 2 = 5; a conserva 7"]],output:"7 5",note:"Si una instrucción no modifica una variable, esa variable conserva su valor."},
  v3:{title:"Intercambio usando temp",code:`a = 2\nb = 9\ntemp = a\na = b\nb = temp\nprint(a, b)`,columns:["Paso","Instrucción","a","b","temp","¿Qué ocurrió?"],rows:[["1","a = 2","2","-","-","a recibe 2"],["2","b = 9","2","9","-","b recibe 9"],["3","temp = a","2","9","2","temp copia el valor actual de a"],["4","a = b","9","9","2","a copia el valor de b; temp sigue en 2"],["5","b = temp","9","2","2","b recupera el valor guardado en temp"]],output:"9 2",note:"temp es una memoria auxiliar. No cambia cuando cambia a; conserva el valor que recibió."},
  i1:{title:"Decisión if / else",code:`nota = 72\n\nif nota >= 70:\n    estado = "APRUEBA"\nelse:\n    estado = "REPRUEBA"\n\nprint(estado)`,columns:["Paso","nota","Condición nota >= 70","estado","¿Qué ocurrió?"],rows:[["1","72","-","-","Se asigna nota = 72"],["2","72","Verdadero","APRUEBA","Como 72 >= 70, se ejecuta la rama if"]],output:"APRUEBA",note:"En una decisión solo se ejecuta la rama cuya condición corresponde."},
  i2:{title:"Par o impar con módulo",code:`n = 10\n\nif n % 2 == 0:\n    tipo = "PAR"\nelse:\n    tipo = "IMPAR"\n\nprint(tipo)`,columns:["Paso","n","n % 2","Condición","tipo"],rows:[["1","10","-","-","-"],["2","10","0","Verdadero","PAR"]],output:"PAR",note:"El operador % devuelve el residuo. Si n % 2 es 0, el número es par."},
  i3:{title:"Cadena if / elif / else",code:`temperatura = 28\n\nif temperatura < 15:\n    estado = "FRÍA"\nelif temperatura <= 30:\n    estado = "TEMPLADA"\nelse:\n    estado = "CALIENTE"\n\nprint(estado)`,columns:["Paso","temperatura","< 15","<= 30","estado"],rows:[["1","28","-","-","-"],["2","28","Falso","Verdadero","TEMPLADA"]],output:"TEMPLADA",note:"Python prueba las condiciones en orden. Al encontrar una verdadera, deja de revisar las siguientes ramas."},
  f1:{title:"Acumulador con for",code:`suma = 0\n\nfor i in range(1, 5):\n    suma = suma + i\n\nprint(suma)`,columns:["Iteración","i","suma antes","Operación","suma después"],rows:[["1","1","0","0 + 1","1"],["2","2","1","1 + 2","3"],["3","3","3","3 + 3","6"],["4","4","6","6 + 4","10"]],output:"10",note:"range(1, 5) genera 1, 2, 3 y 4. El límite final 5 no se incluye."},
  f2:{title:"range con salto",code:`total = 0\n\nfor i in range(1, 8, 3):\n    total = total + i\n\nprint(total)`,columns:["Iteración","i","total antes","Operación","total después"],rows:[["1","1","0","0 + 1","1"],["2","4","1","1 + 4","5"],["3","7","5","5 + 7","12"]],output:"12",note:"range(inicio, fin, salto): comienza en 1, avanza de 3 en 3 y se detiene antes de 8."},
  f3:{title:"Producto acumulado",code:`producto = 1\n\nfor i in range(2, 5):\n    producto = producto * i\n\nprint(producto)`,columns:["Iteración","i","producto antes","Operación","producto después"],rows:[["1","2","1","1 × 2","2"],["2","3","2","2 × 3","6"],["3","4","6","6 × 4","24"]],output:"24",note:"Un producto acumulado suele iniciar en 1 porque multiplicar por 0 destruiría el producto."},
  w1:{title:"while ascendente",code:`i = 1\ntotal = 0\n\nwhile i <= 2:\n    total = total + i\n    i = i + 1\n\nprint(total)`,columns:["Iteración","i antes","Condición i <= 2","total después","i después"],rows:[["1","1","Verdadero","1","2"],["2","2","Verdadero","3","3"],["Salida","3","Falso","3","3"]],output:"3",note:"En while conviene registrar también la comprobación final falsa, porque explica por qué termina el ciclo."},
  w2:{title:"while con división entera",code:`n = 16\n\nwhile n > 2:\n    n = n // 2\n\nprint(n)`,columns:["Iteración","n antes","Condición n > 2","n después"],rows:[["1","16","Verdadero","8"],["2","8","Verdadero","4"],["3","4","Verdadero","2"],["Salida","2","Falso","2"]],output:"2",note:"// realiza división entera. La tabla se detiene cuando la condición ya es falsa."},
  w3:{title:"Duplicar hasta superar un límite",code:`valor = 2\npasos = 0\n\nwhile valor < 10:\n    valor = valor * 2\n    pasos = pasos + 1\n\nprint(valor, pasos)`,columns:["Iteración","valor antes","valor después","pasos"],rows:[["1","2","4","1"],["2","4","8","2"],["3","8","16","3"],["Salida","16","16","3"]],output:"16 3",note:"El valor puede superar el límite dentro de la última iteración; la condición se vuelve falsa al volver al inicio del while."},
  a1:{title:"Contar elementos que cumplen",code:`datos = [7, 12, 14, 5]\ncontador = 0\n\nfor x in datos:\n    if x >= 10:\n        contador = contador + 1\n\nprint(contador)`,columns:["Iteración","x","x >= 10","contador antes","contador después"],rows:[["1","7","Falso","0","0"],["2","12","Verdadero","0","1"],["3","14","Verdadero","1","2"],["4","5","Falso","2","2"]],output:"2",note:"El contador solo cambia en las iteraciones donde la condición es verdadera."},
  a2:{title:"Sumar solo ciertos valores",code:`datos = [2, 5, 8, 3]\nsuma = 0\n\nfor x in datos:\n    if x % 2 != 0:\n        suma = suma + x\n\nprint(suma)`,columns:["Iteración","x","¿Impar?","suma antes","suma después"],rows:[["1","2","No","0","0"],["2","5","Sí","0","5"],["3","8","No","5","5"],["4","3","Sí","5","8"]],output:"8",note:"Cuando la condición es falsa, el acumulador conserva su valor."},
  a3:{title:"Suma + contador = promedio",code:`datos = [6, 9, 12]\nsuma = 0\ncontador = 0\n\nfor x in datos:\n    suma = suma + x\n    contador = contador + 1\n\npromedio = suma / contador\nprint(promedio)`,columns:["Iteración","x","suma","contador"],rows:[["1","6","6","1"],["2","9","15","2"],["3","12","27","3"]],output:"9.0",note:"Después del ciclo se calcula 27 / 3 = 9.0. Conviene distinguir lo que ocurre dentro del ciclo de lo que ocurre al terminarlo."},
  l1:{title:"Recorrer una lista",code:`valores = [3, 4, 5]\ntotal = 0\n\nfor x in valores:\n    total = total + x\n\nprint(total)`,columns:["Iteración","x","total antes","total después"],rows:[["1","3","0","3"],["2","4","3","7"],["3","5","7","12"]],output:"12",note:"En cada iteración x toma el siguiente elemento de la lista, en el mismo orden en que aparece."},
  l2:{title:"Buscar el mayor",code:`datos = [4, 7, 2, 6]\nmayor = datos[0]\n\nfor x in datos:\n    if x > mayor:\n        mayor = x\n\nprint(mayor)`,columns:["Iteración","x","mayor antes","x > mayor","mayor después"],rows:[["1","4","4","Falso","4"],["2","7","4","Verdadero","7"],["3","2","7","Falso","7"],["4","6","7","Falso","7"]],output:"7",note:"mayor solo cambia cuando aparece un valor superior al mayor conocido hasta ese momento."},
  l3:{title:"Modificar una lista por índice",code:`valores = [1, 3, 5]\n\nfor i in range(len(valores)):\n    valores[i] = valores[i] * 2\n\nprint(valores)`,columns:["Iteración","i","valor antes","valor después","lista"],rows:[["1","0","1","2","[2, 3, 5]"],["2","1","3","6","[2, 6, 5]"],["3","2","5","10","[2, 6, 10]"]],output:"[2, 6, 10]",note:"El índice i indica qué posición se modifica. La lista completa refleja inmediatamente cada cambio."}
};

function pythonTutorUrl(code){
  return `https://pythontutor.com/iframe-embed.html?via=ai#code=${encodeURIComponent(code)}&mode=display&py=311&curInstr=0&codeDivWidth=460&codeDivHeight=300`;
}
function pythonTutorFullUrl(code){
  return `https://pythontutor.com/visualize.html?via=ai#code=${encodeURIComponent(code)}&mode=display&py=311&curInstr=0`;
}
function tutorPanelHtml(code,idPrefix="tutor"){
  return `<section class="tutor-panel" id="${idPrefix}Panel" aria-live="polite">
    <div class="tutor-head"><div><div class="kicker">Verificación visual</div><h3>Python Tutor</h3><p>Observa cómo cambian las variables instrucción por instrucción. Úsalo después de intentar tu prueba de escritorio.</p></div><span class="pill">Python 3.11</span></div>
    <div class="tutor-placeholder" id="${idPrefix}Placeholder"><p><b>El visualizador aún no se ha cargado.</b> Así puedes intentar primero la traza por tu cuenta.</p><button class="btn primary" type="button" id="${idPrefix}Load">▶ Cargar Python Tutor</button></div>
    <div class="tutor-frame-wrap" id="${idPrefix}FrameWrap" hidden><iframe id="${idPrefix}Frame" title="Python Tutor: ejecución paso a paso" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    <div class="tutor-foot"><span>Necesita conexión a Internet porque Python Tutor es un servicio externo.</span><a class="btn" id="${idPrefix}Open" href="${esc(pythonTutorFullUrl(code))}" target="_blank" rel="noopener">↗ Abrir en una pestaña nueva</a></div>
  </section>`;
}
function wireTutor(code,idPrefix="tutor"){
  const load=document.getElementById(`${idPrefix}Load`);
  const frame=document.getElementById(`${idPrefix}Frame`);
  const wrap=document.getElementById(`${idPrefix}FrameWrap`);
  const placeholder=document.getElementById(`${idPrefix}Placeholder`);
  if(!load||!frame||!wrap||!placeholder)return;
  load.addEventListener("click",()=>{
    if(!frame.src) frame.src=pythonTutorUrl(code);
    wrap.hidden=false;
    placeholder.hidden=true;
  });
}

function examplePanelHtml(ex){
  const e=EXAMPLES[ex.id];
  if(!e)return "";
  return `<section class="example-card">
    <div class="example-head"><div><div class="kicker">Ejemplo similar resuelto</div><h3>${esc(e.title)}</h3><p>Este ejemplo es distinto al ejercicio, pero practica exactamente la misma idea.</p></div><span class="pill">Modelo</span></div>
    <div class="example-grid"><div><div class="example-label">Código de ejemplo</div><pre><code>${esc(e.code)}</code></pre></div><div class="example-rules"><div class="example-label">Cómo leerlo</div><p>${esc(e.note)}</p><p><b>Regla:</b> completa cada fila con el estado de las variables después de la acción correspondiente.</p></div></div>
    <div class="trace-wrap example-table-wrap"><table class="trace-table example-table"><thead><tr>${e.columns.map(c=>`<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${e.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
    <div class="example-output"><b>Salida del ejemplo:</b> <code>${esc(e.output)}</code></div>
  </section>`;
}

function introExampleHtml(){
  return `<section class="example-card"><div class="example-head"><div><div class="kicker">Ejemplo base</div><h3>Una prueba de escritorio muy sencilla</h3><p>La idea principal es registrar cómo queda el programa después de cada paso.</p></div><span class="pill">Inicio</span></div>
  <div class="example-grid"><div><div class="example-label">Código</div><pre><code>x = 2\ny = 5\nx = x + y\nprint(x)</code></pre></div><div class="example-rules"><div class="example-label">Reglas rápidas</div><ol><li>Lee de arriba hacia abajo.</li><li>Anota el valor después de ejecutar la instrucción.</li><li>Una variable conserva su valor hasta que una instrucción la modifica.</li><li>Usa <code>-</code> si aún no tiene valor.</li><li>La salida corresponde a lo que produce <code>print(...)</code>.</li></ol></div></div>
  <div class="trace-wrap example-table-wrap"><table class="trace-table example-table"><thead><tr><th>Paso</th><th>Instrucción</th><th>x</th><th>y</th><th>Explicación</th></tr></thead><tbody><tr><td>1</td><td>x = 2</td><td>2</td><td>-</td><td>x recibe 2</td></tr><tr><td>2</td><td>y = 5</td><td>2</td><td>5</td><td>x conserva 2; y recibe 5</td></tr><tr><td>3</td><td>x = x + y</td><td>7</td><td>5</td><td>2 + 5 = 7 y x recibe 7</td></tr></tbody></table></div><div class="example-output"><b>Salida:</b> <code>7</code></div></section>${tutorPanelHtml(`x = 2\ny = 5\nx = x + y\nprint(x)`,"learnTutor")}`;
}

function renderLearn(){
  $("#content").innerHTML=`<section class="hero"><div class="kicker" style="color:#fff;opacity:.78">GUÍA COMPLETA</div><h2>Todo sobre la prueba de escritorio</h2><p>Qué es, para qué sirve, cómo se construye y cómo interpretar variables, condicionales, ciclos y listas.</p></section>
  <div class="learn-tabs" role="tablist"><button class="btn soft learn-tab active" data-learn="concepto">1. Concepto</button><button class="btn learn-tab" data-learn="pasos">2. Pasos</button><button class="btn learn-tab" data-learn="patrones">3. Qué anotar</button><button class="btn learn-tab" data-learn="ejemplo">4. Ejemplo</button><button class="btn learn-tab" data-learn="fuentes">5. Aprender más</button></div>
  <section class="card learn-section" id="learnContent"></section>`;
  const show=k=>{
    $$(".learn-tab").forEach(b=>b.classList.toggle("soft",b.dataset.learn===k));
    const c=$("#learnContent");
    if(k==="concepto")c.innerHTML=`<h3>¿Qué es una prueba de escritorio?</h3><p>Es una técnica manual para <b>simular la ejecución de un programa</b>. En lugar de ejecutar el código en Python, seguimos las instrucciones una por una y registramos cómo cambian sus variables, condiciones, contadores, acumuladores o listas.</p><p>Sirve para comprender la lógica, predecir resultados, encontrar errores y explicar por qué un programa produce una salida determinada.</p><div class="learn-callout"><b>Idea central:</b> no adivines el resultado final. Recorre el programa paso a paso y conserva el estado de todas las variables.</div><h3>¿Qué representa una fila?</h3><p>En ejercicios de asignación, una fila suele representar una instrucción. En ciclos, una fila suele representar una iteración. En un <code>while</code> también puede ser útil registrar la comprobación final en la que la condición resulta falsa.</p>`;
    if(k==="pasos")c.innerHTML=`<h3>Procedimiento recomendado</h3><ol class="learn-steps"><li><b>Lee el código completo</b> sin resolverlo todavía.</li><li><b>Identifica las variables</b> y crea las columnas necesarias.</li><li><b>Inicializa</b>: cuando aparece una asignación como <code>x = 4</code>, x pasa a valer 4.</li><li><b>Avanza una instrucción o iteración a la vez.</b></li><li><b>Evalúa primero el lado derecho</b> de una asignación y después guarda el resultado en la variable del lado izquierdo.</li><li><b>Conserva los valores</b> de las variables que no fueron modificadas.</li><li><b>Evalúa condiciones</b> como Verdadero/Falso antes de decidir qué bloque se ejecuta.</li><li><b>En ciclos</b>, registra cada repetición y el cambio de sus variables.</li><li><b>Al final</b>, determina exactamente qué recibe <code>print(...)</code>.</li><li><b>Comprueba</b> la traza ejecutando el programa solo después de haber razonado manualmente.</li></ol><div class="learn-callout"><b>Asignación:</b> en <code>temp = a</code>, primero se consulta el valor actual de <code>a</code> y después ese valor se asigna a <code>temp</code>.</div>`;
    if(k==="patrones")c.innerHTML=`<h3>Qué debes anotar según el tipo de código</h3><div class="learn-grid"><article><h4>Variables</h4><p>Valor de cada variable después de cada asignación. Si aún no existe, usa <code>-</code>.</p></article><article><h4>if / elif / else</h4><p>Resultado de la condición y valores producidos por la rama que realmente se ejecuta.</p></article><article><h4>for</h4><p>Número de iteración, valor actual de la variable de recorrido, valor antes y después de los acumuladores.</p></article><article><h4>while</h4><p>Valor antes, resultado de la condición, cambios dentro del ciclo y comprobación final falsa cuando sea útil.</p></article><article><h4>Contadores</h4><p>Valor antes y después. El contador solo aumenta cuando la regla del programa lo indica.</p></article><article><h4>Listas</h4><p>Elemento o índice actual y, si la lista se modifica, el estado completo de la lista después del cambio.</p></article></div><h3>Errores comunes</h3><ul><li>Cambiar una variable que la instrucción no modificó.</li><li>Olvidar que <code>range(a, b)</code> no incluye <code>b</code>.</li><li>Confundir <code>=</code> (asignación) con <code>==</code> (comparación).</li><li>Usar el valor nuevo demasiado pronto: en <code>x = x + 1</code> primero se lee el x anterior.</li><li>Olvidar que una lista modificada conserva los cambios de iteraciones anteriores.</li></ul>`;
    if(k==="ejemplo"){c.innerHTML=introExampleHtml();wireTutor(`x = 2\ny = 5\nx = x + y\nprint(x)`,"learnTutor");}
    if(k==="fuentes")c.innerHTML=`<h3>Fuentes externas para aprender más</h3><p>Estas fuentes complementan la práctica de la mini app. Los enlaces se abren en una pestaña nueva.</p><div class="source-grid"><a class="source-card" href="https://docs.python.org/es/3/tutorial/" target="_blank" rel="noopener"><b>Tutorial oficial de Python en español</b><span>Variables, listas, if, for, range y otros fundamentos.</span></a><a class="source-card" href="https://docs.python.org/es/3/reference/simple_stmts.html" target="_blank" rel="noopener"><b>Referencia oficial: asignaciones</b><span>Para comprender con precisión cómo funciona una asignación en Python.</span></a><a class="source-card" href="https://pythontutor.com/" target="_blank" rel="noopener"><b>Python Tutor</b><span>Visualiza la ejecución paso a paso. En esta v6 también está integrado dentro de cada ejercicio.</span></a><a class="source-card" href="https://pythontutor.com/articles/python-visualizer.html" target="_blank" rel="noopener"><b>Guía de Python Tutor para aprender</b><span>Ejemplos de variables, ciclos, condicionales y estructuras visualizadas.</span></a></div><div class="learn-callout"><b>Sugerencia:</b> intenta primero la prueba de escritorio a mano y usa Python Tutor después para verificar tu razonamiento.</div>`;
  };
  $$(".learn-tab").forEach(b=>b.onclick=()=>show(b.dataset.learn)); show("concepto");
}

function renderHome(){
  $("#content").innerHTML=`<section class="hero"><div class="kicker" style="color:#fff;opacity:.75">PRUEBA DE ESCRITORIO · B26</div><h2>Aprende a ejecutar código con la mente</h2><p>Completa trazas de variables, condiciones, ciclos y listas antes de ejecutar un programa. Cada ejercicio incluye un ejemplo similar completamente resuelto y un visualizador de Python Tutor para comprobar la ejecución paso a paso.</p></section>
  <section class="home-guide"><div><div class="kicker">¿Primera vez?</div><h3>Antes de practicar, revisa la guía.</h3><p>Incluye definición, pasos, errores comunes, un ejemplo completo, Python Tutor integrado y fuentes externas.</p></div><button class="btn primary" id="homeLearnBtn">📚 Abrir guía completa</button></section>
  <div class="topic-grid" style="margin-top:18px">${TOPICS.map(t=>{const items=EX.filter(x=>x.topic===t.name);const st=state();const done=items.filter(x=>st.done?.[x.id]).length;return `<button class="topic-card" data-topic="${esc(t.name)}"><div class="big">${t.icon}</div><h3>${esc(t.name)}</h3><p>${esc(t.subtitle)}</p><p style="margin-top:10px"><b>${done}/${items.length}</b> completados</p></button>`;}).join("")}</div>`;
  $("#homeLearnBtn").onclick=renderLearn;
  $$(".topic-card").forEach(b=>b.onclick=()=>{const st=state();st.currentTopic=b.dataset.topic;st.currentId=null;save(st);buildNav();renderTopic(b.dataset.topic)});
}
function renderTopic(topic){buildNav();const list=EX.filter(x=>x.topic===topic);const st=state();let ex=list.find(x=>x.id===st.currentId);if(!ex)ex=list.find(x=>!st.done?.[x.id])||list[0];if(!ex){renderHome();return}st.currentId=ex.id;st.currentTopic=topic;save(st);renderExercise(ex)}
function renderExercise(ex){
  const st=state();const list=EX.filter(x=>x.topic===ex.topic);const done=!!st.done?.[ex.id];
  $("#content").innerHTML=`<section class="hero"><div class="kicker" style="color:#fff;opacity:.78">${esc(ex.topic)} · NIVEL ${ex.level}</div><h2>${esc(ex.title)}</h2><p>${esc(ex.objective)}</p></section>
  <div class="toolbar">${list.map((x,i)=>`<button class="btn ${x.id===ex.id?"soft":""}" data-ex="${x.id}">${i+1}. ${esc(x.title)}</button>`).join("")}</div>
  <section class="card"><div class="exercise-head"><div><div class="kicker">Código para analizar</div><h3>Haz la prueba de escritorio</h3><p>Completa la tabla sin ejecutar el código. Si no sabes cómo empezar, abre el ejemplo similar resuelto.</p></div><span class="pill">${done?"✓ Completado":"Pendiente"}</span></div>
  <div class="codewrap"><pre><code id="codeText">${esc(ex.code)}</code></pre><button class="copy-btn" id="copyBtn">Copiar</button></div>
  <div class="trace-wrap"><table class="trace-table"><thead><tr>${ex.columns.map(c=>`<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${ex.rows.map((row,r)=>`<tr>${row.map((cell,c)=>c===0?`<td class="fixed-cell">${esc(cell)}</td>`:`<td><input class="trace-input" data-r="${r}" data-c="${c}" autocomplete="off" aria-label="${esc(ex.columns[c])}, fila ${r+1}"></td>`).join("")}</tr>`).join("")}</tbody></table></div>
  <div class="output-box"><div class="output-row"><b>¿Qué imprime el programa?</b><input class="output-input" id="outputAnswer" placeholder="Escribe la salida"></div></div>
  <div class="actions"><button class="btn primary" id="checkBtn">✓ Comprobar</button><button class="btn soft" id="exampleInlineBtn">📘 Ejemplo similar resuelto</button><button class="btn tutor-btn" id="tutorBtn">▶ Python Tutor</button><button class="btn" id="hintBtn">💡 Pista</button><button class="btn" id="stepBtn">👣 Paso a paso</button><button class="btn" id="clearBtn">Limpiar</button><button class="btn good" id="nextBtn">Siguiente ejercicio →</button></div>
  <div id="exampleInline" class="example-inline">${examplePanelHtml(ex)}</div><div id="exerciseTutor" class="tutor-inline">${tutorPanelHtml(ex.code,"exerciseTutorInner")}</div><div id="hint" class="hint">${esc(ex.hint)}</div><div id="feedback" class="feedback"></div><div id="stepPanel" class="step-panel"><b>Traza guiada</b><p class="muted">Revela una fila cada vez y compárala con tu razonamiento.</p><div id="stepContent"></div><button class="btn soft" id="revealBtn">Revelar siguiente paso</button></div></section>`;
  $$("[data-ex]").forEach(b=>b.onclick=()=>selectExercise(b.dataset.ex));
  $("#copyBtn").onclick=async()=>{try{await navigator.clipboard.writeText(ex.code);$("#copyBtn").textContent="Copiado ✓"}catch{$("#copyBtn").textContent="Selecciona el código"}setTimeout(()=>$("#copyBtn").textContent="Copiar",1000)};
  $("#hintBtn").onclick=()=>$("#hint").classList.toggle("show");$("#stepBtn").onclick=()=>$("#stepPanel").classList.toggle("show");$("#exampleInlineBtn").onclick=()=>$("#exampleInline").classList.toggle("show");$("#tutorBtn").onclick=()=>$("#exerciseTutor").classList.toggle("show");wireTutor(ex.code,"exerciseTutorInner");
  $("#clearBtn").onclick=()=>{$$(".trace-input").forEach(i=>{i.value="";i.classList.remove("ok","bad")});$("#outputAnswer").value="";$("#outputAnswer").classList.remove("ok","bad");$("#feedback").className="feedback"};
  $("#checkBtn").onclick=()=>checkExercise(ex);$("#nextBtn").onclick=()=>nextExercise(ex);
  let step=0;$("#revealBtn").onclick=()=>{if(step>=ex.rows.length){$("#revealBtn").disabled=true;$("#revealBtn").textContent="Traza completa";return}const row=ex.rows[step];$("#stepContent").insertAdjacentHTML("beforeend",`<div class="step-line"><b>${esc(row[0])}</b> · ${ex.columns.slice(1).map((c,i)=>`${esc(c)} = <b>${esc(row[i+1])}</b>`).join(" · ")}</div>`);step++;if(step>=ex.rows.length){$("#revealBtn").textContent="Traza completa";$("#revealBtn").disabled=true}};
}
function selectExercise(id){const ex=EX.find(x=>x.id===id);if(!ex)return;const st=state();st.currentId=id;st.currentTopic=ex.topic;save(st);renderExercise(ex)}
function checkExercise(ex){let correct=0,total=0;$$('.trace-input').forEach(inp=>{const r=+inp.dataset.r,c=+inp.dataset.c,expected=ex.rows[r][c],ok=normalize(inp.value)===normalize(expected);total++;if(ok)correct++;inp.classList.toggle('ok',ok);inp.classList.toggle('bad',!ok)});const out=$("#outputAnswer"),outOk=normalize(out.value)===normalize(ex.output);total++;if(outOk)correct++;out.classList.toggle("ok",outOk);out.classList.toggle("bad",!outOk);const fb=$("#feedback");if(correct===total){const st=state();const first=!st.done?.[ex.id];st.done=st.done||{};st.done[ex.id]=true;if(first)st.xp=(st.xp||0)+20;save(st);updateStats();buildNav();fb.className="feedback show ok";fb.innerHTML=`✓ <b>Traza correcta.</b> Resultado final: <code>${esc(ex.output)}</code>${first?" · +20 XP":""}`}else{fb.className="feedback show bad";fb.innerHTML=`Revisa las celdas marcadas. Tienes <b>${correct}/${total}</b> respuestas correctas.`}}
function nextExercise(ex){const list=EX.filter(x=>x.topic===ex.topic),idx=list.findIndex(x=>x.id===ex.id),next=list[(idx+1)%list.length];selectExercise(next.id)}
function exportProgress(){const blob=new Blob([JSON.stringify({format:"B26_ESCRITORIO_V6",exportedAt:new Date().toISOString(),state:state()},null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="progreso_prueba_escritorio_b26.json";a.click();URL.revokeObjectURL(a.href)}
function resetProgress(){if(!confirm("¿Restablecer todo el progreso de Prueba de Escritorio?"))return;localStorage.removeItem(KEY);localStorage.removeItem(LEGACY_KEY);buildNav();updateStats();renderHome()}
document.addEventListener("DOMContentLoaded",()=>{buildNav();updateStats();renderHome();$("#menuBtn").onclick=()=>$("#sidebar").classList.toggle("open");$("#homeBtn").onclick=renderHome;$("#learnBtn").onclick=renderLearn;$("#exportBtn").onclick=exportProgress;$("#resetBtn").onclick=resetProgress});

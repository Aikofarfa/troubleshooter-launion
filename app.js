const INBOX = "sebascastroj70@gmail.com";
// Clave de Web3Forms — consíguela gratis en https://web3forms.com (pon el correo de arriba)
const WEB3FORMS_KEY = "f3795645-2c5f-42a9-b9f5-376610b047de";
const tree = {
  start:{title:"¿Qué está fallando?",sub:"Elige la categoría más cercana.",icon:"❓",options:[
    {l:"Computador o portátil",h:"No enciende, lento o pantalla negra",i:"💻",n:"pc"},
    {l:"Internet o WiFi",h:"No carga, sin red o solo un equipo",i:"📶",n:"net"},
    {l:"Proyector o televisor",h:"Sin imagen, HDMI o input",i:"📽️",n:"proj"},
    {l:"Impresora",h:"No imprime, atasco o desconectada",i:"🖨️",n:"print"},
    {l:"Audio o micrófono",h:"Sin sonido, mudo o cable",i:"🔊",n:"audio"},
    {l:"Cuenta o plataforma",h:"Correo, contraseña o bloqueo",i:"👤",n:"acc"}
  ]},
  pc:{title:"¿Qué falla tiene el computador o portátil?",sub:"Selecciona una de las 20 fallas más comunes para ver la solución.",icon:"💻",options:[
    {l:"No enciende",h:"Sin luces ni ventilador",i:"⚡",n:"r_cable"},
    {l:"No carga Windows",h:"Se queda iniciando",i:"🔄",n:"r_boot"},
    {l:"Está muy lento",h:"Tarda en abrir todo",i:"🐢",n:"r_slow"},
    {l:"Pantalla negra o sin señal",i:"🖥️",n:"r_disp"},
    {l:"La batería no carga",i:"🔋",n:"r_charge"},
    {l:"Se apaga solo",i:"⏻",n:"r_shutdown"},
    {l:"Se reinicia solo",i:"🔁",n:"r_restart"},
    {l:"Se queda congelado",i:"🧊",n:"r_freeze"},
    {l:"Aparece pantalla azul",i:"🟦",n:"r_bsod"},
    {l:"No reconoce el teclado",i:"⌨️",n:"r_keyboard"},
    {l:"No reconoce el mouse",i:"🖱️",n:"r_mouse"},
    {l:"Un puerto USB no funciona",i:"🔌",n:"r_usb"},
    {l:"No se escucha el audio",i:"🔊",n:"r_mute"},
    {l:"No conecta al WiFi",i:"📶",n:"r_wifi"},
    {l:"El internet está muy lento",i:"🌐",n:"r_net_slow"},
    {l:"No abre un programa",i:"📦",n:"r_apps"},
    {l:"El disco está lleno",i:"💾",n:"r_disk_full"},
    {l:"Aparecen ventanas extrañas",i:"🛡️",n:"r_malware"},
    {l:"No imprime desde el PC",i:"🖨️",n:"r_queue"},
    {l:"Se calienta demasiado",i:"🌡️",n:"r_overheat"}
  ]},
  pc_pwr:{title:"¿El cable de poder está bien conectado?",icon:"⚡",options:[
    {l:"No estoy seguro / se ve suelto",i:"🔌",n:"r_cable"},
    {l:"Es un portátil y la batería está en 0",i:"🔋",n:"r_charge"},
    {l:"Sí: está conectado y hay corriente",i:"⚠️",n:"r_dead"}
  ]},
  net:{title:"¿A cuántos equipos les falta internet?",icon:"📶",options:[
    {l:"Solo este computador",i:"💻",n:"r_net1"},
    {l:"Veo la red WiFi pero no entra",i:"🔒",n:"r_wifi"},
    {l:"Nadie del aula tiene internet",i:"⚠️",n:"r_netall"}
  ]},
  proj:{title:"¿Qué ves en el proyector o el televisor?",icon:"📽️",options:[
    {l:"Sin señal / pantalla azul o negra",i:"🖥️",n:"r_input"},
    {l:"El cable HDMI o VGA está suelto",i:"🔌",n:"r_hdmi"},
    {l:"Imagen muy oscura o parpadea",i:"💡",n:"r_lamp"}
  ]},
  print:{title:"¿Qué hace la impresora?",icon:"🖨️",options:[
    {l:"Papel atascado o no jala hoja",i:"📄",n:"r_jam"},
    {l:"Aparece desconectada / offline",i:"🔌",n:"r_off"},
    {l:"No imprime aunque está lista",i:"🖨️",n:"r_queue"}
  ]},
  audio:{title:"¿Qué pasa con el audio?",icon:"🔊",options:[
    {l:"No se oye nada (mudo o volumen 0)",i:"🔇",n:"r_mute"},
    {l:"Cable o dispositivo de salida",i:"🎧",n:"r_jack"}
  ]},
  acc:{title:"¿Qué falla con la cuenta?",icon:"👤",options:[
    {l:"Olvidé la contraseña o está bloqueada",i:"🔑",n:"r_pass"},
    {l:"No entra a Classroom / plataforma",i:"📚",n:"r_plat"}
  ]},
  r_cable:{s:"ok",t:"Revisa la alimentación",p:"La mayoría de los “no enciende” se resuelven reconectando el cable y el interruptor de la fuente.",steps:["Confirma que el tomacorriente tenga corriente.","Conecta el cable a fondo al CPU o al portátil.","En escritorio, el switch de la fuente (atrás) debe estar en I.","Mantén el botón de encendido 3 segundos.","Si no hay luces, reporta el equipo."],cat:"Computador"},
  r_charge:{s:"ok",t:"Carga el portátil",p:"Sin batería y sin cargador el equipo no arranca.",steps:["Conecta el cargador original.","Mira el LED del conector o del cargador.","Espera 5–10 minutos si estaba en 0%.","Prueba encender. Si no responde, reporta."],cat:"Computador"},
  r_dead:{s:"warn",t:"Equipo sin respuesta",p:"Puede ser fuente, placa o falla interna. No abras el equipo.",steps:["Prueba otro tomacorriente.","Revisa que el switch trasero esté en I.","Anota el código del equipo y el aula.","Reporta con urgencia media o alta."],cat:"Computador"},
  r_boot:{s:"warn",t:"El sistema no termina de cargar",p:"Puede ser un apagado incorrecto, actualización trabada o disco con error.",steps:["Espera 2 minutos: a veces está reparando el disco.","Si ves un porcentaje, no lo apagues.","Si se queda más de 10 minutos, apaga 8 segundos y vuelve a encender.","Si el ciclo se repite, reporta."],cat:"Computador"},
  r_slow:{s:"ok",t:"Acelera el equipo con una limpieza simple",p:"Lo más común es tener muchas pestañas o el disco lleno.",steps:["Cierra pestañas y programas que no uses.","Reinicia desde Inicio → Reiniciar.","Retira USB desconocidos.","Si sigue igual, reporta."],cat:"Computador"},
  r_disp:{s:"ok",t:"Recupera la imagen de la pantalla",p:"El equipo puede estar enviando video al proyector, o el cable está suelto.",steps:["Mira si el CPU tiene luces.","Reconecta HDMI/VGA en monitor y CPU.","En portátil: Fn + tecla de pantalla.","Prueba el botón de encendido del monitor.","Si sigue negro, reporta."],cat:"Computador"},
  r_net1:{s:"ok",t:"Reconecta la red de este equipo",p:"Si el resto del aula navega, el problema está en este computador.",steps:["Olvida y reconecta la red institucional.","Si es por cable, desconecta 5 segundos y vuelve a oír el clic.","Reinicia el computador.","Si no carga una página simple, reporta este puesto."],cat:"Red"},
  r_wifi:{s:"ok",t:"Entra al WiFi institucional",p:"Ver la red no basta: hay que autenticarse con la cuenta del colegio.",steps:["Elige solo la red oficial de I.E. La Unión.","Revisa mayúsculas y el teclado.","Si pide certificado, acéptalo solo en la red del colegio.","Si falla 2 veces, no sigas: reporta para no bloquear la cuenta."],cat:"Red"},
  r_netall:{s:"warn",t:"Caída de red en el aula",p:"Si nadie navega, es switch, access point o enlace del colegio.",steps:["Confirma con 2 o 3 equipos.","No reinicies el switch ni toques el rack.","Anota aula, hora y si fallan otras zonas.","Reporta con urgencia alta."],cat:"Red"},
  r_hdmi:{s:"ok",t:"Reconecta HDMI o VGA",p:"Un cable a medias es la causa más frecuente de “sin imagen”.",steps:["Apaga el proyector con el control.","Conecta HDMI/VGA a fondo.","Enciende primero el proyector y después el computador.","Usa Fn + icono de monitor para duplicar."],cat:"Aula"},
  r_input:{s:"ok",t:"Cambia la entrada de video",p:"El proyector puede estar en HDMI 2 o VGA mientras el PC está en HDMI 1.",steps:["Pulsa Source/Input hasta HDMI o VGA.","Espera 5–10 segundos entre entradas.","Si usas USB-C, conéctalo directo.","Si no hay imagen, reporta."],cat:"Aula"},
  r_lamp:{s:"warn",t:"Imagen débil: posible lámpara o filtro",p:"No abras el proyector. El recambio lo hace soporte.",steps:["Oscurece el aula y mira si se distingue algo.","No golpear el equipo encendido.","Apágalo con el control y espera el ventilador 1–2 min.","Reporta aula y modelo."],cat:"Aula"},
  r_jam:{s:"ok",t:"Saca el papel atascado con cuidado",p:"No tires con fuerza: sigue el sentido de avance del papel.",steps:["Apaga la impresora.","Abre las bandejas y retira el papel completo.","Cancela los trabajos en cola del computador.","Enciende y prueba una página de prueba.","Si se atasca de nuevo, reporta."],cat:"Impresora"},
  r_off:{s:"ok",t:"Vuelve a poner la impresora en línea",p:"Suele estar apagada, sin red o tomada por otro equipo.",steps:["Confirma que esté encendida y sin error.","Revisa Ethernet o WiFi del colegio.","Quita “Usar impresora sin conexión” y márcala predeterminada.","Si sigue offline, reporta."],cat:"Impresora"},
  r_queue:{s:"ok",t:"Limpia la cola de impresión",p:"Un trabajo trabado bloquea todo lo que sigue.",steps:["Abre la cola de impresión y cancela todo.","Reinicia el servicio de impresión o el computador.","Vuelve a enviar un documento corto.","Si no imprime, reporta."],cat:"Impresora"},
  r_mute:{s:"ok",t:"Revisa volumen y dispositivo de salida",p:"Casi siempre es mute o salida incorrecta.",steps:["Quita el mute del teclado y del volumen del sistema.","En Configuración de sonido elige parlantes o diadema.","Prueba un video de YouTube corto.","Si no hay dispositivo, reporta."],cat:"Audio"},
  r_jack:{s:"ok",t:"Reconecta audio",p:"Jack mal puesto o dispositivo dañado.",steps:["Desconecta y vuelve a conectar el cable.","Prueba otro puerto o parlante.","En portátil revisa el conector de diadema.","Si no se oye, reporta."],cat:"Audio"},
  r_pass:{s:"ok",t:"Recupera el acceso sin bloquear la cuenta",p:"Tres o más intentos malos suelen bloquear el usuario.",steps:["Confirma usuario institucional y que Bloq Mayús esté apagado.","No sigas adivinando. Anota el mensaje de error.","Pide restablecimiento con nombre completo, grado o área, y usuario."],cat:"Cuentas"},
  r_plat:{s:"ok",t:"Entra con la cuenta del colegio",p:"Classroom y el correo fallan si estás en una cuenta personal.",steps:["Cierra Gmail/Microsoft personal o usa incógnito.","Entra con el correo institucional, no un @gmail personal.","Acepta los permisos de la primera vez.","Si dice que no perteneces a la clase, reporta."],cat:"Cuentas"},
  r_shutdown:{s:"warn",t:"Evita que el equipo se apague solo",p:"Los apagados inesperados suelen relacionarse con temperatura, energía o batería.",steps:["Guarda el trabajo y desconecta periféricos que no uses.","Comprueba que las rejillas de ventilación no estén cubiertas.","En un portátil, prueba con el cargador conectado.","Si vuelve a apagarse, reporta el equipo y la hora del fallo."],cat:"Computador"},
  r_restart:{s:"warn",t:"Revisa los reinicios inesperados",p:"Un reinicio puede producirse por una actualización, temperatura o un fallo del sistema.",steps:["Anota si aparece un mensaje o pantalla azul.","Instala las actualizaciones pendientes cuando puedas guardar el trabajo.","Desconecta USB o accesorios agregados recientemente.","Si se repite, reporta el código del equipo y el programa abierto."],cat:"Computador"},
  r_freeze:{s:"ok",t:"Recupera un equipo congelado",p:"Un programa o proceso puede estar usando todos los recursos.",steps:["Espera un minuto y no pulses muchas veces el botón.","Intenta cerrar el programa que no responde.","Si responde, guarda y reinicia desde Inicio.","Si no responde, mantén el botón presionado solo para apagar y reporta si ocurre de nuevo."],cat:"Computador"},
  r_bsod:{s:"warn",t:"Registra la pantalla azul",p:"La pantalla azul muestra un error del sistema que conviene reportar con su código.",steps:["Fotografía o anota el código que aparece.","Deja que el equipo reinicie si lo hace solo.","No instales programas para corregirlo sin autorización.","Reporta el código, la hora y qué programa estaba abierto."],cat:"Computador"},
  r_keyboard:{s:"ok",t:"Haz que el teclado vuelva a responder",p:"El problema suele estar en la conexión, el puerto o las pilas.",steps:["Desconecta y conecta el teclado en otro puerto USB.","Si es inalámbrico, cambia las pilas y revisa el receptor.","Prueba escribir en otro programa.","Si ningún teclado funciona, reporta el equipo."],cat:"Computador"},
  r_mouse:{s:"ok",t:"Recupera el mouse",p:"Una conexión floja, suciedad en el sensor o pilas agotadas pueden impedir que funcione.",steps:["Desconecta y conecta el mouse en otro puerto.","Limpia suavemente el sensor y prueba otra superficie.","Si es inalámbrico, cambia las pilas.","Si puedes, prueba otro mouse y reporta si tampoco funciona."],cat:"Computador"},
  r_usb:{s:"ok",t:"Revisa el puerto USB",p:"No todos los fallos del accesorio significan que el computador esté dañado.",steps:["Prueba el dispositivo en otro puerto USB.","Comprueba si otro dispositivo funciona en ese puerto.","No fuerces conectores ni uses accesorios desconocidos.","Si el puerto está flojo o ninguno funciona, reporta el equipo."],cat:"Computador"},
  r_net_slow:{s:"ok",t:"Mejora una conexión lenta",p:"Muchas pestañas, descargas o varios equipos usando la red pueden reducir la velocidad.",steps:["Cierra descargas y pestañas que no uses.","Comprueba si el problema ocurre en otros sitios y aplicaciones.","Reinicia el equipo si lleva muchos días encendido.","Si toda el aula está lenta, repórtalo como problema de red."],cat:"Computador"},
  r_apps:{s:"ok",t:"Repara un programa que no abre",p:"Puede estar bloqueado, desactualizado o necesitar más recursos.",steps:["Cierra otras aplicaciones y vuelve a intentarlo.","Reinicia el computador desde Inicio.","Anota el mensaje exacto si aparece uno.","No desinstales ni instales programas sin autorización; reporta si continúa."],cat:"Computador"},
  r_disk_full:{s:"ok",t:"Libera espacio de forma segura",p:"Un disco lleno vuelve lento al equipo y puede impedir que se abran programas.",steps:["Borra archivos personales que ya no necesites y vacía la papelera.","No borres carpetas de Windows ni programas del colegio.","Mueve archivos grandes a un medio autorizado si corresponde.","Si el aviso continúa, reporta el equipo indicando el espacio disponible."],cat:"Computador"},
  r_malware:{s:"warn",t:"Detén ventanas o avisos extraños",p:"Los anuncios inesperados pueden venir de una página, extensión o software no autorizado.",steps:["No hagas clic en avisos que prometen limpiar o acelerar el equipo.","Cierra la pestaña o el navegador.","No descargues programas ni entregues contraseñas.","Reporta el sitio, mensaje o programa que provocó el aviso."],cat:"Computador"},
  r_overheat:{s:"warn",t:"Reduce el calentamiento del equipo",p:"La temperatura alta puede causar lentitud, apagados y daños.",steps:["Apaga el equipo si está muy caliente o hace ruido extraño.","Colócalo sobre una superficie firme y despeja sus ventilaciones.","No lo cubras ni introduzcas objetos para limpiarlo.","Reporta el equipo si el ventilador sigue sonando o se apaga solo."],cat:"Computador"}
};
const guides=[
  {i:"💻",t:"El computador no enciende",p:"Cable, interruptor de la fuente y carga del portátil.",tag:"easy",lbl:"BÁSICO",n:"r_cable",tip:"En un portátil, busca el LED del cargador; en un equipo de mesa, revisa también el interruptor trasero.",ifNot:"Si no aparece ninguna luz después de probar otro tomacorriente, anota el aula y el código del equipo y repórtalo."},
  {i:"📶",t:"Sin internet en un solo PC",p:"Olvidar la red, cable o reinicio simple.",tag:"easy",lbl:"BÁSICO",n:"r_net1",tip:"Si el resto del aula navega, el fallo es local a este puesto.",ifNot:"Si tras reconectar y reiniciar no carga ni una página, reporta el puesto."},
  {i:"📽️",t:"Proyector sin imagen",p:"Entrada HDMI/VGA y cable bien puesto.",tag:"easy",lbl:"BÁSICO",n:"r_input",tip:"Cambia Source/Input y espera unos segundos entre cada opción.",ifNot:"Si no hay señal con cable bien conectado, reporta aula y modelo."},
  {i:"🖨️",t:"Impresora atascada o en cola",p:"Sacar papel sin romperlo y vaciar trabajos trabados.",tag:"med",lbl:"MEDIO",n:"r_jam",tip:"Cancela la cola antes de tirar del papel y retíralo siguiendo el sentido de avance.",ifNot:"Si vuelve a atascarse, no uses fuerza: deja la impresora apagada y repórtala con el mensaje de error."},
  {i:"🐢",t:"El equipo está muy lento",p:"Cerrar programas y reiniciar desde el menú.",tag:"easy",lbl:"BÁSICO",n:"r_slow",tip:"Guarda tu trabajo antes de reiniciar y desconecta memorias USB que no reconozcas.",ifNot:"Si continúa lento, anota qué programa estaba abierto y desde cuándo ocurre para el reporte."},
  {i:"👤",t:"No entra la cuenta institucional",p:"Evita el bloqueo y pide el restablecimiento.",tag:"med",lbl:"MEDIO",n:"r_pass",tip:"Confirma que estás usando la cuenta institucional y no una cuenta personal guardada en el navegador.",ifNot:"No sigas intentando contraseñas al azar; solicita restablecimiento con tu usuario y el mensaje de error."},
  {i:"🔊",t:"No se oye audio",p:"Mute, dispositivo de salida y cables.",tag:"easy",lbl:"BÁSICO",n:"r_mute",tip:"Revisa tanto el volumen del computador como el del parlante, proyector o diadema.",ifNot:"Si el dispositivo no aparece en la lista de sonido, reporta el equipo y el tipo de conexión."},
  {i:"⚠️",t:"Se cayó la red de todo el aula",p:"Confirma en 2 PCs. No toques switch ni rack.",tag:"hard",lbl:"URGENTE",n:"r_netall",tip:"Comprueba el fallo en dos o tres equipos y registra la hora exacta.",ifNot:"No reinicies switches ni abras el rack; reporta el aula, la hora y si otras zonas también están sin conexión."}
];

let path=[];
let urgency="media";
const notice=document.getElementById("formNotice");

function showNotice(kind, html){notice.className="notice show "+kind;notice.innerHTML=html;}

/** Envía el reporte con Web3Forms (más fiable que FormSubmit). */
async function sendReport(payload, form){
  if(!WEB3FORMS_KEY || WEB3FORMS_KEY === "TU_ACCESS_KEY_AQUI"){
    showNotice("err", "Falta configurar la clave de Web3Forms. Entra a <b>web3forms.com</b>, genera una Access Key con el correo <b>"+INBOX+"</b> y pégala en app.js.");
    return false;
  }
  const body = {
    access_key: WEB3FORMS_KEY,
    subject: payload._subject,
    from_name: "TROUBLESHOOTER I.E. La Unión",
    nombre: payload.nombre,
    rol: payload.rol,
    aula: payload.aula,
    equipo: payload.equipo,
    urgencia: payload.urgencia,
    problema: payload.problema,
    intentado: payload.intentado,
    email: payload._replyto || INBOX,
    destino: INBOX
  };
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify(body)
  });
  const data = await res.json().catch(()=>({}));
  if(res.ok && data.success){
    showNotice("ok", "Reporte enviado a <b>"+INBOX+"</b>. Sistemas lo recibirá en esa bandeja.");
    form.reset();
    urgency = "media";
    document.querySelectorAll(".urg").forEach(x=>x.classList.toggle("on", x.dataset.v==="media"));
    return true;
  }
  throw new Error(data.message || "Error al enviar");
}

document.getElementById("reportForm").addEventListener("submit", async (e)=>{
  e.preventDefault();
  const f = e.target;
  if(f._honey && f._honey.value) return;
  const btn = document.getElementById("submitBtn");
  btn.disabled = true;
  btn.textContent = "Enviando…";
  const payload = {
    _subject: "[TROUBLESHOOTER] "+urgency.toUpperCase()+" · "+f.equipo.value+" · "+f.aula.value,
    _honey: f._honey ? f._honey.value : "",
    nombre: f.nombre.value.trim(),
    rol: f.rol.value,
    aula: f.aula.value.trim(),
    equipo: f.equipo.value,
    urgencia: urgency,
    problema: f.problema.value.trim(),
    intentado: (f.intentado.value.trim()||"(nada anotado)")
  };
  if(f._replyto && f._replyto.value) payload._replyto = f._replyto.value.trim();
  try{
    await sendReport(payload, f);
  }catch(err){
    showNotice("err", "No se pudo enviar. Revisa la clave de Web3Forms o escribe a <b>"+INBOX+"</b>.");
    console.error(err);
  }finally{
    setTimeout(()=>{ btn.disabled=false; btn.textContent="Enviar reporte"; }, 1200);
  }
});

document.getElementById("urgWrap").addEventListener("click",e=>{
  const b=e.target.closest(".urg"); if(!b) return;
  urgency=b.dataset.v;
  document.querySelectorAll(".urg").forEach(x=>x.classList.toggle("on",x===b));
});
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));

function renderStep(key){
  const node=tree[key]; if(!node) return;
  path.push(key);
  const body=document.getElementById("wizardBody");
  const bar=document.getElementById("barFill");
  const stepNum=document.getElementById("stepNum");
  stepNum.textContent="Paso "+path.length;
  bar.style.width=Math.min(100, path.length*25)+"%";
  if(node.s){
    body.innerHTML=`<div class="result ${node.s}"><h3>${node.t}</h3><p>${node.p}</p><ol>${node.steps.map(s=>`<li>${s}</li>`).join("")}</ol></div>
      <div class="wiz-actions"><button type="button" class="btn btn-primary" onclick="location.hash='#reportar'">Reportar si no se resolvió</button>
      <button type="button" class="back-link" id="wizBack">Volver al inicio</button></div>`;
    document.getElementById("wizBack").onclick=()=>{path=[];renderStep("start");};
    return;
  }
  body.innerHTML=`<div class="q-title"><span class="icon">${node.icon||"❓"}</span>${node.title}</div>
    ${node.sub?`<p class="q-sub">${node.sub}</p>`:""}
    <div class="opts">${node.options.map(o=>`<button type="button" class="opt" data-n="${o.n}"><span class="oicon">${o.i||"•"}</span><span>${o.l}${o.h?`<small>${o.h}</small>`:""}</span></button>`).join("")}</div>
    ${path.length>1?`<div class="wiz-actions"><button type="button" class="back-link" id="wizBack">Atrás</button></div>`:""}`;
  body.querySelectorAll(".opt").forEach(btn=>btn.onclick=()=>renderStep(btn.dataset.n));
  const back=document.getElementById("wizBack");
  if(back) back.onclick=()=>{
    path.pop();
    const previous=path[path.length-1]||"start";
    path.pop();
    renderStep(previous);
  };
}
renderStep("start");

const cards=document.getElementById("guideCards");
cards.innerHTML=guides.map((g,i)=>`<button type="button" class="card guide-card" data-i="${i}">
  <div class="cicon">${g.i}</div><h3>${g.t}</h3><p>${g.p}</p>
  <span class="tag ${g.tag}">${g.lbl}</span></button>`).join("");
cards.addEventListener("click",e=>{
  const card=e.target.closest(".guide-card"); if(!card) return;
  const g=guides[+card.dataset.i];
  const node=tree[g.n];
  let box=card.querySelector(".guide-inline");
  if(box){box.remove();return;}
  cards.querySelectorAll(".guide-inline").forEach(x=>x.remove());
  box=document.createElement("div"); box.className="guide-inline";
  box.innerHTML=`<h4>${node.t}</h4><p>${node.p}</p><ol>${node.steps.map(s=>`<li>${s}</li>`).join("")}</ol>
    <div class="guide-tip">${g.tip}</div><div class="guide-next">${g.ifNot}</div>
    <button type="button" class="btn btn-ghost close-guide">Cerrar</button>`;
  card.appendChild(box);
  box.querySelector(".close-guide").onclick=ev=>{ev.stopPropagation();box.remove();};
});

const datos = {
  inicio: {
    pregunta: "¿Qué problema tienes?",
    opciones: [
      { texto: "No me conecta el Wi-Fi", sig: "no_conecta" },
      { texto: "Está muy lento", sig: "lento" }
    ]
  },
  no_conecta: {
    pregunta: "¿Te sale algún error de clave o no aparece la red?",
    opciones: [
      { texto: "Error de clave", sig: "solucion_clave" },
      { texto: "No aparece la red", sig: "solucion_red" }
    ]
  },
  solucion_clave: {
    pregunta: "SOLUCIÓN: Dale a 'Olvidar red' en tu celular/PC y vuelve a escribir la clave fijándote en mayúsculas.",
    final: true
  },
  solucion_red: {
    pregunta: "SOLUCIÓN: Apaga y prende el Wi-Fi de tu equipo. Si sigues lejos del router, acércate más.",
    final: true
  },
  lento: {
    pregunta: "SOLUCIÓN: Cierra aplicaciones que consuman datos (como videos o juegos). Si sigue lento, el internet del colegio está saturado.",
    final: true
  }
};

let paso = "inicio";

function mostrar() {
  const actual = datos[paso];
  document.getElementById("pregunta").innerText = actual.pregunta;
  const divBotones = document.getElementById("botones");
  const btnInicio = document.getElementById("btn-inicio");
  divBotones.innerHTML = "";

  if (actual.final) {
    btnInicio.style.display = "block";
  } else {
    btnInicio.style.display = "none";
    actual.opciones.forEach(op => {
      const b = document.createElement("button");
      b.innerText = op.texto;
      b.onclick = () => {
        paso = op.sig;
        mostrar();
      };
      divBotones.appendChild(b);
    });
  }
}

function reiniciar() {
  paso = "inicio";
  mostrar();
}

mostrar();
const miTitulo = document.querySelector("h1");
miTitulo.textContent = "Que pasa gil";

function presion() {
   alert("Se presiono el boton");
}

var botn = document.getElementById("boton");
botn.addEventListener("click",presion);
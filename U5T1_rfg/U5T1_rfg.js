//Array que se recorre a la hora de hacer el alert
let variables = ["nombre", "edad", "curso"];

//Variables predefinidas (Nota: En un futuro estos datos se pueden sacar de un formulario)
let nombre = "ricardo";
let edad = 23;
let curso = "daw2";

//Botones
let btnCookie = document.getElementById("btnCookie");
let btnLocal = document.getElementById("btnLocal");
let btnSession = document.getElementById("btnSession");

//Evento de los botones
btnCookie.addEventListener("click", alertCookie);
btnLocal.addEventListener("click", alertLocal);
btnSession.addEventListener("click", alertSession);

//Creación Cookie(Nota: Todo esto se puede sustituir, junto con la creación en local y Session, en un metodo que inicie al hablar la página. en vez de la forma separada)
document.cookie = "nombre = " + nombre + "; expires=31 Dec 2024, 23:59:59 GMT";
document.cookie = "edad = " + edad + "; expires=31 Dec 2024, 23:59:59 GMT";
document.cookie = "curso = " + curso + "; expires=31 Dec 2024, 23:59:59 GMT";

localStorage.setItem("nombre", nombre);
localStorage.setItem("edad", edad);
localStorage.setItem("curso", curso);

sessionStorage.setItem("nombre", nombre);
sessionStorage.setItem("edad", edad);
sessionStorage.setItem("curso", curso);

let x = document.cookie;

console.log(x);

//Función que devuelve la información contenida en una cookie con un nombre concreto
function getCookie(e) {
  cookieSeparado = x.split("; ");
  console.log("COOKIE");
  for (let i = 0; i < cookieSeparado.length; i++) {
    if (cookieSeparado[i].startsWith(e)) {
      return cookieSeparado[i].substring(e.length + 1);
    }
  }
  return null;
}

//Función para crear el alert para la Cookie, recorre el array 'variables' que contiene todos los campos de las Cookie creadas
function alertCookie(e) {
  let mensajeAlert = "";
  for (let i = 0; i < variables.length; i++) {
    console.log(variables[i]);
    console.log(getCookie(variables[i]));
    mensajeAlert += variables[i] + " = " + getCookie(variables[i]) + "\n";
  }
  console.log(mensajeAlert);
  alert(mensajeAlert);
}

//Función para crear el alert para el LocalStorage, recorre el array 'variables' que contiene todos los campos del localStorage
function alertLocal(e) {
  let mensajeAlert = "";
  console.log("LOCAL");
  for (let i = 0; i < variables.length; i++) {
    console.log(variables[i]);
    console.log(localStorage.getItem(variables[i]));
    mensajeAlert +=
      variables[i] + " = " + localStorage.getItem(variables[i]) + "\n";
  }
  alert(mensajeAlert);
}

//Función para crear el alert para el sessionStorage, recorre el array 'variables' que contiene todos los campos del sessionStorage
function alertSession(e) {
  let mensajeAlert = "";
  console.log("SESSION");
  for (let i = 0; i < variables.length; i++) {
    console.log(variables[i]);
    console.log(sessionStorage.getItem(variables[i]));
    mensajeAlert +=
      variables[i] + " = " + sessionStorage.getItem(variables[i]) + "\n";
  }
  alert(mensajeAlert);
}

let variables = ["nombre", "edad", "curso"];
let nombre = "ricardo";
let edad=23;
let curso="daw2";

let btnCookie = document.getElementById("btnCookie");
let btnLocal = document.getElementById("btnLocal");
let btnSession = document.getElementById("btnSession");

btnCookie.addEventListener("click", alertCookie);
btnLocal.addEventListener("click", alertLocal);
btnSession.addEventListener("click", alertSession);

document.cookie = "nombre = " + nombre + "; expires=31 Dec 2024, 23:59:59 GMT";
document.cookie = "edad = " + edad + "; expires=31 Dec 2024, 23:59:59 GMT";
document.cookie = "curso = " + curso + "; expires=31 Dec 2024, 23:59:59 GMT";

localStorage.setItem("nombre" , nombre);
localStorage.setItem("edad" , edad);
localStorage.setItem("curso" , curso);

sessionStorage.setItem("nombre" , nombre);
sessionStorage.setItem("edad" , edad);
sessionStorage.setItem("curso" , curso);

let x = document.cookie;

console.log(x);

function getCookie(e){
    cookieSeparado = x.split("; ");
    console.log("COOKIE");
    for (let i = 0; i < cookieSeparado.length; i++) {
        if(cookieSeparado[i].startsWith(e)){
            return cookieSeparado[i].substring(e.length+1);
        }
    }
    return null;
}

function alertCookie(e){
    let mensajeAlert = "";
    for (let i = 0; i < variables.length; i++) {
        console.log(variables[i]);
        console.log(getCookie(variables[i]));
        mensajeAlert += variables[i] + " = " + getCookie(variables[i]) + "\n";
    }
    console.log(mensajeAlert);
    alert(mensajeAlert);
}

function alertLocal(e){
    let mensajeAlert = "";
        console.log("LOCAL");
        for (let i = 0; i < variables.length; i++) {
            console.log(variables[i]);
            console.log(localStorage.getItem(variables[i]));
            mensajeAlert += variables[i] + " = " + localStorage.getItem(variables[i]) + "\n";
        }
    alert(mensajeAlert);
}

function alertSession(e){
    let mensajeAlert = "";
        console.log("SESSION");
        for (let i = 0; i < variables.length; i++) {
            console.log(variables[i]);
            console.log(sessionStorage.getItem(variables[i]));
            mensajeAlert += variables[i] + " = " + sessionStorage.getItem(variables[i]) + "\n";
        }
    alert(mensajeAlert);
}
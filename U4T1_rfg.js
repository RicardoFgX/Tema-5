

document.getElementById("comprobar").addEventListener("click", comprobar)

let formulario = document.querySelector("form");
console.log(formulario.elements);
/*
function comprobar(e){
    console.log("prueba1")
    for (let i = 0; i < formulario.elements.length; i++) {
        console.log(formulario.elements[i]);
        if(formulario.elements[i].value === ""){
            console.log("prueba2")
            alert("El campo: " + formulario.elements[i].name + " no puede estar en blanco")
            formulario.elements[i].className = "error";
            formulario.elements[i].focus();
            return false;
        }
    }
    return true;
}
*/
function comprobar(e){
    let check;
    resetearClases();
    checK = (comprobarVacio() && validarDNI(document.getElementById("dni")) && validarNombre(document.getElementById("nombre")));
    
}

function resetearClases(){
    for (let i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}

function comprobarVacio(){
    let check = true;
    for (let i = 0; i < formulario.elements.length; i++) {
        if(formulario.elements[i].value === ""){
            formulario.elements[i].className = "error";
            check = false;
        }
    }
    return check;
}

function validarDNI(dni) {
    console.log(dni.value);
    let patronDni = /^\d{8}-[a-zA-Z]$/;
    if(patronDni.test(dni.value)){
        return true;
    }
    dni.className = "error";
    return false;
    
}

function validarNombre(nombre) {
    let nombres = nombre.value.split(' ');
    if(nombres.length >= 2 && nombres.length <= 4){
        return true;
    }
    nombre.className = "error";
    return false;
}

function validarEmail(email) {
    return email.includes('@');
}

function validarWEB(web) {
    return web.startsWith("http://www.");
}

function validarContrasena(contrasena) {
    return (contrasena.length >= 8 && contrasena.length <= 10);
}

document.getElementById("enviar").addEventListener("click", validarFormulario)

let formulario = document.querySelector("form");
console.log(formulario.elements);

let nombre = document.getElementById("nombre").value;
let dni = document.getElementById("dni").value;
let fabricante = document.getElementById("fabricante").value;
let password = document.getElementById("password").value;
let mensajeFinal = document.getElementById("mensaje-error");
let mensajeError = [];

function validarFormulario(e) {
    let check;
    mensajeFinal.children.remove();
    resetearClases();
    checK = comprobarVacio();
    clasesValidadas();
    console.log(mensajeFinal);
    console.log(mensajeError);

    escribirTodo();
    
    console.log(mensajeFinal);
}

function comprobarVacio(){
    let check = true;
    for (let i = 0; i < formulario.elements.length; i++) {
        if(formulario.elements[i].value === ""){
            console.log(formulario.elements[i].id)
            mensajeError[i] = "El campo " + formulario.elements[i].id + " no puede estar vacio"
            formulario.elements[i].className = "error";
            check = false;
        }
    }
    return check;
}

function clasesValidadas(){
    for (let i = 0; i < formulario.elements.length; i++) {
        if(formulario.elements[i].className !== "error"){
            formulario.elements[i].className = "correcto";
        }
    }
}

function resetearClases(){
    for (let i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}

function escribirTodo() {
    let mensajesNoNulos = mensajeError.filter(elemento => elemento !== null);
    mensajeFinal.innerHTML = mensajesNoNulos.join("<br>");
}

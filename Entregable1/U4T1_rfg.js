
document.getElementById("enviar").addEventListener("click", validarFormulario);
document.getElementById("resetear").addEventListener("click", resetearFormulario);

let formulario = document.querySelector("form");

let nombre = document.getElementById("nombre");
let dni = document.getElementById("dni");
let fabricante = document.getElementById("fabricante");
let contraseña = document.getElementById("contraseña");
let mensajeFinal = document.getElementById("mensaje-error");
let mensajeError = [];

let check = true;

// Función para validar el formulario, me baso en un array para guardar de manera ordenada los mensajes de error y 
// luego otro que controla el div donde se van a escribir el mensaje de error que se muestra por pantalla
function validarFormulario(e) {
    mensajeFinal.innerHTML = "";
    console.log(mensajeError);
    mensajeError = [];

    resetearClases();
    validarNombre();
    validarDNI();
    validarContraseña();
    comprobarVacio();

    if (check) {
        console.log("Enviando a vacunas.php")
        window.location.href = 'vacunas.php';
    } else {
        clasesValidadas();

        //console.log(mensajeError);

        escribirTodo();

        //console.log(mensajeFinal);
    }

}

//Función para comprobar que los campos del formulario no esten vacios, si lo estuviera añade al array de error en una posición concreta el mensaje de este error
function comprobarVacio() {
    let check = true;
    for (let i = 0; i < formulario.elements.length; i++) {
        if (formulario.elements[i].value === "") {
            //Comprobación para ver que esta pasando por todos los campos del formulario
            //console.log(formulario.elements[i].id)
            mensajeError[i] = "El campo " + formulario.elements[i].id + " no puede estar vacio"
            formulario.elements[i].className = "error";
            check = false;
        }
    }
}

//Función para hacer que todos los campos que no sean erroneos, es decir, sean correctos tengan la clase 'correcto'
function clasesValidadas() {
    for (let i = 0; i < formulario.elements.length; i++) {
        if (formulario.elements[i].className !== "error") {
            formulario.elements[i].className = "correcto";
        }
    }
}

//Función para quitar el estilo de bordes de los campos del formulario
function resetearClases() {
    for (let i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}

//Función para pasar todo el array a un elemento visualizable por pantalla
function escribirTodo() {
    let mensajesNoNulos = mensajeError.filter(elemento => elemento !== null);
    console.log(mensajesNoNulos);
    mensajeFinal.innerHTML = mensajesNoNulos.join("<br>");
}

//Función para comprobar que el campo nombre esta formado por letras
function validarNombre() {
    let regex = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ']+$/;
    console.log("Nombre introducido: " + nombre.value);
    if (!regex.test(nombre.value)) {
        mensajeError[0] = "El nombre del paciente no está en formato válido.";
        formulario.elements[0].className = "error";
        check = false;
    }
}

//Función para validar el campo DNI como xx.xxx.xxx-letra
function validarDNI() {
    let regexDNI = /^\d{2}\.\d{3}\.\d{3}-[A-Za-z]$/;
    console.log("Dni introducido: " + dni.value);
    if (!regexDNI.test(dni.value)) {
        mensajeError[1] = "El DNI no tiene el formato válido [Formato de ejemplo: 99.999.999-X]";
        formulario.elements[1].className = "error";
        check = false;
    }
}

//Función para validar que la contraseña cumpla con las especificaciones
function validarContraseña() {
    let regexContraseña = /^[A-Z]{2}(?=.*[^A-Za-z0-9:])(?=.*[#])(?=.*\d.*\d)[^\s]{6,}$/;
    console.log("Contraseña introducido: " + contraseña.value);
    if (!regexContraseña.test(contraseña.value)) {
        mensajeError[3] = "La contraseña no cumple con las reglas especificadas.";
        formulario.elements[3].className = "error";
        check = false;
    }
}

//Función para el botón de reset
function resetearFormulario(e) {
    formulario.reset();
    resetearClases();
    mensajeFinal.innerHTML = "";
    mensajeError = [];
}


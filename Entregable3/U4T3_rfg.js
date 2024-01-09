let formulario = document.querySelector("form");
//Comprobación elementos del formulario
console.log(formulario.elements);

//Variable para almacenar mensjaes de error
let mensajeFinal = document.getElementById("errores");
let mensajeError = [];

document.getElementById('form').addEventListener('submit', validarFormulario);
document.getElementById('form').addEventListener('reset', resetearForm);

//Función para el botón submit, sobrescribe el evento default de este y realiza una validación previa. Si esta todo correcto realiza
//el submit, en caso contrario, devuelve false y no realiza submit
function validarFormulario(e) {
    e.preventDefault();
    let check;
    resetearForm();
    check = comprobarContraseña();
    checK = comprobarVacio();
    clasesValidadas();

    console.log(mensajeError);

    escribirTodo();
    
    console.log(mensajeFinal);

    if(check){
        form.submit();
    } else{
        return false;
    }
}

//Función adicional al reset, se borra el mensaje de error y las clases de validación de los campos del formulario
function resetearForm(){
    mensajeFinal.innerHTML="";
    mensajeError = [];
    for (let i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}

//Función para comprobar que recorre todos los campos del formulario, a excepción de los dos últimos(submit y reset) y comprueba que no esten vacios
//en caso de estarlos se les asigna la clase 'error' que le da el resaltado en rojo
function comprobarVacio(){
    let check = true;
    for (let i = 0; i < formulario.elements.length-2; i++) {
        if(formulario.elements[i].value === ""){
            console.log(formulario.elements[i].id)
            mensajeError[i] = "El campo " + formulario.elements[i].id + " no puede estar vacio"
            formulario.elements[i].className = "error";
            check = false;
        }
    }
    return check;
}

//Función que comprueba que la contraseña cumpla con las especificaciones, en caso resultado no favorable se le asigna la clase error,
//que le da el resaltado en rojo
function comprobarContraseña(){
    let passwordRegExp = /^[A-Z]@[\w]{6,12}-[^\w\d%]$/;
    console.log(password.value);
        if (!passwordRegExp.test(password.value)) {
            mensajeError[3] = "Formato de contraseña incorrecto.";
            formulario.elements[3].className = "error";
            return false;
        }
        return true;
}

//Función que recorre todo el formulario a excepción de reset y submit y comprueba si no tienen la clase asignada 'error', si no tuvieran,
//signicaría que esta vacio y entonces se le asigna la clase 'correcto'
function clasesValidadas(){
    for (let i = 0; i < formulario.elements.length-2; i++) {
        if(formulario.elements[i].className !== "error"){
            formulario.elements[i].className = "correcto";
        }
    }
}

//Función para escribir todos los mensajes de error en un div
function escribirTodo() {
    let mensajesNoNulos = mensajeError.filter(elemento => elemento !== null);
    mensajeFinal.innerHTML = mensajesNoNulos.join("<br>");
}
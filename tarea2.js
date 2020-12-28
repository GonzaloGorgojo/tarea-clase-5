let primerNombre = document.querySelector("#primerNombre");
let segundoNombre = document.querySelector("#segundoNombre");
let apellido = document.querySelector("#apellido");
let edad = document.querySelector("#edad");
let botonSaludo = document.querySelector("#botonSaludo");
let saludo = document.querySelector("#saludo");
let tituloSaludo = document.querySelector("h1")

botonSaludo.onclick = function(){
    saludo.value = `Hola ${primerNombre.value} ${segundoNombre.value} ${apellido.value} de ${edad.value} años`;
    tituloSaludo.innerHTML = `Bienvenido ${primerNombre.value}`
    return false
}
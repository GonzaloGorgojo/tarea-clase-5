let listaNumeros = document.querySelectorAll("#listaNumeros");
let boton = document.querySelector("#mostrarResultado");
let promedio = document.querySelector("#promedio");
let pequeño = document.querySelector("#pequeño");
let grande = document.querySelector("#grande");
let repite = document.querySelector("#repite");
let suma = 0;
let masPequeño = Number(listaNumeros[0].innerText);
let masGrande = Number(listaNumeros[0].innerText);
let numeroRepetido = Number(listaNumeros[0].innerText);


boton.onclick = function(){
    for(i = 0; i < listaNumeros.length; i++){
        suma += Number(listaNumeros[i].innerText)
    }
    total = suma / listaNumeros.length;
    promedio.innerText = `El promedio es ${total}`

    for(i = 0; i < listaNumeros.length; i++){
        if(masPequeño > Number(listaNumeros[i].innerText)){
            masPequeño = Number(listaNumeros[i].innerText)
        }
    }
    pequeño.innerText = `El numero mas pequeño es ${masPequeño}`

    for(i = 0; i < listaNumeros.length; i++){
        if(masGrande < Number(listaNumeros[i].innerText)){
            masGrande = Number(listaNumeros[i].innerText)
        }
    }
    grande.innerText = `El numero mas grande es ${masGrande}`

    for(i = 0; i < listaNumeros.length; i++){
        if(numeroRepetido == Number(listaNumeros[i].innerText)){
            numeroRepetido = Number(listaNumeros[i].innerText)
        }
    }
    repite.innerText = `El numero mas frecuente es ${numeroRepetido}`

    boton.disabled=true;

    return false
}
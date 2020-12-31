let listaNumeros = document.querySelectorAll("#listaNumeros");
let boton = document.querySelector("#mostrarResultado");
let promedio = document.querySelector("#promedio");
let pequeño = document.querySelector("#pequeño");
let grande = document.querySelector("#grande");
let repite = document.querySelector("#repite");
let suma = 0;
let masPequeño = Number(listaNumeros[0].innerText);
let masGrande = Number(listaNumeros[0].innerText);
let numeroRepetido = 1;
let contador = 0;
let frecuente;



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
        for(x = i; x<listaNumeros.length; x++){
            if(Number(listaNumeros[i].innerText) == Number(listaNumeros[x].innerText)){
                contador++;
            }
            if(numeroRepetido < contador){
                numeroRepetido = contador;
                frecuente = Number(listaNumeros[i].innerText)
            }
        }
        contador = 0;
    }
    repite.innerText = `El numero mas frecuente es ${frecuente}`

    boton.disabled=true;

    return false
}
let sueldoAnual = document.querySelector("#salario-anual");
let sueldoMensual = document.querySelector("#salario-mensual");
let botonCalculo = document.querySelector("#botonCalculoSueldo");

botonCalculo.onclick = function(){
    sueldoMensual.value = parseInt(sueldoAnual.value / 12);
    return false;
}
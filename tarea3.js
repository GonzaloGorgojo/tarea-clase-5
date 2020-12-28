let botonCalculo = document.querySelector("#botonCalcular");
let botonRefrescar = document.querySelector("#botonRefrescar");
let resultadoTotal = document.querySelector("#sumaTotal");
let horas = document.querySelectorAll("#horasClase");
let minutos = document.querySelectorAll("#minutosClase");
let segundos = document.querySelectorAll("#segundosClase");
let totalHoras = 0;
let totalMinutos = 0;
let totalSegundos = 0;

botonCalculo.onclick = function () {
  for (i = 0; i < 5; i++) {
    totalHoras = totalHoras + Number(horas[i].value);
    totalMinutos = totalMinutos + Number(minutos[i].value);
    totalSegundos = totalSegundos + Number(segundos[i].value);
  }
  resultadoTotal.innerHTML = `La suma total es de ${totalHoras} horas ${totalMinutos} minutos y ${totalSegundos} segundos`;
  botonCalculo.disabled=true;
  return false;
};

botonRefrescar.onclick = function () {
  location.reload();
};

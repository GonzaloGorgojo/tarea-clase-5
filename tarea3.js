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
  for (i = 0; i < horas.length; i++) {
    totalHoras = totalHoras + Number(horas[i].value) * 3600;
    totalMinutos = totalMinutos + Number(minutos[i].value) * 60;
    totalSegundos = totalSegundos + Number(segundos[i].value);
  }
let sumaTiempos = totalHoras + totalMinutos + totalSegundos;

let horasFinal = Math.floor(sumaTiempos/3600)
let minutosFinal = Math.floor( (sumaTiempos % 3600) / 60)
let segundosFinal = sumaTiempos - horasFinal*3600 - minutosFinal*60

  resultadoTotal.innerHTML = `La suma total es de ${horasFinal} horas ${minutosFinal} minutos y ${segundosFinal} segundos`;
  botonCalculo.disabled=true;
  return false;
};

botonRefrescar.onclick = function () {
  location.reload();
};

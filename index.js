let tempoTotal = 0;
let cronometro;
let emExecucao = false;

function formatarTempo(tempo) {
  const horas = Math.floor(tempo / 3600);
  const minutos = Math.floor((tempo % 3600) / 60);
  const segundos = tempo % 60;

  const formatoHoras = horas < 10 ? `0${horas}` : `${horas}`;
  const formatoMinutos = minutos < 10 ? `0${minutos}` : `${minutos}`;
  const formatoSegundos = segundos < 10 ? `0${segundos}` : `${segundos}`;

  return `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
}

function atualizarCronometro() {
  tempoTotal++;
  document.getElementById('cronometro').innerText = formatarTempo(tempoTotal);
}

function iniciarCronometro() {
  if (!emExecucao) {
    cronometro = setInterval(atualizarCronometro, 1000);
    emExecucao = true;
  }
}

function pararCronometro() {
  clearInterval(cronometro);
  emExecucao = false;
}

function zerarCronometro() {
  tempoTotal = 0;
  document.getElementById('cronometro').innerText = formatarTempo(tempoTotal);
  pararCronometro();
}
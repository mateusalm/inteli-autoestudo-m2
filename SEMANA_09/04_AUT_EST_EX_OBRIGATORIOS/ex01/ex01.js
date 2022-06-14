function calcular() {
  var resultado = document.getElementById('resultado')
  var numero = document.getElementById('numero').value
  if (numero < 100 || numero > 999) {
    resultado.innerHTML = 'Número inválido.'
  } else {
    var valor = Math.floor(numero / 100)
    if (valor % 2 == 0) {
      resultado.innerHTML += 'O número da centena é par.'
    } else {
      resultado.innerHTML += 'O número da centena é ímpar.'
    }
  }
}

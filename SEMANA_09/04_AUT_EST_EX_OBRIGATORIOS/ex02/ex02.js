function calcular() {
  var soma = 0
  var numero = document.getElementById('numero').value
  soma += Math.floor(numero / 100)
  numero = numero % 100
  soma += Math.floor(numero / 10)
  numero = numero % 10
  soma += numero
  document.getElementById(
    'resultado'
  ).innerHTML = `A soma dos dígitos do número digitado é igual a ${soma}.`
}

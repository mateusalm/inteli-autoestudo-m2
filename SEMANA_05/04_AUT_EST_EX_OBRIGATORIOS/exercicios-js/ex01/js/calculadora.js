function calcular() {
  var num01 = Number(document.querySelector('#num01').value)
  var num02 = Number(document.querySelector('#num02').value)
  var operation = document.querySelector('#operation').value
  var resposta = document.querySelector('#resposta')
  var resultado
  if (operation == '+') {
    resultado = num01 + num02
  }
  if (operation == '-') {
    resultado = num01 - num02
  }
  if (operation == '*') {
    resultado = num01 * num02
  }
  if (operation == '/') {
    resultado = num01 / num02
  }
  if (operation == '//') {
    resultado = Math.floor(num01 / num02)
  }
  if (operation == '%') {
    resultado = num01 % num02
  }
  resposta.innerHTML = `${num01} ${operation} ${num02} = ${resultado}`
}

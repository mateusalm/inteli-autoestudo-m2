var resultado = document.getElementById('resultado')

function calcular() {
  var n = document.getElementById('n').value
  var num1 = 0,
    num2 = 1,
    num3
  var lista = []
  if (n < 0) {
    resultado.innerHTML = 'Número inválido.'
  } else {
    for (let i = 1; i <= n; i++) {
      lista.push(num1)
      num3 = num1 + num2
      num1 = num2
      num2 = num3
    }
    console.log(lista)
    resultado.innerHTML = `Lista: ${lista}`
  }
}

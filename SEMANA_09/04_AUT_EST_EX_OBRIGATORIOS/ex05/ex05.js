const resultado = document.getElementById('resultado')

function calcular() {
  var num1 = document.getElementById('num1').value
  var num2 = document.getElementById('num2').value
  var lista = []
  var divisoes
  console.log(num1)
  console.log(num2)
  if (num1 <= 0 || num2 <= 0) {
    resultado.innerHTML =
      'Números inválidos. Insira valores inteiros maiores que zero!'
  } else {
    for (i = num1; i <= num2; i++) {
      divisoes = 0
      for (j = 1; j <= i; j++) {
        if (i % j == 0) {
          divisoes += 1
        }
        if (divisoes == 3) {
          break
        }
      }
      if (divisoes <= 2) {
        lista.push(i)
      }
      console.log(lista)
      resultado.innerHTML = `Números primos no intervalo de ${num1} a ${num2}: ${lista}`
    }
  }
}

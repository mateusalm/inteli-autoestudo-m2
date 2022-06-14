var resultado = document.getElementById('resultado')

function calcular() {
  var n = document.getElementById('n').value
  if (n < 0) {
    resultado.innerHTML = 'Número inválido.'
  } else {
    var num
    var lista = [1, 1]
    for (let i = 2; i == n; i++) {
      num = lista[i - 1] + lista[i - 2]
      lista.push(num)
    }
    resultado.innerHTML = `Lista: ${lista}`
  }
}

function calcPreco() {
  var preco
  var periodo = document.getElementById('periodo').value
  var pessoas = document.getElementById('pessoas').value
  if (periodo == 'diurno') {
    preco = 200
    if (pessoas > 50) {
      preco = preco * 0.6
    }
  } else {
    preco = 100
    if (pessoas > 50) {
      preco = preco * 0.8
    }
  }
  document.getElementById(
    'resultado'
  ).innerHTML = `O preço da passagem é R$ ${preco.toFixed(2)}`
}

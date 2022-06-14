var resultado = document.getElementById('resultado')

function ordenar() {
  var listaNomes = []
  var nome1 = document.getElementById('nome1').value
  var nome2 = document.getElementById('nome2').value
  var nome3 = document.getElementById('nome3').value
  listaNomes.push(nome1, nome2, nome3)
  listaNomes.sort()
  resultado.innerHTML = `A lista de nomes em ordem alfabética é ${listaNomes}`
}

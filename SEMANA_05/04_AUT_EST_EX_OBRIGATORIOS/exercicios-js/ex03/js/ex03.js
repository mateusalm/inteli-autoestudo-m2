var resultado = document.getElementById('resultado')

function ordenar() {
  var lista = document.getElementById('lista').value
  var listaOrdenadaStr = lista.split(',')
  resultado.innerHTML = `A lista ordenada é ${listaOrdenadaStr}.`
  var valorFoco = document.getElementById('valor-foco').value
  listaOrdenadaStr.forEach(index => {
    if (listaOrdenadaStr[index] == valorFoco) {
      resultado.innerHTML += ` A posição do valor foco é ${
        parseInt(index) + 1
      }.`
    }
  })
}

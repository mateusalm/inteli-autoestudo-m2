var resultado = document.getElementById('resultado')

function ordenar() {
  var lista = document.getElementById('lista').value
  var listaOrdenada = lista.split(',').sort()
  resultado.innerHTML = `A lista ordenada é ${listaOrdenada}.`
  var valorFoco = document.getElementById('valor-foco').value
  listaOrdenada.forEach(index => {
    if (listaOrdenada[index] == valorFoco) {
      resultado.innerHTML += `A posição do valor foco é ${index})}.`
    }
  })
}

const resultado = document.getElementById('resultado')

function validar() {
  var celular = document.getElementById('numero').value
  var arrayCelular = celular.split('')
  if (
    arrayCelular[0] == '(' &&
    arrayCelular[3] == ')' &&
    arrayCelular[9] == '-' &&
    arrayCelular.length == 14
  ) {
    resultado.innerHTML = 'Obrigado! O formato de celular está váldo.'
  } else {
    resultado.innerHTML =
      'Erro: número de celular inserido está fora do padrão.'
  }
}

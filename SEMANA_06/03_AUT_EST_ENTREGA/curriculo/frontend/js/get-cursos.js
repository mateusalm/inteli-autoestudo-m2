function getCursos() {
  var url = './data/cursos'

  var xhttp = new XMLHttpRequest()
  xhttp.open('GET', url, false)
  xhttp.send()

  document.getElementById('mostrar-cursos').innerHTML += xhttp.responseText
}

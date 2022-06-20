function getCursos() {
  var url = './data/cursos'

  var xhttp = new XMLHttpRequest()
  xhttp.open('GET', url, false)
  xhttp.send()

  var cursos = JSON.parse(xhttp.responseText)

  for (i = 0; i < xhttp.responseText.length; i++) {
    document.getElementById(
      'mostrar-cursos'
    ).innerHTML += `<li>Nome: ${cursos[i].nome}. Linguagem: ${cursos[i].linguagem}</li>`
  }
  // document.getElementById('mostrar-cursos').innerHTML += xhttp.responseText
}

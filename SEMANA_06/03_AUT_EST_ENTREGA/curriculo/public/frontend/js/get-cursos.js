function getCursos() {
  var url = 'https://jsonplaceholder.typicode.com/todos/1'

  var xhttp = new XMLHttpRequest()
  xhttp.open('GET', url, false)
  xhttp.send() //A execução do script pára aqui até a requisição retornar do servidor

  $(getResDiv).append('<br />' + xhttp.responseText)
  $(getResDiv).append(
    '<br />Seleção do <i>title</i>: ' + JSON.parse(xhttp.response).title
  )
  //console.log(xhttp.responseText);
}

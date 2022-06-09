// function getProjectsList() {
// 	let url = "/allprojects"

// 	let xhttp = new XMLHttpRequest()
// 	xhttp.open("get", url, false)
// 	xhttp.send()

// 	let data = JSON.parse(xhttp.responseText)
// 	console.log(data)
// 	return data
// }
function getCursos() {
  let url = '/backend/cursos'

  let xhttp = new XMLHttpRequest()
  xhttp.open('get', url, false)
  xhttp.send()

  let data = JSON.parse(xhttp.responseText)
  console.log(data)
}

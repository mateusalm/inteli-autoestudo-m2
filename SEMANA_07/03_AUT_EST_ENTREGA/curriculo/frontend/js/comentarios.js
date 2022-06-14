const areaComentarios = document.getElementById('lista-comentarios')

function comentar() {
  var comentario = document.getElementById('comentario').value
  areaComentarios.innerHTML += `<li>"${comentario}"</li>`
}

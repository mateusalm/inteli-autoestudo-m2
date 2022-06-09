var alunos
var notasProvas = []
var notasTrabalhos = []
var somaProvas = 0
var somaTrabalhos = 0

function generateAlunos() {
  console.log('teste')
  alunos = document.getElementById('alunos').value
  for (i = 0; i < alunos; i++) {
    document.getElementById('dados').innerHTML += `</br><strong>Aluno ${
      i + 1
    }:</strong> <br />
    <form>
    <label for="nota-prova">Nota da prova: </label>
    <input type="number" name="prova" id="prova${i}" />
    <br />
    <label for="trabalho">Nota do trabalho: </label>
    <input type="number" name="trabalho" id="trabalho${i}" />
    </form><br />`
  }
  document.getElementById('dados').innerHTML +=
    '<button type="button" onclick="calcular()">Calcular</button>'
}

function calcular() {
  var resultado = document.getElementById('resultado')

  for (i = 0; i < alunos; i++) {
    var prova = Number(document.getElementById(`prova${i}`).value)
    var trabalho = Number(document.getElementById(`trabalho${i}`).value)
    notasProvas.push(prova)
    notasTrabalhos.push(trabalho)
    somaProvas += prova
    somaTrabalhos += trabalho
  }

  var mediaGeral = (somaProvas * 2 + somaTrabalhos * 3) / (2 + 3)
  var mediaProvas = somaProvas / alunos
  var mediaTrabalhos = somaTrabalhos / alunos
  var maiorProva
  var maiorTrabalho

  for (i = 0; i < alunos; i++) {
    if (i == 0) {
      maiorProva = notasProvas[i]
    } else {
      if (notasProvas[i] > maiorProva) {
        maiorProva = notasProvas[i]
      }
    }
  }

  for (i = 0; i < alunos; i++) {
    if (i == 0) {
      maiorTrabalho = notasTrabalhos[i]
    } else {
      if (notasTrabalhos[i] > maiorTrabalho) {
        maiorTrabalho = notasTrabalhos[i]
      }
    }
  }

  resultado.innerHTML = '<strong>Média dos alunos:</strong> <br />'

  for (i = 0; i < alunos; i++) {
    var media = (notasProvas[i] * 2 + notasTrabalhos[i] * 3) / (2 + 3)
    resultado.innerHTML += `<br />Aluno ${i + 1}: ${media.toFixed(1)}`
  }

  resultado.innerHTML += `<br /> <br />
  <strong>Média Geral: </strong>${mediaGeral}
  <br />
  <strong>Média das notas das provas: </strong>${mediaProvas}<br />
  <strong>Média das notas dos trabalhos: </strong>${mediaTrabalhos}<br />
  <strong>Maior nota entre as provas: </strong>${maiorProva}<br />
  <strong>Maior nota entre os trabalhos: </strong>${maiorTrabalho}
  
  `

  // console.log(notasProvas, somaProvas, notasTrabalhos, somaTrabalhos)
}

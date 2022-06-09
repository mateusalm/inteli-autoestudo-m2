var qtdInput = document.getElementById('quantidade-produtos')
var qtdRes = document.getElementById('quantidade02')
var qtdTotal

function definirQtd() {
  qtdTotal = qtdInput.value
  showQtd()
}

function showQtd() {
  qtdRes.innerHTML = qtdTotal
}

function maisQtd() {
  qtdTotal = Number(qtdTotal) + 1
  showQtd()
}

function menosQtd() {
  qtdTotal -= 1
  showQtd()
}

function calcular() {
  var notas100 = 0
  var notas50 = 0
  var notas20 = 0
  var notas10 = 0
  var notas5 = 0
  var notas2 = 0
  var notas1 = 0
  var preco = document.querySelector('#preco').value
  var numDeNotas = document.querySelector('#numero-de-notas')

  if (preco >= 100) {
    notas100 = Math.floor(preco / 100)
    preco = preco % 10
  }

  if (preco >= 50) {
    notas50 = Math.floor(preco / 50)
    preco = preco % 50
  }

  if (preco >= 20) {
    notas20 = Math.floor(preco / 20)
    preco = preco % 20
  }

  if (preco >= 10) {
    notas10 = Math.floor(preco / 10)
    preco = preco % 10
  }

  if (preco >= 5) {
    notas5 = Math.floor(preco / 5)
    preco = preco % 5
  }

  if (preco >= 2) {
    notas2 = Math.floor(preco / 2)
    preco = preco % 2
  }

  if (preco > 0) {
    notas1 = preco
  }

  numDeNotas.innerHTML =
    'Para ser com o menor número de notas possível, o pagamento deve ser feito com:'

  if (notas100 > 1) {
    numDeNotas.innerHTML += `<br>${notas100} notas de R$100.00. `
  } else if (notas100 == 1) {
    numDeNotas.innerHTML += `<br>${notas100} nota de R$100.00. `
  }

  if (notas50 > 1) {
    numDeNotas.innerHTML += `<br>${notas50} notas de R$50.00. `
  } else if (notas50 == 1) {
    numDeNotas.innerHTML += `<br>${notas50} nota de R$50.00. `
  }

  if (notas20 > 1) {
    numDeNotas.innerHTML += `<br>${notas20} notas de R$20.00. `
  } else if (notas20 == 1) {
    numDeNotas.innerHTML += `<br>${notas20} nota de R$20.00. `
  }

  if (notas10 > 1) {
    numDeNotas.innerHTML += `<br>${notas10} notas de R$10.00. `
  } else if (notas10 == 1) {
    numDeNotas.innerHTML += `<br>${notas10} nota de R$10.00. `
  }

  if (notas5 > 0) {
    numDeNotas.innerHTML += `<br>${notas5} notas de R$5.00. `
  } else if (notas5 == 1) {
    numDeNotas.innerHTML += `<br>${notas5} nota de R$5.00. `
  }

  if (notas2 > 1) {
    numDeNotas.innerHTML += `<br>${notas2} notas de R$2.00. `
  } else if (notas2 == 1) {
    numDeNotas.innerHTML += `<br>${notas2} nota de R$2.00. `
  }

  if (notas1 > 0) {
    numDeNotas.innerHTML += `<br>${notas1} notas de R$1.00.`
  } else if (notas1 == 1) {
    numDeNotas.innerHTML += `<br>${notas1} nota de R$1.00. `
  }
}

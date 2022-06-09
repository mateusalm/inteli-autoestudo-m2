function inverter() {
  const valor01 = document.getElementById('valor01').value
  const valor02 = document.getElementById('valor02').value
  document.getElementById('valor01').value = valor02
  document.getElementById('valor02').value = valor01
}

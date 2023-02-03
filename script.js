
function salvar() {
  var txt = window.document.getElementById('txt')
  var res = window.document.getElementById('res')
  var sal = (txt.value)
  res.innerHTML = `<p>Obrigado(a) <strong>${sal}</strong> por escolher nosso curso!</p> `
}
function assinar0() {
  var txt = window.document.getElementById('txt')
  var res = window.document.getElementById('res')
  var sal = (txt.value)

  var but0 = window.document.getElementById('but0')
  var ass0 = window.document.getElementById('ass0')
  var ass= (but0.value)
  ass0.innerHTML = `<p>Obrigado ${sal} por assinar o plano gratuito do nosso curso. <strong>Seja Bem Vindo(a)!</strong></p>`
}

function assinar1() {
  var txt = window.document.getElementById('txt')
  var res = window.document.getElementById('res')
  var sal = (txt.value)

  var but1 = window.document.getElementById('but1')
  var ass1 = window.document.getElementById('ass1')
  var ass= (but1.value)
  ass1.innerHTML = `<p>Obrigado ${sal} por assinar o plano VIP do nosso curso. <strong>Seja Bem Vindo(a)!</strong></p>`
}

function assinar2() {
  var txt = window.document.getElementById('txt')
  var res = window.document.getElementById('res')
  var sal = (txt.value)

  var but2 = window.document.getElementById('but2')
  var ass2 = window.document.getElementById('ass2')
  var ass= (but2.value)
  ass2.innerHTML = `<p>Obrigado ${sal} por assinar o plano VIP Plus do nosso curso. <strong>Seja Bem Vindo(a)!</strong></p>`
}
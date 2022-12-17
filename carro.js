// Tamanho dos Carros
let comprimentoCarro = 50
let alturaCarro = 30

//Variáveis carros em uma lista [array]
let xCarros = [510, 510, 510, 510, 510, 510]
let yCarros = [45, 100, 155, 215, 265, 320]
let velocidadeCarros = [2, 3, 5.5, 3.3, 2.5, 4.3]

// mostra carro
function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)  
  }
  // image(imagemCarros[0], xCarros[0], yCarros[0], comprimentoCarro, alturaCarro)
  // image(imagemCarros[1], xCarros[1], yCarros[1], comprimentoCarro, alturaCarro)
  // image(imagemCarros[2], xCarros[2], yCarros[2], comprimentoCarro, alturaCarro)
}

//movimento carro
function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] = xCarros[i] - velocidadeCarros[i]  
  }
  loopCarros()
}

function loopCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (xCarros[i] < -50) {
      xCarros[i] = 510
    }
  }
}

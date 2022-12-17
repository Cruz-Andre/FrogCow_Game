//variáveis Player
let xPlayer = 100
let yPlayer = 370
let comprimentoPlayer = 27
let alturaPlayer = 27
let vidas = 5

// mostra player
function mostraPlayer() {
  image(imagemPlayer, xPlayer, yPlayer, comprimentoPlayer, alturaPlayer)
}

//movimenta player
function movimentaPlayer() {
  if (keyIsDown(UP_ARROW)){
    yPlayer = yPlayer - 3
  }
  if (keyIsDown(DOWN_ARROW) && yPlayer < 370){
    yPlayer = yPlayer + 1
  }
  if (keyIsDown(LEFT_ARROW) && xPlayer > 0){
    xPlayer = xPlayer - 1
  }
  if (keyIsDown(RIGHT_ARROW) && xPlayer < 475){
    xPlayer = xPlayer + 1
  }
}

// verifica colisão
let colisao = false
function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xPlayer, yPlayer, comprimentoPlayer - 7, alturaPlayer)
    if (colisao) {
      print("colidiu!")
      somColisao()
      quantasVidasRestam(xPlayer, yPlayer)
      yPlayer = 370
    } 
  }
}

//Pontuação
let meusPontos = 0
function mostraPontos() {
  textSize(20)
  fill(color(240, 230, 140))
  text('Player Score ' + meusPontos, 10, 26)
  for (let i = vidas; i > 0; i--) {
    image(imagemPlayer, 320 + i * 30, 370, comprimentoPlayer, alturaPlayer)
  }
}

function marcaPonto() {
  if(yPlayer < 10) {
    yPlayer = 370
    meusPontos += 1
    somPonto.play()
  }
}

// vidas
function quantasVidasRestam(x, y) {
  if (colisao) {
    vidas--
  }
  if (vidas == 0) {
    fill('red')
    textSize(25)
    text('Muuu', x, y)
    musica.stop()
    noLoop()
  }
}

// sons da colisão
function somColisao() {
  let somColidindo = random(sonsColisoes)
  somColidindo.play()
}
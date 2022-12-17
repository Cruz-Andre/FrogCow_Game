function setup() {
  createCanvas(500, 400);
  musica.setVolume(0.1)
  musica.loop()
}

function draw() {
  background(imagemEstrada);
  mostraPlayer()
  movimentaPlayer()
  mostraCarro()
  movimentaCarro()
  verificaColisao()
  mostraPontos()
  marcaPonto()
  copyRight()
  comecar()
}

function copyRight() {
  textSize(15)
  text('André Cruz & Alura 2022', width / 1.520, 26)
}

function comecar() {
  if(!isLooping()) {
    button = createButton('Jogar Novamente')
    button.size(150, 50)
    button.position(width / 3, height / 2)
    button.mousePressed(removerBotao)
    vidas = 5
  }
}

function removerBotao() {
  removeElements()
  loop()
  musica.play()
  meusPontos = 0
}
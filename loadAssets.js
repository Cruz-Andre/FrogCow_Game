let imagemEstrada
let imagemPlayer
let imagemCarro1
let imagemCarro2
let imagemCarro3
let imagemCarros
let musica
let somColisao1
let somColisao2
let somColisao3
let somColisao4
let somColisao5
let sonsColisoes
let somPonto

function preload() {
  imagemEstrada = loadImage('imagens/estrada.png')
  imagemPlayer = loadImage('imagens/ator-1.png')
  imagemCarro1 = loadImage('imagens/carro-1.png')
  imagemCarro2 = loadImage('imagens/carro-2.png')
  imagemCarro3 = loadImage('imagens/carro-3.png')
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro3, imagemCarro1]
  
  musica = loadSound('sons/FroggerFix.mp3')
  
  somColisao1 = loadSound('sons/dsbgdth1.wav')
  somColisao2 = loadSound('sons/dsbgdth2.wav')
  somColisao3 = loadSound('sons/dspodth1.wav')
  somColisao4 = loadSound('sons/dspodth2.wav')
  somColisao5 = loadSound('sons/dssgtdth.wav')
  sonsColisoes = [somColisao1, somColisao2, somColisao3, somColisao4, somColisao5]
  
  somPonto = loadSound('sons/pontos.wav')
}
//codigo de carro
let xCarros = [600,600,600,600,600,600];
let yCarros = [40,96,150,210,270,318];
let comprimentoCarro = 50;
let alturaCarro = 40;

//velocidade carro 
let velocidadeCarros = [3,3.2,6,4.5,5,8.5];

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}

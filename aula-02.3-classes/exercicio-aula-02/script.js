class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }

  correr() {
    return "Correndo";
  }

  andar() {
    return "Andando";
  }

  atacar() {
    return "Atacando";
  }

  defender() {
    return "Se defendendo";
  }
}

//HOMEM ARANHA
const homemAranha = new Heroi("Homem Aranha", "75", "80", "80");
homemAranha.teia = "Solta teia";
homemAranha.sentidoAranha = function () {
  return "Detecta um perigo";
};
document.write(
  `<p>O <strong>${homemAranha.nome}</strong> tem uma quantidade de vida de ${homemAranha.vida}, velocidade ${homemAranha.velocidade} e força ${homemAranha.forca}. Ele também ${homemAranha.teia} e tem um sentido que ${homemAranha.sentidoAranha()}, e por isso ele está ${homemAranha.correr()} atrás do perigo.</p>`,
);

//SUPERMAN
const superman = new Heroi("Superman", "100", "95", "99");
superman.voar = "Voa";
superman.visaoCalor = function () {
  return "Visão de Calor";
};
document.write(
  `<p>O <strong>${superman.nome}</strong> tem vida de ${superman.vida}, velocidade ${superman.velocidade} e força de ${superman.forca}. Ele possui uma ${superman.visaoCalor()} que ele usa para derrotar os inimigos, e quando está em emergência ele ${superman.voar}, mas agora ele está ${superman.andar()}. </p>`,
);

//BATMAN
const batman = new Heroi("Batman", "80", "60", "70");
batman.esconder = "Esconde";
batman.investigar = function() {
    return "Investiga um crime"
};
document.write(`<p>O <strong>${batman.nome}</strong> possui quantidade de vida de ${batman.vida}, velocidade de ${batman.velocidade} e força de ${batman.forca}. Ele tem a habilidade de ${batman.investigar()} e por isso está ${batman.defender()}</p>`)
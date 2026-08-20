//CLASSES NO JAVASCRIPT
class Carro {
  //Nome de classes devem iniciar com a primeira letra maiúscula

  //Atributos
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  //MÈTODOS
  buzinar() {
    return "Beep! Beep!";
  }
}

//CRIANDO UMA INSTÂNCIA (OBJETO) DA CLASSE CARRO
const carroPopular = new Carro("Fiat", "Uno", "2012");
//Acessando os ATRIBUROS e MÉTODOS do objeto
document.write(
  `<p>O carro popular ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e quando buzina ele faz ${carroPopular.buzinar()}</p>`,
);

const carroEsportivo = new Carro("Ferrari", "Spider", "2026");

doxument.write(
  `<p>O carro esportivo ${carroEsportivo.marca} do modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano}, e quando buzina faz ${carroEsportivo.buzinar()}</p>`);

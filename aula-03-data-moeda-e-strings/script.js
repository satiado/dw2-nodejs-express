document.write(`<h3>Manipulando datas:</h3>`);

//Para começarmos a manipular datas no Javascript, precisamos primeiro criar uma instância da classe DATE, que é nativa do Javascript

const dataAtual = new Date();

document.write(dataAtual);

//Pegando o dia atual
const dia = dataAtual.getDate();
document.write(`<p>Hoje é o dia ${dia}</p>`);

//Pegando o mÊs atual
const mes = dataAtual.getMonth() + 1;
document.write(`<p>Estamos no mês ${mes}</p>`);

//Pegando o ano atual
const ano = dataAtual.getFullYear();
document.write(`<p>Data de hoje ${dia}/${mes}/${ano}</p>`);

//ADICIONANDO DIAS MESES E ANOS Á DATA ATUAL
//adicionando 4 dias a data atual
dataAtual.setDate(dataAtual.getDate() + 4);
//Exibindo a nova data
document.write(`<p>Daqui a 4 dias será dia ${dataAtual.getDate()}.</p>`);

//Adicionando 3 meses a data atual
dataAtual.setMonth(dataAtual.getMonth() + 3);
//Exibindo a nova data
document.write(`<p>Daqui a 3 meses será mês ${dataAtual.getMonth() + 1}.</p>`);

//Adicionando 2 anos a data atual
dataAtual.setFullYear(dataAtual.getFullYear() + 2);
//Exibindo a nova data
document.write(`<p>Daqui a 2 anos será ${dataAtual.getFullYear()}.</p>`);

//##########################################################################

//Formatação de MOedas
document.write("<h3>Manipulando moedas: </h3>");
const futuroSalario = 40000.3;
document.write(`<p>${futuroSalario}</p>`);
//Mostrando casas decimais
document.write(`<p>${futuroSalario.toFixed(2)}</p>`);
//ocultando casas decimais
document.write(`<p>${futuroSalario.toFixed(0)}</p>`);
//trocando o identificador de casas decimais
document.write(`<p>${futuroSalario.toFixed(2).replace(".", ",")}</p>`);

//Formatando para real
document.write(
  `<p>${futuroSalario.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}</p>`,
);

//Formatando para dólar (USD)
document.write(
  `<p>${futuroSalario.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })}</p>`,
);

//#########################################################################
//Formatação de strings
document.write("<h3>Manipulando strings </h3>");
const nome = "Satio Daniel";

//ALTERNANDO STRINGS PARA LETRAS MAIÚSCULAS
document.write(`<p>${nome.toUpperCase()} </p>`);

//ALTERNANDO STRINGS PARA LETRAS MINUSCULA
document.write(`<p>${nome.toLowerCase()} </p>`);

//COLOCANDO AS INICIAIS EM LETRA MAIÚSCULA
const cidade = "sete barras";
const cidadeFormatada = cidade
  .split(" ")
  .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(" ");
//exibindo
  document.write(`<p> ${cidadeFormatada}</p>`)

  //cont6ando o número de caracteres
  document.write(`<p>Seu nome tem ${nome.replace(/\s/g, "").length} letras.</p>`)
//Exercicio 01
document.write("<p>Exercício 01</p>");

const data = new Date();
document.write(`<p>${data}</p>`);

const dia = data.getDate();
const mes = data.getMonth() + 1;
const ano = data.getFullYear();
document.write(`<p>${dia}/${mes}/${ano}</p>`);

//Exercício 02
document.write("<br><br><p>Exercício 02</p>");
const compraInternacional = 148.96;
document.write(`<p>
    ${compraInternacional.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    })}
</p>`);

//EXERCÍCIO 03
//A diferença do resultado com a cotação atual do dia 27/08/26 são por conta das casas decimais
document.write("<br><br><p>Exercício 03</p>");
const real = compraInternacional * 5.16;
document.write(
  `<p>${compraInternacional.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })} Dólares equivalem a ${real.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })} reais.</p>`,
);

document.write("<br><br><p>Exercício 04</p>");
data.setDate(data.getDate() + 12)
document.write(`<p>Se eu comprar algo hoje ${dia}/${mes}/${ano}, e ele for demorar <strong>12 dias</strong> para chegar, eu receberia dia ${data.getDate()}/${mes}/${ano}</p>`)

document.write("<br><br><p>Exercício 05</p>");

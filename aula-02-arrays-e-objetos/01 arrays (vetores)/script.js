//VETORES NO JAVASCRIPT
let produtos = ["Computador", "Notebook", "Celular", "Tablet"];

let aluno = "Satio";

document.write(
  `O tipo da variável que recebe um vetor no Javascript é: <strong>${typeof produtos}</strong>`,
);
document.write(
  `<br><br>O tipo da variável aluno é: <strong>${typeof aluno}</strong>`,
);

document.write("<br><br>Exibindo os itens de vetores pelo índice: <br>");

//document.write(`<p>${produtos}</p>);

document.write(`<p>${produtos[0]}</p>`);
document.write(`<p>${produtos[1]}</p>`);
document.write(`<p>${produtos[2]}</p>`);
document.write(`<p>${produtos[3]}</p>`);

document.write(
  `<br><br>Exibindo os itens dop vetor através do <strong>forEach</strong>`,
);
produtos.forEach((produto) => {
  // PARA CA DA PRODUTO DA LISTA DE "PRODUTOS", FAÇA TAL...
  document.write(`<p>${produto}</p>`);
});

document.write(
  "<br>Exibindo os itens do vetor e os indices com o forEach: </br>",
);
produtos.forEach((produto, indice) => {
  document.write(`<p>${indice + 1} - ${produto}</p>`);
});

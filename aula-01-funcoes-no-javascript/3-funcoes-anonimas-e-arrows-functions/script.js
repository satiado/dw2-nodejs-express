//FUNÇÃO ANÔNIMA
const mult = function (x) {
  return x * 2;
};
const x = 15;

document.write(`<p>O resultado da multiplicação é ${mult(5)}</p>`);

//FUNÇÃO SETA - COM UM ÚNICO PARÂMETRO - ARROW FUNCTION
const triplo = (y) => {
  return y * 3;
};
const y = 100;

document.write(`O triplo de ${y} é ${triplo(y)}`);

//FUNÇÃO SETA COM MAIS DE UM PARÂMETRO
const calculadora = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
//EVAL NO JAVASCRIPT É UMA FUNÇÃO NATIVA QUE REALIZA CÁLCULOS MATEMÁTICOS A PARTIR DE DOIS NÚMEROS E UM OPERADOR
const num1 = 9;
const operador = "*";
const num2 = 5;

document.write(
  `<p>O resultado de ${num1} ${operador} ${num2} é igual a ${calculadora(num1, operador, num2)}</p>`,
);

//FUNÇÃO IMEDIATA (IIFE - IMEDIATELY INVOKED FUNCTION EXPRESSION)
const imediata = (function () {
  document.write("<p>Estou sendo executada imediatamente</p>");
})(); //Passando os parâmetros

// FUNÇÃO IMEDIATA COM PARÂMETROS
const loadUser = (function (user) {
  document.write(
    `<p>Carregando as informações do usuário : <strong>${user}</strong>...</p>`,
  );

  //Mostrado as informações após 3 segundos
  setTimeout(() => {
    document.write(`
        Nome: Satio Daniel De Freitas<br>
        Idade: 18 Anos<br>
        Cidade: Jacupiranga<br>
        Hobby: Jogar
        `)
  }, 3000);
})("Satio"); // Passando o parâmetro

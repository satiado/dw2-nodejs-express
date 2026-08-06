//Funções com retorno
const n1 = 50;
const n2 = 3;

//ESSA FUNÇÃO GERA UM RESULTADO E EXPORTA
function multiplicar(n1, n2) {
  return n1 * n2; // ->operador de multiplicação
}

document.writeln(
  `A multiplicação de ${n1} com ${n2} éigual a <strong> ${multiplicar(n1, n2)}</strong>`,
);

//FUNÇÕES COM MAIS DE UM RETORNO
const number = 4;

function parImpar(number) {
  if (number % 2 == 0) {
    return `par`;
  } else {
    return "impar";
  }
}

document.writeln(`O número ${number} é <strong>${parImpar(number)}</strong>` )
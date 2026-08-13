//exercicio 1
document.write("<strong>Exercício 01</strong> <br>");
function perfil() {
  const a = `<p>Nome: Satio Daniel De Freitas <br> Idade: 18 anos<br> Cidade: Jacupiranga</p><br> <br>`;
  document.write(a);
}
perfil();

//Exercício 02
document.writeln(`<strong>Exercício 02</strong>`);
const n2a = 10;
const n2b = 2;
function exe2(n1, n2) {
  const r2 = n2a / n2b;
  document.write(
    `<p>O resultado da divisão de ${n2a} por ${n2b} foi ${r2}</p><br><br>`,
  );
}
exe2(n2a, n2b);

//Exercício 03
document.writeln(`<strong>Exercício 03</strong>`);
const n3a = 2;
const n3b = 4;
const n3c = 6;
r3 = n3a * n3b * n3c;
function exe3(n3a, n3b, n3c, r3) {
  document.write(
    `<p>A multiplicação de ${n3a}, ${n3b} e ${n3c} resulta em ${r3}</p><br><br>`,
  );
}
exe3(n3a, n3b, n3c, r3);

//Exercício 04
document.writeln(`<strong>Exercício 04</strong>`);
const n4a = 19;
function exe4(n4a) {
  if ((n4a) => 18) {
    return `você é maior de idade<br><br>`;
  } else {
    return `você é menor de idade<br><br>`;
  }
}
document.write(`<p>Você tem ${n4a} anos de idade, por isso ${exe4(exe4)}</p>`);

//Exercício 05
document.writeln(`<strong>Exercício 05</strong><br>`);
const n5a = 6;
const n5b = 7;
const r5a = n5a + n5b / 2;
const e5 = (n5a, n5b, r5a) => {
  if (r5a <= 5) {
    return `você está REPROVADO<br><br>`;
  } else {
    return `você está APROVADO<br><br>`;
  }
};
document.write(`<p>Suas notas foram ${n5a} e ${n5b}, por isso ${e5(r5a)}<p/>`);

//Exercício 06
document.writeln(`<strong>Exercício 06</strong>`);
const n6a = 10;
const e6 = (r6a) => {
  return n6a * 3;
};
document.write(`<p>O triplo do número ${n6a} é ${e6(n6a)}</p><br><br>`);

//Exercício 07
document.writeln(`<strong>Exercício 07</strong>`);
const n7a = 2;
const n7b = 4;
const n7c = 6;
const n7d = 8;
const r7a = n7a + n7b + n7c + n7d;
const e7 = (n7a, n7b, n7c, n7d) => {
  return r7a;
};
document.write(
  `<p>A soma dos números ${n7a}, ${n7b}, ${n7c}, ${n7d} resulta em ${e7(r7a)}</p><br><br>`,
);

document.writeln(`<strong>Exercício 08</strong>`);
const n8a = 'Satio'
const e8 = (function(n8a){
    document.write(`<p>Olá ${n8a}, parabéns por concluir os exercícios!</p>`)
})("Satio")
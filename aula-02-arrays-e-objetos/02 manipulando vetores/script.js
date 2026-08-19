//MÉTOD0S DE MANIPULAÇÃO DE VETORES

let frutas = ["Laranja", "Maça", "Banana"];

document.write(`<p>Os itens do nosso vetor são: ${frutas}</p>`);

frutas[3] = "Morango";

document.write(`<p>Agora a lista é: ${frutas}</p>`);

//MÉTODO PUSH: INSERE UM NOVO ELEMENTO NO FINAL DO VETOR
frutas.push("Abacaxi");

document.write(`<p>Agora a lista é: ${frutas}</p>`);

//MÉTODO UNSHIFT: INDERE UM NOVO ELEMENTO NO INÍCIO DO VETOR
//frutas[0] = 'Pera'
document.write(`<p>Agora a lista é: ${frutas}</p>`);

frutas.unshift("Pera");
document.write(`<p>Agora a lista é: ${frutas}</p><br>`);

//MÉTODO LENGTH: RETORNA O NÚMERO DE ELEMENTOS DO VETOR
document.write(`Na nossa lista temos ${frutas.length} frutas`);

//MÉTODO SORT: ORDENA OS ITENS DO VETOR
document.write(`<p>O primeiro item da lista é ${frutas[0]}</p>`);

let frutasOrdenadas = frutas.sort();
document.write(`<p>O primeiro item da lista é ${frutasOrdenadas[0]}</p>`);

document.write(`<p>A lista de frutas ordenadas é: ${frutasOrdenadas}</p><br><br>`);

//MÉTODO SORT: ORDENADO EM ORDEM CRESCENTE E DESCRESCENTE
let numeros = [6, 8, 2, 3, 800, 200];

document.write(`<p>Os números são: ${numeros}</p>`)

document.write(`<p>Os números são: ${numeros.sort()}</p>`)

//ORDENANDO CORRETAMENTE OS NÚMEROS
//ORDEM CRESCENTE
document.write(`<p>Os números ordenados de forma crescente são: ${numeros.sort((a,b)=>a - b)}</p>`)

//ORDEM DECRESCENTE
document.write(`<p>Os números ordenados de forma decrescente são: ${numeros.sort((a,b)=>a + b)}</p>`)

//exercicio 01
const estoqueProdutos = [
  {
    nome: "Placa mãe",
    marca: "Asus",
    preco: 800,
    descricao: "Placa de alta durabilidade e desempenho",
  },
  {
    nome: "Processador",
    marca: "AMD",
    preco: 400,
    descricao: "Ótimo custo benefício e desempenho",
  },
  {
    nome: "Memória Ram",
    marca: "Kingston",
    preco: 700,
    descricao: "Possui uma grande estabilidadee confiabilidade",
  },
];

document.write(`Os produtos que temos são: <br>`);

//exercicio 02
estoqueProdutos.forEach((listaProdutos) => {
  document.write(`<p>
        Nome: ${listaProdutos.nome}<br>
        Marca: ${listaProdutos.marca}<br>
        Preço R$: ${listaProdutos.preco}<br>
        Descrição: ${listaProdutos.descricao}
        </p>`);
});

estoqueProdutos.push({
  nome: "Gabinete",
  marca: "Mancer",
  preco: 1000,
  descricao: "Gabinetes gamer com design moderno",
});

//exercicio 03
document.write(`<br><br><br>Os produtos que temos são: <br>`);
estoqueProdutos.forEach((listaProdutos) => {
  document.write(`<p>
        Nome: ${listaProdutos.nome}<br>
        Marca: ${listaProdutos.marca}<br>
        Preço R$: ${listaProdutos.preco}<br>
        Descrição: ${listaProdutos.descricao}
        </p>`);
});

//exercicio 04
document.write(`<br><br><br>Os produtos que temos são: <br>`);
estoqueProdutos.unshift({
  nome: "Placa de vídeo",
  marca: "Gigabyte",
  preco: 1300,
  descricao: "Tem uma grande qualidade de construção, design e tecnologia",
});

estoqueProdutos.forEach((listaProdutos) => {
  document.write(`<p>
        Nome: ${listaProdutos.nome}<br>
        Marca: ${listaProdutos.marca}<br>
        Preço R$: ${listaProdutos.preco}<br>
        Descrição: ${listaProdutos.descricao}
        </p>`);
});

//exercicio 05
estoqueProdutos.sort((a,b)=>a.preco-b.preco) 
document.write(
  `<p><br><br><br>A ordem dos produtos conforme o preço é:<br> `);
  estoqueProdutos.forEach((listaProdutos) =>{ document.write(`<p>
    Nome: ${listaProdutos.nome}<br>
    Marca: ${listaProdutos.marca}<br>
    Preço: ${listaProdutos.preco.toFixed(2)}<br>
    Descrição: ${listaProdutos.descricao}</p>`)});

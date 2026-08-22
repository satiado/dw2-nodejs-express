//OBJETO
const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom esempenho",
};

document.write(`<p>${produto}</p>`);

//ACESSANDO OS ATRIBUTOS DO OBJETO
document.write(
  `<p> ${produto.nome}, ${produto.marca}, custa ${produto.preco} <br> ${produto.descricao}</p>`,
);

//ARRAY DE OBJETOS
document.write("<h3>Array de objetos:</h3>")
const listaProdutos = [
    {
        nome: "Computador",
        marca: "Lenovo",
        preco: 3000,
        descricao: "PC moderno com bom esempenho",
    },
    {
        nome: "Tablet",
        marca: "Sansung",
        preco: 2000,
        descricao: "Ótima velocidade de processamento",        
    },
    {
        nome: "Iphone",
        marca: "Apple",
        preco: 13000,
        descricao: "Ultra resistente, não quebra nuca!",
    }
]

//EXIBINDO AS INFORMAÇÕES DOS PRODUTOS COM FOREACH
document.write(`<h4>Produtos em promoção:</h4>`)

listaProdutos.forEach(produto => {
    document.writeln(`
    produto : ${produto.marca}<br>
    Marca: ${produto.marca}<br>
    Preço: ${produto.preco}<br>
    Descrição: ${produto.descricao}<br><br>
    `)
})
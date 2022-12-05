let listaFigures = [{ nome: "mulher de anime", valor: 700, imagem: "actions/animewoman.jpg" },
{ nome: "goku", valor: 666.66, imagem: "actions/dragonballpersonagem.jpg" },
{ nome: "baby yoda", valor: 800, imagem: "actions/starwarspersonagem.jpg" },
{ nome: "goku", valor: 666.66, imagem: "actions/dragonballpersonagem.jpg" },
{ nome: "baby yoda", valor: 800, imagem: "actions/starwarspersonagem.jpg" },
]

let listPainting = [
    { nome: "personagem", valor: 2000, imagem: "painting/personagem.jpg" },
    { nome: "game pad", valor: 2000, imagem: "painting/gamepad.jpg" },
    { nome: "personagem", valor: 2000, imagem: "painting/personagem.jpg" },
    { nome: "game pad", valor: 2000, imagem: "painting/gamepad.jpg" },
    { nome: "clock", valor: 2000, imagem: "painting/clock.jpg" },

];

function listarPaintingItens(listaPaintingItens) {
    let lista = document.getElementById("paintings")

    for (let i = 0; i < listaPaintingItens.length; i++) {
        let li = criarCard(listaPaintingItens[i])
        lista.appendChild(li)
    }
}


function listarFigures(listaFigures) {
    let lista = document.getElementById("actionFigures")

    for (let i = 0; i < listaFigures.length; i++) {
        let li = criarCard(listaFigures[i])
        lista.appendChild(li)
    }
}

function criarCard(produto) {

    let li = document.createElement("li")
    let figure = document.createElement("figure")
    let img = document.createElement("img")
    let spanNome = document.createElement("span")
    let spanValor = document.createElement("span")

    img.src = "./assets/img/" + produto.imagem
    img.alt = produto.nome
    img.classList = "img-card"
    spanNome.innerText = produto.nome
    spanValor.innerText = "R$" + produto.valor

    li.classList = "card-vitrine-section"
    spanNome.classList = "nomeProduto"
    spanValor.classList = "valorProduto"

    figure.appendChild(img)
    li.appendChild(figure)
    li.appendChild(spanNome)
    li.appendChild(spanValor)

    return li
}


listarFigures(listaFigures)
listarPaintingItens(listPainting)
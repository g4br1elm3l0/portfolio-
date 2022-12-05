const ul = document.querySelector("ul")
let indice = 0
let tamanhoCarrinho = 0
let valorCarrinho = 0


//Valor Total ---------------------------------------------------------------------------------
// const soma = (lista) => {
//     const precoTotal = document.querySelector(".precoTotal")
//     let resultado = lista.reduce((acc, valor) => parseFloat(acc) + parseFloat(valor.preco), 0)
//     precoTotal.innerText = `R$ ${resultado},00`
// }
//CARDS -------------------------------------------------------------------------------------------
const criarCard = (elemento) => {
    elemento.forEach(produto => {
        const li = document.createElement("li")
        const img = document.createElement("img")
        const nome = document.createElement("h3")
        const categoria = document.createElement("span")
        const valor = document.createElement("p")
        const btnCarrinho = document.createElement("button")

        img.src = produto.img
        img.alt = `foto de um ${produto.nome}`
        nome.innerText = produto.nome
        categoria.innerHTML = produto.secao
        valor.innerText = `R$ ${produto.preco}`
        btnCarrinho.innerText = "Comprar"
        btnCarrinho.id = produto.id
        li.id = produto.id

        img.classList.add("img-vitrine")
        li.classList.add("li-vitrine")
        btnCarrinho.classList.add("btnComprar")
        nome.classList.add("span-nome")
        categoria.classList.add("span-categoria")
        valor.classList.add("span-valor")


        li.append(img, nome, categoria, valor, btnCarrinho)
        ul.append(li)

    })

    // soma(elemento)
}
criarCard(produtos)



function gerarCards(produtos) {
    criarCard(produtos)
    // soma(produtos)
    botaoComprar()
}

// BOTOES ---------------------------------------------------------------------------------------------

const botaoTodos = document.querySelector(".todos")
const botaoHortifruti = document.querySelector(".hortifruti")
const botaoPanificadora = document.querySelector(".panificadora")
const botaoLaticinio = document.querySelector(".laticinios")

const secaoHortifruti = produtos.filter(produto => produto.secao == "Hortifruti")
const secaoPanificadora = produtos.filter(produto => produto.secao == "Panificadora")
const secaoLaticinio = produtos.filter(produto => produto.secao == "Laticinio")

botaoTodos.addEventListener("click", () => {
    ul.innerHTML = ""
    gerarCards(produtos)
})

botaoHortifruti.addEventListener("click", () => {
    ul.innerHTML = ""
    gerarCards(secaoHortifruti)
})

botaoPanificadora.addEventListener("click", () => {
    ul.innerHTML = ""
    gerarCards(secaoPanificadora)
})

botaoLaticinio.addEventListener("click", () => {
    ul.innerHTML = ""
    gerarCards(secaoLaticinio)
})


// PESQUISA -------------------------------------------------------------------------------------------------------

const inputBuscar = document.querySelector(".campoBuscaPorNome")
const btnBusca = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")



btnBusca.addEventListener("click", () => {
    ul.innerHTML = ""
    let pesquisadoUsuario = inputBuscar.value
    if (pesquisadoUsuario == "") {
        criarCard(produtos)
    } else {
        let resultadoBusca = produtos.filter(produto => produto.nome.toLowerCase() == pesquisadoUsuario)
        let resultadoBuscaSecao = produtos.filter(produto => produto.secao.toLowerCase() == pesquisadoUsuario)
        gerarCards(resultadoBusca)
        gerarCards(resultadoBuscaSecao)
    }


})

//Carrinho ---------------------------------------------------------------------------------------------------------
function botaoComprar() {
    const botoesCompras = document.querySelectorAll(".btnComprar")

    botoesCompras.forEach((item) => {
        item.addEventListener("click", addCarrinho)
    })
}
botaoComprar()

function addCarrinho(e) {

    const produto = e.target.parentNode
    const li = document.createElement("li")
    const img = document.createElement("img")
    const div = document.createElement("div")
    const spanNome = document.createElement("span")
    const spanCartCategoria = document.createElement("span")
    const spanPreco = document.createElement("span")
    const btnRmv = document.createElement("button")
    const ul = document.querySelector(".carrinho--produtos")



    img.src = produto.querySelector("img").src
    img.alt = produto.querySelector("img").alt
    spanNome.innerText = produto.querySelector(".span-nome").innerText
    spanCartCategoria.innerText = produto.querySelector(".span-categoria").innerText
    spanPreco.innerText = produto.querySelector(".span-valor").innerText
    btnRmv.innerText = "remover"
    indice += 1
    li.id = `carrinho-item-${indice}`
    li.classList.add("li--carrinho")

    valorCarrinho += parseFloat(spanPreco.innerText.slice(3))
    tamanhoCarrinho += 1

    let spanVlrTtl = document.querySelector(".vlrTtl")
    let spantQnt = document.querySelector(".quantidade")

    spantQnt.innerText = tamanhoCarrinho
    spanVlrTtl.innerText = `R$ ${valorCarrinho},00`




    div.append(spanNome, spanCartCategoria, spanPreco)
    li.append(img, div, btnRmv)
    ul.append(li)

    btnRmv.addEventListener("click", (e) => {
        let eventPath = e.composedPath();
        let li = eventPath[1]
        const ul = document.querySelector(".carrinho--produtos")
        ul.removeChild(li)

        valorCarrinho -= parseFloat(spanPreco.innerText.slice(3))
        tamanhoCarrinho -= 1

        let spanVlrTtl = document.querySelector(".vlrTtl")
        let spantQnt = document.querySelector(".quantidade")

        spantQnt.innerText = tamanhoCarrinho
        spanVlrTtl.innerText = `R$ ${valorCarrinho},00`

    })
}
addCarrinho()









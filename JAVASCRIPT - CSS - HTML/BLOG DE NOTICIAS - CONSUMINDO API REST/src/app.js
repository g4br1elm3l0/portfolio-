const ul = document.querySelector(".ul--article")
const principal = document.querySelector(".section--principal")
function renderizarPrincipal() {
    fetch("https://kenzie-news-api.herokuapp.com/api/news")
        .then(res => res.json())
        .then(hydratedBody => {
            let elemento = hydratedBody[0]
            const figure = document.createElement("figure")
            const img = document.createElement("img")
            const a = document.createElement("a")
            const div = document.createElement("div")
            const span = document.createElement("span")

            img.src = elemento.imagem
            img.alt = elemento.titulo
            a.innerText = elemento.titulo
            a.href = elemento.noticia_completa
            a.target = "blank"
            span.innerText = elemento.categoria

            img.classList.add("img--principal")
            div.classList.add("div--principal")
            a.classList.add("ancora--principal")
            span.classList.add("categoria")

            div.append(span, a)
            figure.append(img)
            principal.append(figure, div)

            {/* <img class="img--principal" src="./Imagens/image 3.svg" alt="imagem Silmara Souza Kenzie">
</figure>

<div class="div--principal">
<span class="categoria">negocios</span>
<h2>Silmara Souza é a nova CMO da Kenzie Academy Brasil</h2>
</div> */}



        })

}

renderizarPrincipal()

function renderizar() {
    fetch("https://kenzie-news-api.herokuapp.com/api/news")
        .then(res => {
            return res.json()
        })
        .then(hydratedBody => {
            let array = hydratedBody
            array.forEach(element => {
                const id = element.id
                const li = document.createElement("li")
                const article = document.createElement("article")
                const figure = document.createElement("figure")
                const img = document.createElement("img")
                const div = document.createElement("div")
                const span = document.createElement("span")
                const ancora = document.createElement("a")
                const cite = document.createElement("cite")
                const titulo = document.createElement("h4")

                li.classList.add("li--article")
                article.classList.add("articles")
                div.classList.add("div--article")
                span.classList.add("categoria")
                ancora.classList.add("link--article")
                cite.classList.add("cite--article")
                img.classList.add("img--article")


                img.src = element.imagem
                img.alt = element.titulo

                span.innerText = element.categoria
                ancora.href = element.noticia_completa
                ancora.target = "blank"
                ancora.innerText = element.resumo
                cite.innerText = `Fonte: ${element.fonte}`
                titulo.innerText = element.titulo

                figure.append(img)
                div.append(span, titulo, ancora, cite)
                article.append(figure, div)
                li.append(article)
                ul.append(li)
            });
        })
}

renderizar()


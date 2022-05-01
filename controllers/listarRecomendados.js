const livros = require("../database")

const recomendarLivros = () => {

    const recomendados = livros.filter(livro => livro.recomenda == true)
    console.log(recomendados)

}

module.exports = recomendarLivros
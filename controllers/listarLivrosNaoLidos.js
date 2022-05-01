const livros = require("../database")

const listaNaoLidos = () => {

    const naoLidos = livros.filter(livro => livro.leu == false)
    console.log(naoLidos)

}

module.exports = listaNaoLidos
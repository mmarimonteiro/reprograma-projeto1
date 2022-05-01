const livros = require("../database")

const ordenarLivros = () => {

    const paginas = livros.sort((a,b) => a.paginas - b.paginas)
    console.log(paginas)

}

module.exports = ordenarLivros
//require acessar um arquivo ou um biblioteca ./ arquivo principal
//biblioteca conjunto de funcionalidades ou conjunto de códigos prontos para serem utilizados
// readline-sync //lib (biblioteca) pra pegar imput no terminal

const livros = require("./database") 

const read = require("readline-sync")
const resposta = read.question(`
================== Menu ==================

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de páginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros nao lidos 

5 - SAIR

Digite um número de [1-5]: 
`)
//1-pegar input
//2-se for sim, mostra as categorias disponiveis, e pergunta qual categoria
//3-se não, mostra todos os livros em orden crescente pela quantidade de pagina


const livros = require('./database')

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')


if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponiveis:')
    console.log('Produtividade', '/Historia', '/Tecnologia', '/Jornalismo')

    const entradaCategoria = readline.question('Qual categoria voce escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Essas são todos os livros disponiveis:')
    console.table(livrosOrdenados)
}




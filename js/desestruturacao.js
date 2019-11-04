//desestruração

const usuario = {
    nome:'victor',
    idade:23,
    endereco: {
        cidade: 'Nova iquacu',
        estado: 'RJ'
    }
}

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;
//console.log(nome, idade, cidade)

const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome, idade, cidade)
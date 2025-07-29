/*Toda variável é um objeto.
    => agrega valores
    => coleção dinamica de chave e valor
*/
const pessoa = {
    nome: 'Alanes G Gomes',
    idade: 27,
    curso: 'ADS',
    estadoCivil: 'Solteira',

    /**criando função */
    descrever: function (){
        console.log(`Meu nome é: ${this.nome} e minha idade é: ${this.idade}` );
    }
};

/**para chamar o nome ALANES da função pessoa */
pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`);
}


/**substituindo nome e idade 
pessoa.nome = 'Arthur';
pessoa.idade = 50;
*/
/**chamando a função descrever */
pessoa.descrever();
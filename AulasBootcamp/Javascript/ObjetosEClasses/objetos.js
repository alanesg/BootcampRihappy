/**Funções recebendo objetos */
class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    /** constructor é o que acontece quando a pessoa é instanciada
     * utilizado em casos obrigatórios, por exemplo.
     */
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    descrever(){
        console.log(`Meu nome é: ${this.nome} e minha idade é: ${this.idade}` )
    }
}


/**função para comparar pessoas */
function compararPessoas(pessoa1, pessoa2){
    if(pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}.`);
    }else{
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade`);
    }
}
const alanes = new Pessoa('Alanes', 27); /**primeira pessoa que vai comparar com a segunda */
const alysson = new Pessoa('Alysson', 24);

compararPessoas(alanes, alysson); /**chamando a funcao */
/**Criando instâncias com constructor */

/**criando classes e instâncias */

/*o objetivo da classe é definir instancias.
 => classe é definição e instância é ocorrência
*/
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

const alanes = new Pessoa('Alanes', 27);
const agnes = new Pessoa('Agnes', 2);

console.log(alanes);

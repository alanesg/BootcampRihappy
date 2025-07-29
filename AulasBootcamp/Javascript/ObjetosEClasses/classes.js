/**criando classes e instâncias */

/*o objetivo da classe é definir instancias.
 => classe é definição e instância é ocorrência
*/
class Pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é: ${this.nome} e minha idade é: ${this.idade}` )
    }
}

const alanes = new Pessoa();
alanes.nome = 'Alanes gomes silva';
alanes.idade = 27;

const maximus = new Pessoa();
maximus.nome = 'Maximus gomes silva';
maximus.idade = 10;

const agnes = new Pessoa();
agnes.nome = 'Agnes Gomes Silva';
agnes.idade = 1;

alanes.descrever();
maximus.descrever();
agnes.descrever();

/**crie uma classe para representar pessoa.
 * para cada pessoa teremos os atributos nome, peso e 
 * altura. as pessoas devem ter a capacidade de dizer o
 * valor do seu imc (imc = peso/(altura * altura));
 * instancie uma pessoa chamada josé que tenha 
 * 70kg de peso e 1,75 de altura e peça para ele dizer
 * o valor do seu IMC.
 */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso/(this.altura * this.altura);
    }
    classificarImc(){
      const imc =  this.calcularImc();
      if(imc < 18.5){
        return("Você está abaixo do peso");
    } else if (imc > 18.5 && imc < 25){
        return ("Você está no seu peso normal");
    } else if (imc >= 25 && imc < 30){
        return("Você está acima do peso");
    } else if (imc > 30 && imc < 40){
        return("Você está Obeso(a).");
    }else if (imc > 40){
        return("Obesidade grave");
    }else {
        return("ERROR");
        }
    }
};

const jose = new Pessoa('José', 100, 1.95);
console.log(jose.classificarImc());
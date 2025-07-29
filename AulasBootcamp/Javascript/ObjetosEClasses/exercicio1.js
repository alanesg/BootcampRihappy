/*
crie uma classe para representar carros 
os carros possuem uma Marca, uma cor e um gasto médio de
combustivel por km. crie um metodo que dado a quantidade de quilometro e o preço
do combustivel nos dê o valor gasto em reais para realizar este percurso.

metodo é uma ação dentro do objeto
*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;
    

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
  
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}  
const fiat = new Carro('Fiat', 'Vermelho', 1/13);
console.log(fiat.calcularGastoDePercurso(45,5));

const palio = new Carro('fiat', 'Branco', 1/18);
console.log(palio.calcularGastoDePercurso(85,15));
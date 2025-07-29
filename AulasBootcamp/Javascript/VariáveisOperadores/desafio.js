/**Criar um código para calcular o valor de uma viagem.
 * 
 * Você terá 3 variáveis, sendo elas:
 * preço do combustivel;
 * gasto médio de combustivel do carro por km;
 * Distância em KM da viagem;
 * 
 * IMPRIMA NO CONSOLE O VALOR QUE SERÁ GASTO  PARA
 * REALIZAR ESTA VIAGEM.
 */

let precoCombustivel =  6.30;
let LitroPorKm = 2; /** 5L por km */
let distanciaViagemKm = 10;

let litrosConsumidos = distanciaViagemKm / LitroPorKm;
let valorGasto = litrosConsumidos * precoCombustivel;

console.log("O valor gasto nessa viagem é: " , valorGasto.toFixed(2));
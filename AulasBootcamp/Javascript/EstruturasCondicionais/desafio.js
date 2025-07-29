/**Criar um código para calcular o valor de uma viagem.
 * 
 * Você terá 5 variáveis, sendo elas:
 * 1 -preço do etanol;
 * 2- preço da gasolina;
 * 3- o tipo de combustível que está no seu carro;
 * 4- gasto médio de combustivel do carro por km;
 * 5- Distância em KM da viagem;
 * 
 * IMPRIMA NO CONSOLE O VALOR QUE SERÁ GASTO  PARA
 * REALIZAR ESTA VIAGEM.
 */
const valorEtanol = 5.79;
const valorGasolina = 6.30;
const LitrosPorKm = 2;
const distanciaEmKM = 10;
const tipoCombustivel = "Etanol";

if (tipoCombustivel === "Gasolina") {
    let litrosConsumidos = distanciaEmKM / LitrosPorKm;
    let valorGasto = litrosConsumidos * valorGasolina;
    console.log("VocÊ utilizou gasolina. O valor dessa viagem é: R$", valorGasto.toFixed(2));
}else {
    let litrosConsumidos = distanciaEmKM / LitrosPorKm;
    let valorGasto = litrosConsumidos * valorEtanol;
    console.log("Você utilizou Etanol. O valor dessa viagem é: R$", valorGasto.toFixed(2));
}

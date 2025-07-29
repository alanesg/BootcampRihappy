/*
O IMC - Indice de massa corporal é um critério da organização mundial
da saúde para dar uma indicação sobre a condição de peso de uma
pessoa adulta.

FORMULA IMC:
IMC = PESO /(ALTURA *ALTURA)

Elabore um algoritmo que dado o peso e a altura de um adulto
mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
- ABAIXO DE 18.5 = ABAIXO DO PESO;
- ENTRE 18.5 e 25 = PESO NORMAL;
- ENTRE 25 e 30 = ACIMA DO PESO;
- ENTRE 30 e 40 = OBESO;
- ACIMA DE 40 = Obesidade Grave;
*/

let peso = 85.0;
let altura = 1.69;

const imc = peso / (altura * altura);
console.log("Seu IMC é de: ",imc.toFixed(2));

if(imc < 18.5){
    console.log("Você está abaixo do peso");
} else if (imc > 18.5 && imc < 25){
    console.log("Você está no seu peso normal");
} else if (imc >= 25 && imc < 30){
    console.log("Você está acima do peso");
} else if (imc > 30 && imc < 40){
    console.log("Você está Obeso(a).");
}else if (imc > 40){
    console.log("Obesidade grave");
}else {
    console.log("ERROR");
}
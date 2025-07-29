/*
Elabore um algoritmo que calcule o que deve ser pago por um produto,
considerando o preço normal de etiqueta e a escolha da 
condição de pagamento.
Utilize os códigos da tabela aseguir para ler qual a condição
de pagamento escolhida e efetuar o cálculo adequado.

codigo condição de pagamento:
1-   À vista Débito, recebe 10% de desconto;
2-   À vista no dinheiro ou pix, recebe 15% de desconto;
3-  em duas vezes, preço normal de etiqueta sem juros;
4-  acima de duas vezes, preço normal de etiqueta mais juros de 
10%
*/

const precoEtiqueta = 50.00;
const formaDePagamento = 3;

if(formaDePagamento === 1){
    console.log("o valor tem 10% de desconto, fica: R$", precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2){
    console.log("o valor tem 15% de desconto, fica: R$", precoEtiqueta - (precoEtiqueta * 0.15));
}else if (formaDePagamento === 3) {
    console.log("Dividir em duas vezes é  sem juros e fica: R$", precoEtiqueta/2 , "Por mês");
}else {
    console.log("acima de 2 parcelas tem acréscimo de 10%, fica: R$", precoEtiqueta + (precoEtiqueta * 0.1));
}
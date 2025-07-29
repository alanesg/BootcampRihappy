/*Funções são pequenos trechos de código que nós podemos
chamar a qualquer momento. 

 *se a função NÃO TIVER RETURN, é chamada de procedimento em outras linguagens.
  ela imprime uma resposta simples. no javascript é uma função simples

 *Se a função tiver RETURN, retorna um valor.

 */
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
   return valor + valorDeAcrescimo;
}

/*chamando a função incrementarJuros com o valor de 100 e os 10% */
console.log(incrementarJuros(100 , 10));
console.log(incrementarJuros(100 , 25));
console.log(incrementarJuros(100 , 30));
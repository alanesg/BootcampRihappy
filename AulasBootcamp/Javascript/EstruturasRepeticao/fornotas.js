

const notas = [];

notas.push(7); /** 0 */
notas.push(5); /** 1 */
notas.push(4); /** 2 */
notas.push(9); /**3 */
notas.push(8); /** 4 */
notas.push(3);/**5 */

let soma = 0; /**variavel que começa com zero */

for (let i = 0; i < notas.length; i++) { /**for loop */
    const nota = notas[i];
    soma = soma + nota;
    
}
const media = soma / notas.length; /**soma dos numeros divididoplea quantidade de notas */
console.log(media);/** chamandoa média */
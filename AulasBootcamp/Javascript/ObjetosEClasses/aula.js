/*Toda variável é um objeto.
    => agrega valores
    => coleção dinamica de chave e valor
*/
const alanes = {
    nome: 'Alanes G Gomes',
    idade: 27,
    curso: 'ADS',
    estadoCivil: 'Solteira'
};
/* pode ser chamado desse jeito
console.log(alanes.nome);
console.log(alanes.idade);
console.log(alanes.curso);
console.log(alanes.estadoCivil);
*/

/** ou pode ser chamada assim: */
alanes.altura =1.69;

delete alanes.nome;
console.log(alanes)
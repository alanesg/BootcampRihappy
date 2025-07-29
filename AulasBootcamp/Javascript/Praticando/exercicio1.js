/*
Faça um algoritmo que dado as 3 notas por um aluno em um semestre da 
faculdade calcule e imprima sua média e a sua clssificação conforme a tabela
abaixo:

media = (nota 1 + nota 2 + nota 3) / 3;

classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
-Média acima de 7, passou de semestre;
*/

let nome = "Maximus";
console.log("Nome do aluno(a): ", nome);

let nota1 = 5.0;
let nota2 = 10.0;
let nota3 = 9.7;

const mediaNotas = (nota1 + nota2 + nota3) / 3;
    console.log("Sua média é: ", mediaNotas.toFixed(2));

if(mediaNotas < 5) {
    console.log("Reprovado(a)!");
} else if (mediaNotas > 5 && mediaNotas < 7){
    console.log("Recuperação!");
}else {
    console.log("Passou de Semestre!");
}




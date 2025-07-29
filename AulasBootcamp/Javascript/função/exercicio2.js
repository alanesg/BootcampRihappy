/**fazer uma função que veja se você é maior de idade */

/** uma função para escrever seu nome. */

function nomear (name){
    console.log('Meu nome é: ' + name);
}
nomear('Alanes Gomes Silva');
nomear('Agnes Gomes');

function verificarIdade(idade){
    if(idade >= 18){
        console.log('Você é adulto(a), maior de idade');
    }else if(idade > 10 && idade < 18){
        console.log('Você é um adolescente');
    }else if(idade > 4 && idade < 10){
        console.log('Você é uma criança');
    }else {
        console.log('Você é um bebê.')
    }
}
verificarIdade(27);
verificarIdade(1);

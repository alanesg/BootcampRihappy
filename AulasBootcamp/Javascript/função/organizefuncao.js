/**função para calcular o imc*/
function calcularImc(peso, altura){
  return peso / Math.pow(altura, 2);
}

/** função para condição do imc */
function classificarImc(imc){
    if(imc < 18.5){
        return("Você está abaixo do peso");
    } else if (imc > 18.5 && imc < 25){
        return("Você está no seu peso normal");
    } else if (imc >= 25 && imc < 30){
        return("Você está acima do peso");
    } else if (imc > 30 && imc < 40){
        return("Você está Obeso(a).");
    }else if (imc > 40){
        return("Obesidade grave");
    }else {
        return("ERROR");
}
}

/*código main principal*/
(function (){
    let peso = 44.0;
    let altura = 1.69;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})(); /**chamando a função principal */




 function aplicarDesconto(valor, desconto){
    return(valor - (valor * desconto /100))
 }

 function aplicarJuros(valor, juros){
    return(valor + (valor * (juros/100)));
 }
    const precoEtiqueta = 50.00;
    const formaDePagamento = 3;


    function verificarPagamento(formaDePagamento){
if  (formaDePagamento === 1){
    console.log(aplicarDesconto (precoEtiqueta, 10));
}   else if (formaDePagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15));
}   else if (formaDePagamento === 3) {
    console.log( precoEtiqueta);
}   else {
    console.log(aplicarJuros(precoEtiqueta , 10));
}
}
verificarPagamento(2);

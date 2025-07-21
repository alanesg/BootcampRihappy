/**criando interação do Jogo */
/**utilizei a tecla windows + a tecla ponto para ter os emojis */

const emojis = [ /**todos os emojis estarão aqui  */
"😊",
"😊",
"😍",
"😍",
"🐾",
"🐾",
"🐠",
"🐠",
"😡",
"😡",
"🐹",
"🐹",
"😎",
"😎",
"🎈",
"🎈"
]; 
let openCards = []; /*guarda todos os elementos que for abrindo*/

let mixEmojis = emojis.sort(()=> /**criar ordenação de acordo com a funçao */
    (Math.random() > 0.5 ? 2 : -1));

for(let i = 0; i < emojis.length; i++){ /* loop até a quantid de emojis adicionadas */
    let box = document.createElement ("div"); /**criando uma caixa dinamica */
    box.className = "item"; /**adicionando a classe a caxa dinamica */
    box.innerHTML = mixEmojis[i]; /**o elemente dentro do html vai ter a posição i, ou seja, ordem aleatoria */
    box.onclick = handleClick; /**clicar o card */
    document.querySelector(".game").appendChild(box); /**pendurando a caixa na class game */
}

/**FUNÇÃO HANDCLICK para clicar na carta e console para guardar */

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

/**if de verificação */
 if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
 }
 console.log(openCards);
}

/**Combinação do jogo */
function checkMatch() {

    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add ("boxMatch");
        openCards[1].classList.add ("boxMatch");
    }else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você venceu!");
    }
}
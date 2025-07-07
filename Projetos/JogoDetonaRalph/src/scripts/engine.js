/*muito falado engine no mundo do jogos*/
const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },
    values: { /*os values guardam valores e coisas por debaixo dos panos*/
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60,
        lifeTime: 60,
        quantLives: 3,
    },
    actions: {
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    }
};

/*função que será sempre chamada para decrementar*/
function countDown(){
    state.values.curretTime--; /*Tempo internamente*/
    state.view.timeLeft.textContent = state.values.curretTime; /*tempo visual*/
    /*se não tiver a pontuação minima de 25 pontos, perde uma vida*/
    state.values.lifeTime--;
     if(state.values.lifeTime <= 0 && state.values.result < 25) {
        state.values.quantLives--;
        document.querySelector(".menu-lives h2").textContent = "x" +
        state.values.quantLives;
        alert("Você perdeu uma vida! O seu resultado foi: " + state.values.result);
        state.values.lifeTime = 60;
    } 
    /*se tiver pontuação igual ou maior que 25 o usuário ganha!*/
    if(state.values.lifeTime <= 0 && state.values.result >= 25){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        state.values.quantLives = state.values.quantLives;
        alert("Você Venceu!")
    }
    /*Só vai aparecer o GAME OVER quando todas as vidas acabarem */
    if(state.values.quantLives <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert("Game Over! O seu resultado foi: " + state.values.result);
    } 

}

/*audio*/
function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.2 ; /*volume a cada clique*/
    audio.play();
}

/*randomsquare, definir um quadrado aleatorio*/ 
function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    /*sortear uma caixinha e sortear um numero aleatório de 1 a 9*/
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}


/*listner é um conceito universal do javascript
adicionar algo ou alguém que fica ouvindo alguma ação pra ser 
executada*/
function addListnerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){  /*hitposition quadrado sorteado */
                state.values.result++
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit");
            }
        });
    });
}

function init() {
    addListnerHitBox(); /*vai mover o inimigo e escutar os clicks*/ 
}

init();
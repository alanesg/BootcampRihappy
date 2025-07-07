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
    if(state.values.curretTime <= 0){
    if(state.values.result < 25){ /**se o resultado for menor que 25, perde uma vida*/
      state.values.quantLives--;
      document.querySelector(".menu-lives h2").textContent = "x" + state.values.quantLives;
      alert("Você perdeu uma vida! O seu resultado foi: " + state.values.result);
    } else {
      alert("Você atingiu a pontuação! O seu resultado foi: " + state.values.result);
    }
    state.values.curretTime = 60; /**reinicia o tempo atual */
    state.values.result = 0; /**reinicia o resultado */
    state.view.timeLeft.textContent = state.values.curretTime; /**atualiza o tempo na tela*/
    state.view.score.textContent = state.values.result; /**atualiza o score/ resultado  na tela*/
    
    if(state.values.quantLives <= 0){ /**se a quantida de vida for menor ou igual a zero é game over*/
      clearInterval(state.actions.countDownTimerId);
      clearInterval(state.actions.timerId);
      alert("Game Over!");
    }
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
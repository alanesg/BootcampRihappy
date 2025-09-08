/*pegar todas as Keys do piano*/ 
const pianoKeys = document.querySelectorAll(".piano-keys .key");

/*constante para ajuste de volume */
const volumeSlider = document.querySelector(".volume-slider input");

/* */
const keysCheck = document.querySelector(".keys-check input");


/*pegar teclas mapeadas (as teclas só tocam se tiver dentro desse vetor)*/
let mapedKeys = [];

/**pegar audio */
let audio = new Audio("src/tunes/a.wav");

/**toca cada teclado com som diferente wav de acordo com a chave */
const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();


    /**sombra no piano ao digitar  */
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150); /**tempo */
};


/** cada tecla vai executar algo */
pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", () => 
    playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);

});

/** toca de acordo com a digitação da letra */
document.addEventListener("keydown", (e) => {
    if(mapedKeys.includes(e.key)){
    playTune(e.key);
    }
    
});

/*controle de volume */
const handleVolume = (e) => {
    audio.volume = e.target.value; 
};

/**efeito de liga e desliga */
const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
};

/**controle de volume */
volumeSlider.addEventListener("input", handleVolume);


/**efeito de liga e desliga */
keysCheck.addEventListener("click", showHideKeys);
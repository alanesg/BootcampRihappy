/**arrow function - a seta indica que há uma função */
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 16 
//definindo limites na quantidade de pokemons quando clicar no botao load more
const limit = 5
let offset = 0;


//função para carregar os pokemons ao clicar do botão
function loadPokemonItens(offset, limit) {
    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name"> ${pokemon.name}</span>
            
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type} </li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        `).join('')

        pokemonList.innerHTML += newHtml   
    })
}

loadPokemonItens(offset, limit)

// quando clicar no botão load more
loadMoreButton.addEventListener('click', () => {
    offset += limit

    // calcular a quantidade de record(proxima página)

    const qtdRecordNexPage = offset + limit

    if(qtdRecordNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})


    
        
    

   
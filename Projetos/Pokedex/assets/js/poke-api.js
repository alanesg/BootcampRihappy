
//pokeApi é um objeto. getPokemons é um método.
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon ()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
   
   const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
   const [type] = types
    
   pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
                    
    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
        
}
//a seta indica que há uma função (Arrow function) e tem 2 parametros
pokeApi.getPokemons = (offset = 0, limit = 5) => { // ir no servidor
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` // pegar a lista do servidor
        
    return fetch(url)
        .then((response) => response.json()) /**convertendo o body pra Json */
        .then((jsonBody) => jsonBody.results)  /** o results é a lista de pokemon */   
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // depois transformar a lista em busca do detalhe
        .then((detailRequest) => Promise.all(detailRequest))// depois transformar a lista de pokemons em uma lista de promessas
        .then((pokemonsDetails) => pokemonsDetails ) // lista do detalhe dos pokemons pronta
       
}


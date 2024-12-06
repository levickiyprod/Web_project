const pokemon = document.querySelector(".pokemon img");

const pokemonSprites = [
    "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif",
    "https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif",
    "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif"
];

let currentPokemon = 0;
setInterval(() => {
    currentPokemon = (currentPokemon + 1) % pokemonSprites.length;
    pokemon.src = pokemonSprites[currentPokemon];
}, 5000);

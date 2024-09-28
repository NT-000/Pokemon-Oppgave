
// let possiblePokemon = ['pikachu','bulbasaur','mew','magikarp']
let randomPokemon = '';
let app = document.getElementById('app');



trainer = {
playerName: "Roy",
playerImage: 'IMG/pokemonTrainerIdle.png',
playerImageThrow: 'IMG/pokemonTrainerThrow.png',
playerPokemon: [],
}


let pokemon = [
    {
        name: 'Pikachu',
        health: 50,
        level: 25,
        image: 'IMG/pikachu.png',
    },

    {
        name: 'Bulbasaur',
        health: 20,
        level: 10,
        image: 'IMG/bulbasaur.png',
    },
    {
        name: 'Mew',
        health: 100,
        level: 100,
        image: 'IMG/mew.png',
    },
    {
        name: 'Magikarp',
        health: 5,
        level: 1,
        image: 'IMG/magikarp.png',
    }
    
]


updateView();
function updateView(){
    getRandomPokemon()
app.innerHTML =/*HTML*/`
<div class="gridbox">
    <div class="wildPokemon">
        <div>Name: ${randomPokemon.name}</div>
        <div>Health:${randomPokemon.health}</div>
        <div>Level: ${randomPokemon.level}</div>
        <img src="${randomPokemon.image}">
    </div>
    
    <div class="playerBox">
        <div>${trainer.playerName}</div>
        <img src="${trainer.playerImage}">
    </div>
    
        <div class="buttons">
        <button onclick="catchPokemon()">Catch'em</button>
        <button onclick="updateView()">Escape</button>
        <button onclick="showPokemon()">Open Pokebag</button>
        </div>
    </div>
    </div>
    `
}

function caughtPokemonView(){
    app.innerHTML = /*HTML*/ `

    <div class="gridbox">
    <div class="wildPokemon">
        <img src="IMG/pokeball.png">
        <h1>You caught ${randomPokemon.name}<h1>
    </div>
    
    <div class="playerBox">
        <div>${trainer.playerName}</div>
        <img src="${trainer.playerImageThrow}">
    </div>
    
        <div class="buttons">
        <button onclick="updateView()">Escape</button>
        <div class="pokeBag">${trainer.playerPokemon}</div>
        <button onclick="showPokemon()">Open Pokebag</button>
        
        
    </div>
    </div>
`;
}

function catchPokemon(){
trainer.playerPokemon.push(randomPokemon);
caughtPokemonView();

}

// function showPokemon(){
// }

function getRandomPokemon(){
    let randomNumber = Math.floor(Math.random()* pokemon.length);
    randomPokemon = pokemon[randomNumber];
    

}
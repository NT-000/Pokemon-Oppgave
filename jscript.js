let randomPokemon = '';
let app = document.getElementById('app');
isOpen = false;
let randomNumber = '';


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
        image: 'IMG/pikachu2.jpeg',
    },

    {
        name: 'Bulbasaur',
        health: 20,
        level: 10,
        image: 'IMG/bulbasaur2.jpg',
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
        image: 'IMG/magikarp2.png',
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
        <h1>You caught ${randomPokemon.name}</h1>
    </div>
    
    <div class="playerBox">
        <div>${trainer.playerName}</div>
        <img src="${trainer.playerImageThrow}">
    </div>
    
        <div class="buttons">
        <button onclick="updateView()">Back to the wild</button>

        <button onclick="showPokemon()">Open Pokebag</button>
        
        
    </div>
    </div>
`;
}

function catchPokemon(){
trainer.playerPokemon.push(randomPokemon);
pokemon.splice(randomNumber,1);
// for(let i=0;i>pokemon.length;i++){
// }

caughtPokemonView();
}

 function showPokemon(){
    if(isOpen) {
        updateView();
    }

    else{
    let html='';
    for (let i = 0; i < trainer.playerPokemon.length; i++) {
    html += `
    <div class="pokeBag">
    <ul>
    <img src="${trainer.playerPokemon[i].image}">
    <br>
    <div>Name: ${trainer.playerPokemon[i].name}</div>
    <br>
    <div>Health: ${trainer.playerPokemon[i].health}</div>
    <br>
    <div>Level: ${trainer.playerPokemon[i].level}</div>
    </ul>
    <button onclick="deleteBtn(${i})">X</button>
    </div>`
    console.log('vis pokemon');
    }
    app.innerHTML = /*HTML*/`
        <div class="gridbox">
            ${html}
            <div class="buttons">
                <button onclick="updateView()">Back to Wild</button>
            </div>
        </div>
        `;}
        isOpen = !isOpen;
    }
function deleteBtn(i){
pokemon.push(trainer.playerPokemon[i]);
trainer.playerPokemon.splice(i,1)

showPokemon();
}

function getRandomPokemon(){
    randomNumber = Math.floor(Math.random()* pokemon.length);
    randomPokemon = pokemon[randomNumber];
    console.log(randomNumber);
}
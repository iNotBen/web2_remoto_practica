
//estrucutra del fetch

const nombrePokemon = "";

fetch("https://pokeapi.co/api/v2/pokemon/${nombrePokemon}")
    .then(response=>response.json())
    .then(data=>{
        
    })
    .catch(error=>console.error("Error".error));



import { Generic } from "../model/Generic";
import { PokemonView } from "../model/PokemonView";

export const getAllPokemons = async (offset = 0) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20}&offset=${offset}`)
        .then(response => response.json())
        .catch((err) => {
            console.log(err.message);
        })
    const pokemons = await Promise.all(response.results.map((pokemon: Generic) => fetch(pokemon.url).then(response => response.json())))
    return pokemons
}

export const getQtdPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1&offset=0')
        .then(response => response.json())
        .catch((err) => {
            console.log(err.message);
        })
    return response.count
}

export const getPokemonByName = async (name: string = "bulbasaur"):Promise<PokemonView> => {
    const pokemon:PokemonView = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .catch((err) => {
            console.log(err.message);
        })
    return pokemon
}
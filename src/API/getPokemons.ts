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
type OthersPokemon = {
    previous?: PokemonView,
    next?: PokemonView
}
export const getPreviousAndNextById = async (id:number):Promise<OthersPokemon> => {
    const previous = id - 1
    const next = id + 1
    const result:OthersPokemon = {}
    if(previous > 0){
        result.previous = await getPokemonByName(previous.toString())
    }
    if(next < 1155){
        result.next = await getPokemonByName(next.toString())
    }
    return result
}

export const getPokemonByName = async (name: string = "bulbasaur"):Promise<PokemonView> => {
    const pokemon:PokemonView = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .catch((err) => {
            console.log(err.message);
        })
    return pokemon
}
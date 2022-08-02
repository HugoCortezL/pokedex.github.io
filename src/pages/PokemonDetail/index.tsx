import { PokemonDetailContainer, PokemonImage } from './style'
import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { getPokemonByName } from '../../API/getPokemons'
import { PokemonView } from '../../model/PokemonView';
import TypeCard from '../../components/TypeCard';
import { BackgroundColor } from '../../model/BackgroundColor';
import Header from '../../components/Header';

export default function PokemonDetail() {
    const name = useParams().name
    const [pokemon, setPokemon] = useState<PokemonView>({
        abilities: [],
        base_experience: 10,
        forms: [],
        game_indicies: [],
        height: 1,
        id: 1,
        is_default: true,
        location_area_encounters: "",
        moves: [],
        name: "",
        order: 1,
        past_types: [],
        species: { name: "a", url: "a" },
        sprites: 1,
        stats: [],
        types: [
            {
                slot: 0,
                type: [
                    {
                        name: "normal"
                    }
                ]
            }

        ],
        weight: 1
    })

    const getPokemon = async () => {
        const pokemonResult: PokemonView = await getPokemonByName(name)
        setPokemon(pokemonResult)
    }

    useEffect(() => {
        const setPokemons = async () => {
            await getPokemon()
        }
        setPokemons()
    }, []);


    return (
        <PokemonDetailContainer>
            <Link to={'/'}>
                <Header/>
            </Link>
            <h1>{pokemon.name}</h1>
            <div className="images">
                <div className="images-default">
                    <PokemonImage front={pokemon.sprites.front_default} back={pokemon.sprites.back_default} background={BackgroundColor[pokemon.types[0].type.name]} />
                    <p>Default</p>
                </div>
                <div className="images-shiny">
                    <PokemonImage front={pokemon.sprites.front_shiny} back={pokemon.sprites.back_shiny} background={BackgroundColor[pokemon.types[0].type.name]} />
                    <p>Shiny</p>
                </div>
            </div>
            <div className="general">
                <div className="size">
                    <div>
                        <p className='bold'>Height</p>
                        <p>
                            {pokemon.height}
                        </p>
                    </div>
                    <div className="divisor"></div>
                    <div>
                        <p className='bold'>Weight</p>
                        <p>
                            {pokemon.weight}
                        </p>
                    </div>
                </div>
                <div className="types">
                    {pokemon.types.map(type => <TypeCard type={type.type} key={type.slot} />)}
                </div>
            </div>
            <div className="stats">
                <h3>Stats</h3>
                <div>
                    {pokemon.stats.map(stat => <div key={stat.stat.name} >
                        <p className='bold uppercase'>
                            {stat.stat.name}
                        </p>
                        <p className='number'>
                            {stat.base_stat}
                        </p>
                    </div>)}

                </div>
            </div>
            <div className="abilities">
                <h3>Abilities</h3>
                <div>
                    {pokemon.abilities.map(ability => <div key={ability.ability.name} >
                        <p className='bold uppercase'>
                            {ability.ability.name}
                        </p>
                    </div>)}
                </div>
            </div>
        </PokemonDetailContainer>
    )

}
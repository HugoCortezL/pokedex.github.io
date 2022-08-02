import { PokemonDetailContainer, PokemonImage } from './style'
import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from "react-router-dom";
import { getPokemonByName, getPreviousAndNextById } from '../../API/getPokemons'
import { PokemonView } from '../../model/PokemonView';
import TypeCard from '../../components/TypeCard';
import { BackgroundColor } from '../../model/BackgroundColor';
import Header from '../../components/Header';

export default function PokemonDetail() {
    const basePokemonView = {
        abilities: [],
        base_experience: 10,
        forms: [],
        game_indicies: [],
        height: 1,
        id: 0,
        is_default: true,
        location_area_encounters: "",
        moves: [],
        name: "",
        order: 1,
        past_types: [],
        species: { name: "a", url: "a" },
        sprites: { front_default: "" },
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
    }
    const name = useParams().name
    const [pokemon, setPokemon] = useState<PokemonView>(basePokemonView)
    type OthersPokemon = {
        previous?: PokemonView,
        next?: PokemonView
    }
    const [previousNextPokemon, setPreviousNextPokemon] = useState({
        previous: basePokemonView,
        next: basePokemonView
    })

    const getPokemon = async () => {
        const pokemonResult: PokemonView = await getPokemonByName(name)
        setPokemon(pokemonResult)
    }

    const getOtherPokemon = async () => {
        const othersPokemon: OthersPokemon = await getPreviousAndNextById(pokemon.id)
        setPreviousNextPokemon(othersPokemon)
    }

    useEffect(() => {
        const setPokemons = async () => {
            await getPokemon()
        }
        const setOthersPokemons = async () => {
            await getOtherPokemon()
        }
        setPokemons()
        setOthersPokemons()
    }, [name]);

    useEffect(() => {
        const setOthersPokemons = async () => {
            await getOtherPokemon()
        }
        setOthersPokemons()
    }, [pokemon])

    console.log(previousNextPokemon)


    return (
        <PokemonDetailContainer>
            <Link to={'/'}>
                <Header />
            </Link>
            <div className="previous-next">

                <div className='previous'>
                    {previousNextPokemon.previous ?
                        <Link to={`/${previousNextPokemon.previous.name}`}>
                            <img src={previousNextPokemon.previous.sprites.front_default} alt="" />
                        </Link>
                        : ""}
                </div>
                <div className='next'>
                    {previousNextPokemon.next ?
                        <Link to={`/${previousNextPokemon.next.name}`}>
                            <img src={previousNextPokemon.next.sprites.front_default} alt="" />
                        </Link>
                        : ""}
                </div>
            </div>
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
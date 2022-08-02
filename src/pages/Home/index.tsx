import { HomeContainer, PokemonsContainer } from './style'
import { useState, useEffect } from 'react'

import Header from '../../components/Header'

import { PokemonView } from '../../model/PokemonView'
import { getAllPokemons } from '../../API/getPokemons'
import PokemonCard from '../../components/PokemonCard'

import { useRef } from 'react'

export default function Home() {
    const [pokemons, setPokemons] = useState<PokemonView[]>([]);
    const [offset, setOffset] = useState(0)

    const listInnerRef = useRef()

    const getPokemons = async () => {
        const pokemonsResult: PokemonView[] = await getAllPokemons(offset)
        console.log(pokemonsResult)
        setPokemons([...pokemons, ...pokemonsResult])
    }

    useEffect(() => {
        const setPokemons = async () => {
            await getPokemons()
        }
        setPokemons()
    }, [offset]);

    const infiniteScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (scrollTop + clientHeight == scrollHeight) {
                setOffset(offset + 20)
            }
        }
    }


    return (
        <HomeContainer>
            <Header />
            <PokemonsContainer id="see-more" ref={listInnerRef} onScroll={infiniteScroll}>
                {pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)}
            </PokemonsContainer>
        </HomeContainer>
    )
}
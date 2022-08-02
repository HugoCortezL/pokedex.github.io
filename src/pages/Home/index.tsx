import { HomeContainer, Content, FilterContainer, SearchBar, PokemonsContainer } from './style'
import { useState, useEffect } from 'react'

import Header from '../../components/Header'

import { PokemonView } from '../../model/PokemonView'
import { getAllPokemons, getQtdPokemons } from '../../API/getPokemons'
import PokemonCard from '../../components/PokemonCard'

export default function Home() {
    const [pokemons, setPokemons] = useState<PokemonView[]>([]);
    const [pages, setPages] = useState(0)

    const getPokemons = async () => {
        const pokemonsResult = await getAllPokemons()
        console.log(pokemonsResult)
        setPokemons(pokemonsResult)
    }

    useEffect(() => {
        const setPokemons = async () => {
            await getPokemons()
            const qtdPokemons = await getQtdPokemons()
            setPages(Math.ceil(qtdPokemons / 20))
        }
        setPokemons()
    }, []);


    return (
        <HomeContainer>
            <Header />
            <Content>
                <FilterContainer />
                <div className="right">
                    <SearchBar />
                    <PokemonsContainer>
                        {pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)}
                    </PokemonsContainer>
                </div>
            </Content>
        </HomeContainer>
    )
}
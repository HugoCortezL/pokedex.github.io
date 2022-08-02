import { HomeContainer, Content, FilterContainer, SearchBar, PokemonsContainer } from './style'
import { useState, useEffect } from 'react'

import Header from '../../components/Header'

import { PokemonView } from '../../model/PokemonView'
import { getAllPokemons, getQtdPokemons } from '../../API/getPokemons'
import PokemonCard from '../../components/PokemonCard'

export default function Home() {
    const [pokemons, setPokemons] = useState<PokemonView[]>([]);
    const [qtdPokemons, setQtdPokemons] = useState(0)
    const [offset, setOffset] = useState(0)

    const getPokemons = async () => {
        const pokemonsResult:PokemonView[] = await getAllPokemons(offset)
        console.log(pokemonsResult)
        setPokemons([...pokemons, ...pokemonsResult]) 
    }

    useEffect(() => {
        const setPokemons = async () => {
            await getPokemons()
            setQtdPokemons( await getQtdPokemons())
        }
        setPokemons()
        //document.getElementById("see-more")?.addEventListener("scroll", infiniteScroll)
    }, [offset]);

    const handlerSeeMore = (event: Event ) => {
        event.preventDefault()
        setOffset(offset + 20)
    }

    /*const infiniteScroll = () => {
        /*if (window.innerHeight + document.documentElement.scrollTop
            === document.documentElement.offsetHeight){
                console.log("Chgou ao fim")
            }
        console.log(listInnerRef.current)
    }*/


    return (
        <HomeContainer>
            <Header />
            <Content>
                <FilterContainer />
                <div className="right">
                    <SearchBar />
                    <PokemonsContainer id="see-more">
                        {pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)}
                        <button onClick={() => handlerSeeMore(event)}>
                            <PokemonCard/>
                        </button>
                    </PokemonsContainer>
                </div>
            </Content>
        </HomeContainer>
    )
}
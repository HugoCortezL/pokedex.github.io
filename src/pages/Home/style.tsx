import styled from 'styled-components'


export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

export const PokemonsContainer = styled.div`
    display: grid;
    height: calc(100vh - 90px);
    width: 90vw;
    margin: 0 auto;
    margin-top: 20px;
    @media (min-width: 760px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1000px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 1500px) {
        grid-template-columns: repeat(5, 1fr);
    }
    @media (min-width: 1700px) {
        grid-template-columns: repeat(6, 1fr);
    }
    grid-template-columns: repeat(1, 1fr);
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }
`
import styled from 'styled-components'


export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

export const Content = styled.div`
    margin-top: 30px;
    padding: 0 30px;
    display: flex;
    .right{
        margin-left: 30px;
        width: calc(100% - 20vw);
    }
    overflow: hidden;
`

export const FilterContainer = styled.div`
    width: 20vw;
    background-color: #123123;
    height: 83vh;
    overflow: hidden;
`

export const SearchBar = styled.input`
    width: 100%;
    font-size: 20px;
    height: 45px;
    padding: 10px;
    padding-right: 50px;
    margin-bottom: 10px;
    overflow: hidden;
`

export const PokemonsContainer = styled.div`
    display: grid;
    @media (min-width: 780px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1500px) {
        grid-template-columns: repeat(4, 1fr);
    }
    grid-template-columns: repeat(1, 1fr);
    height: calc(83vh - 45px);
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
import styled from 'styled-components'

interface PokemonImageProps {
    front: string,
    back: string,
    background: string
}

export const PokemonCardContainer = styled.div`
    margin: 10px;
    padding: 30px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    height: 400px;    
    position: relative;
    box-shadow: 3px 3px 4px 3px rgba(0,0,0,0.2);
    border-radius: 5px 20px;
    overflow: hidden;
    cursor: pointer;
    span.id{
        position: absolute;
        top: -10px;
        right: 15px;
    }
    h2{
        font-weight: normal;
        letter-spacing: 2px;
        text-transform: capitalize;
        text-align: center;
    }
    .types{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        overflow-y: scroll;
        min-height: 40px;
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
    }
`

export const PokemonImage = styled.div<PokemonImageProps>`
    height: 80%;
    width: 100%;
    background-image: url(${props => props.front});
    background-size: cover;
    background-position: center center;
    background-color: ${props => props.background ? props.background : "#EAEAEA"}44;
    border-radius: 5px 20px;
    transition: background-image 0.4s;
    &:hover{
        background-image: url(${props => props.back});
        transition: background-image 0.4s;
    }
`
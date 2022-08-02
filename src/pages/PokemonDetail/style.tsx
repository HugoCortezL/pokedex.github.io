import styled from 'styled-components'

export const PokemonDetailContainer = styled.div`
    padding: 10px;
    padding-top: 0px;
    width: 70vw;
    @media (max-width: 1000px) {
        width: 80vw;
    }
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 40px;
        font-weight: normal;
    }
    p.bold{
        font-weight: bold;
    }
    p.uppercase{
        text-transform: uppercase;
    }
    .images{
        display: flex;
        width: 100%;
        justify-content: space-between;
        & > div{
            width: 45%;
            height: 400px;
            @media (min-width: 1500px) {
                height: 600px;
            }
            box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
            border-radius: 20px;
            p{
                text-align: center;
                font-size: 20px;
            }
        }
    }
    .general{
        margin: 20px 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
        & > div{
            width: 45%;
            box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
            border-radius: 20px;
        }
        & .size{
            display: flex;
            align-items: center;
            font-family: 'Roboto';
            justify-content: space-evenly;
            & > div{
                text-align: center;
                p{
                    margin: 5px;
                    font-size: 20px;
                }
            }
        }
        & .divisor{
            width: 2px;
            height: 80%;
            background-color: #dfdfdf;
        }
        & .types{
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
    }
    .stats{
        width: 100%;
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
        border-radius: 20px;
        padding: 15px;
        padding-top: 0px;
        display: flex;
        flex-direction: column;
        h3{
            font-size: 30px;
            text-align: center;
            margin-bottom: 10px;
            letter-spacing: 4px;
        }
        & > div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: 'Roboto';
            flex-wrap: wrap;
            font-size: 20px;
            text-align: center;
            p.number{
                font-size: 25px;
            }
            div{
                box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
                padding: 10px;
                border-radius: 5px;
            }
        }
    }
    .abilities{
        width: 100%;
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
        border-radius: 20px;
        padding: 15px;
        padding-top: 0px;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        h3{
            font-size: 30px;
            text-align: center;
            margin-bottom: 10px;
            letter-spacing: 2px;
        }
        & > div{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            font-family: 'Roboto';
            font-size: 20px;
            text-align: center;
            p.number{
                font-size: 25px;
            }
        }
    }
    
`

interface PokemonImageProps {
    front: string,
    back: string,
    background: string
}

export const PokemonImage = styled.div<PokemonImageProps>`
    height: 80%;
    width: 100%;
    background-image: url(${props => props.front});
    background-size: cover;
    background-position: center center;
    background-color: ${props => props.background ? props.background : "#EAEAEA"}44;
    border-radius: 20px;
    transition: background-image 0.4s;
    &:hover{
        background-image: url(${props => props.back});
        transition: background-image 0.4s;
    }
`

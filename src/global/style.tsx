import { createGlobalStyle } from "styled-components";

import PokemonHollow from '../assets/font/PokemonHollow.ttf'
import PokemonSolid from '../assets/font/PokemonSolid.ttf'

const GlobalStyle  = createGlobalStyle`
    
    
    @font-face {
    font-family: 'PokemonFont';
    src: url(${PokemonSolid});
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html{
        scroll-behavior: smooth;
    }

    body {
        font-family: 'PokemonFont';
    }
`;

export default GlobalStyle;
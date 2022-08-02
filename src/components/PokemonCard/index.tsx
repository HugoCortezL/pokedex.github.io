import {PokemonCardContainer, PokemonImage} from './style'
import {PokemonView} from '../../model/PokemonView'
import TypeCard from '../TypeCard'
import {BackgroundColor} from '../../model/BackgroundColor'
import SeeMorePokemonImage from '../../assets/images/see-more-pokemon.jpg'
interface PokemonCardProps {
    pokemon?: PokemonView
}
export default function PokemonCard(props: PokemonCardProps) {
    if(props.pokemon){
        return (
            <PokemonCardContainer>
                <span className="id"># {props.pokemon.id}</span>
                <PokemonImage front={props.pokemon.sprites.front_default} back={props.pokemon.sprites.back_default} background={BackgroundColor[props.pokemon.types[0].type.name]}/>
                <h2>{props.pokemon.name}</h2>
                <div className="types">
                    {props.pokemon.types.map(type => <TypeCard type={type.type} key={type.slot}/>)}
                </div>
            </PokemonCardContainer>
        )
    }else{
        return (
                <PokemonCardContainer>
                    <span className="id"># XXX</span>
                    <PokemonImage front={SeeMorePokemonImage} back={SeeMorePokemonImage} background="123123"/>
                    <h2>See More</h2>
                </PokemonCardContainer>
        )
    }
}
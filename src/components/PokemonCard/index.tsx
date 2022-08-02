import { PokemonCardContainer, PokemonImage } from './style'
import { PokemonView } from '../../model/PokemonView'
import TypeCard from '../TypeCard'
import { BackgroundColor } from '../../model/BackgroundColor'
import { Link } from "react-router-dom";
interface PokemonCardProps {
    pokemon: PokemonView
}
export default function PokemonCard(props: PokemonCardProps) {
    return (
        <Link to={`/${props.pokemon.name}`}>
            <PokemonCardContainer>
                <span className="id"># {props.pokemon.id}</span>
                <PokemonImage front={props.pokemon.sprites.front_default} back={props.pokemon.sprites.back_default} background={BackgroundColor[props.pokemon.types[0].type.name]} />
                <h2>{props.pokemon.name}</h2>
                <div className="types">
                    {props.pokemon.types.map(type => <TypeCard type={type.type} key={type.slot} />)}
                </div>
            </PokemonCardContainer>
        </Link>
    )

}
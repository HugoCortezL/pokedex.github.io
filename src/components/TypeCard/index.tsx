import { TypeCardContainer } from './style'
import { Generic } from '../../model/Generic'
import { BackgroundColor } from '../../model/BackgroundColor'

interface TypeCardProps {
    type: Generic
}

enum Color {
    "normal" = "#000000",
    "fight" = "#FFFFFF",
    "flying" = "#000000",
    "poison" = "#FFFFFF",
    "ground" = "#000000",
    "rock" = "#000000",
    "bug" = "#FFFFFF",
    "ghosty" = "#FFFFFF",
    "steel" = "#000000",
    "fire" = "#FFFFFF",
    "water" = "#FFFFFF",
    "grass" = "#000000",
    "eletric" = "#000000",
    "psychic" = "#000000",
    "ice" = "#000000",
    "dragon" = "#000000",
    "dark" = "#FFFFFF",
    "fairy" = "#000000",
}

export default function TypeCard(props: TypeCardProps) {
    return (
        <TypeCardContainer background={BackgroundColor[props.type.name]} color={Color[props.type.name]}>
            <span>{props.type.name}</span>
        </TypeCardContainer>
    )
}
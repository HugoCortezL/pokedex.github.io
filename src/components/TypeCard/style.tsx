import styled from 'styled-components'



interface CardProps {
    background: string,
    color: string
}

export const TypeCardContainer = styled.div<CardProps>`
    display: flex;
    background-color: ${props => props.background ? props.background : "#FFFFFF"};
    box-shadow: 2px 2px 4px ${props => props.background ? props.background : "#000"}ff;
    color: ${props => props.color ? props.color : "#000000"};
    text-transform: capitalize;
    display: flex;
    block-size: fit-content;
    font-size: 14px;
    padding: 5px 15px;
    border-radius: 20px;
    font-family: 'Roboto';
    font-weight: 500;
    letter-spacing: 2px;
    margin: 5px;
`
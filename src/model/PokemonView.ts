import { Generic } from './Generic'

export type PokemonView = {
    abilities: any[],
    base_experience: number,
    forms: Generic[],
    game_indicies: any[],
    height: number,
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: any[],
    name: string,
    order: number,
    past_types: any[],
    species: Generic,
    sprites: any,
    stats: any[],
    types: any[],
    weight: number
}
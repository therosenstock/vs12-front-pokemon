import { PokemonType } from './PokemonType.ts';

export interface Pokemon {
  id: number;
  name: string;
  types?: PokemonType[]
  image?: string;
  back_image?: string;
}
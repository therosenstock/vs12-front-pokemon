import { PokemonType } from './PokemonType.ts';
import { Stats } from './Stats.ts';

export interface Pokemon {
  id: number;
  name: string;
  types?: PokemonType[];
  image?: string;
  back_image?: string;
  weight?: number;
  height?: number;
  abilities?: string[];
  stats?: Stats[];
}
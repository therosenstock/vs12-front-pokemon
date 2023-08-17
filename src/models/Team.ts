import { Pokemon } from './Pokemon.ts';

export interface Team {
  id: number;
  name: string;
  pokemon: Pokemon[]
}
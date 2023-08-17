import { Pokemon } from '../../models';
import { Container } from './styles.ts';
import { PokemonCard } from '../PokemonCard';

export type PokemonGridProps = {
  pokemon: Pokemon[]
}

export const PokemonGrid = ({ pokemon }: PokemonGridProps) => {
  return (
    <Container>
      {pokemon.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      ))}
    </Container>
  );
};
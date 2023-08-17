import { Container, Title, Type, Types } from "./styles.ts";
import { Pokemon } from "../../models";

export type TeamViewerPokemonProps = {
  pokemon: Pokemon;
  onRemove: (pokemon: Pokemon) => void;
};
export const TeamViewerPokemon = ({
  pokemon,
  onRemove,
}: TeamViewerPokemonProps) => {
  return (
    <Container>
      <Title>{pokemon.name}</Title>
      <Types>
        {pokemon.types?.map((type) => (
          <Type key={type} type={type}>
            {type}
          </Type>
        ))}
      </Types>
      <button onClick={() => onRemove(pokemon)}>Remover</button>
    </Container>
  );
};

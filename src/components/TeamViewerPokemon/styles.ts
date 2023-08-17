import styled from 'styled-components';
import { PokemonType } from '../../models';

export const Container = styled.div``;

export const Title = styled.span``;

export const Types = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Type = styled.div<{ type: PokemonType }>`
  border-radius: 24px;
  padding: 0.25rem 0.75rem;
  background-color: ${(props) => getTypeColor(props.type)};
`;

const getTypeColor = (type: PokemonType) => {
  switch (type) {
  case PokemonType.FIRE:
    return 'red';
  case PokemonType.GRASS:
    return 'green';
  default:
    return 'gray';
  }
};
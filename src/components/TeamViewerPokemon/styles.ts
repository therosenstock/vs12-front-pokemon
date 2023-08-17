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
  color: #fff;
  background-color: ${(props) => getTypeColor(props.type)};
`;

const getTypeColor = (type: PokemonType) => {
  switch (type) {
  case PokemonType.FIRE:
    return '#ee7f30';
  case PokemonType.GRASS:
    return '#77c850';
  case PokemonType.WATER:
      return '#678fee'; 
  case PokemonType.ELECTRIC:
        return '#f7cf2e'; 
  case PokemonType.ICE:
    return '#98d5d7'; 
  case PokemonType.GROUND:
    return '#dfbf69'; 

    case PokemonType.FLYING:
  return '#a98ff0'; 

  case PokemonType.POISON:
  return '#a040a0'; 

  case PokemonType.FIGHTING:
    return '#bf3029'; 

  case PokemonType.PSYCHIC:
    return '#f65687'; 
  case PokemonType.DARK:
    return '#725847'; 
  case PokemonType.ROCK:
    return '#b8a137'; 
  case PokemonType.BUG:
    return '#a8b720'; 
  case PokemonType.GHOST:
    return '#6e5896'; 
  case PokemonType.STEEL:
    return '#b9b7cf'; 
  case PokemonType.DRAGON:
    return '#6f38f6'; 
  case PokemonType.FAIRY:
    return '#f9aec7'; 
  default:
    return 'gray';
  }
};




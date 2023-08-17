import { http } from './http.ts';
import { Pokemon, PokemonType } from '../models';

export async function getPokemon(id: number): Promise<Pokemon> {
  const cacheKey = `pokemon:${id}`;
  let data: GetPokemonResponse;

  if (localStorage.getItem(cacheKey)) {
    data = JSON.parse(localStorage.getItem(cacheKey)!);
  } else {
    const response = await http.get<GetPokemonResponse>(`/pokemon/${id}`);
    data = response.data;
    localStorage.setItem(cacheKey, JSON.stringify(data));
  }

  return makePokemon(data);
}

function makePokemon(data: GetPokemonResponse): Pokemon {

  return {
    id: data.id,
    name: data.name,
    types: data.types.map((item) => item.type.name as PokemonType),
    image: data.sprites.front_default,
    back_image: data.sprites.back_default
  };
}



interface GetPokemonResponse {
  id: number,
  name: string;
  abilities: {
    ability: { name: string, url: string },
    is_hidden: boolean,
    slot: number
  }[]
  base_experience: number,
  forms: { name: string, url: string }[],
  game_indices: {
    game_index: number,
    version: { name: string, url: string }
  }[]
  height: number,
  held_items: [],
  is_default: boolean,
  location_area_encounters: string;
  moves: {
    move: { name: string, url: string },
    version_group_details: {
      level_learned_at: number,
      move_learn_method: { name: string, url: string },
      version_group: { name: string, url: string }
    }[]
  }[]
  order: 1,
  post_types: [],
  species: { name: string, url: string },
  sprites: {
    back_default: string,
    back_female: string | null,
    back_shiny: string,
    back_shiny_female: string | null,
    front_default: string,
    front_female: string | null,
    front_shiny: string,
    front_shiny_female: string | null,
  },
  stats: {
    base_stat: number,
    effort: number,
    stat: { name: string, url: string }
  }[],
  types: {
    slot: number,
    type: { name: string, url: string }
  }[]
}

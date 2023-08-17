import { http } from './http.ts';
import { Pokemon } from '../models';

export async function getPokemonList(limit = 20, offset = 0): Promise<Pokemon[]> {
  if (localStorage.getItem('pokemon-list')) {
    return JSON.parse(localStorage.getItem('pokemon-list')!);
  }

  const params = new URLSearchParams({ limit: String(limit ?? ''), offset: String(offset ?? '') });
  const response = await http.get<GetPokemonListResponse>('/pokemon', { params });
  const pokemon = response.data.results.map(makePokemon);
  localStorage.setItem('pokemon-list', JSON.stringify(pokemon));
  return pokemon;
}

function makePokemon(data: { name: string, url: string }): Pokemon {
  const { name, url } = data;
  const id = Number(url
    .replace('https://pokeapi.co/api/v2/pokemon/', '')
    .replace('/', '')
    .trim()
  );

  return {
    id,
    name
  };
}


interface GetPokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string, url: string }[]
}
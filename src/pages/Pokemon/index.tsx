import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPokemon } from '../../api';
import { Pokemon } from '../../models';

export const PokemonPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getPokemon(Number(id))
        .then(setPokemon)
        .catch(() => alert('Ocorreu um erro ao tentar buscar o pokémon'))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return <span>Carregando</span>;
  }

  if (!pokemon) {
    return <h1>Pokémon não encontrando!!!</h1>;
  }

  return (
    <>
      {pokemon.name}
    </>
  );
};
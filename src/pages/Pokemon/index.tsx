import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemon } from "../../api";
import { Pokemon } from "../../models";
import {
  About,
  Container,
  PokeContainer,
  Img,
  Paragraph,
  PokemonInfo,
  PokemonPic,
  Stats,
  Subtitle,
  Title,
  Type,
} from "./styles.ts";
import { AddPokemonModal } from "../../components/AddPokemonModal";

import { Button } from "../../components/index.ts";
import { Header } from "../../components/Header/index.tsx";

export const PokemonPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getPokemon(Number(id))
        .then(setPokemon)
        .catch(() => alert("Ocorreu um erro ao tentar buscar o pokémon"))
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
      <Header />
      <Container>
        <Title>{pokemon.name}</Title>
        <PokeContainer>
          <PokemonPic>
            <Img src={pokemon.image}></Img>
            <Img src={pokemon.back_image}></Img>
          </PokemonPic>
          <PokemonInfo>
            <Title>Sobre</Title>
            <About>
              <Subtitle> National Nº: </Subtitle>
              <Paragraph>{pokemon.id}</Paragraph>
            </About>
            <About>
              <Subtitle>Tipo:</Subtitle>
              <Paragraph>
                {pokemon.types.map((type) => (
                  <Type>{type}</Type>
                ))}
              </Paragraph>
            </About>
            <About>
              <Subtitle>Altura:</Subtitle>
              <Paragraph>{pokemon.height} m</Paragraph>
            </About>
            <About>
              <Subtitle>Peso:</Subtitle>
              <Paragraph>{pokemon.weight} kg</Paragraph>
            </About>
          </PokemonInfo>
          <PokemonInfo>
            <Title>Stats</Title>
            {pokemon.stats?.map((stats) => (
              <Stats>
                {stats.name} - {stats.base_stat}
              </Stats>
            ))}

            <Button onClick={() => setShowModal(true)}>Adicionar</Button>
          </PokemonInfo>
        </PokeContainer>
        <AddPokemonModal
          show={showModal}
          pokemon={pokemon}
          onClose={() => setShowModal(false)}
        />
      </Container>
    </>
  );
};

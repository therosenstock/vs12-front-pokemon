import { Pokemon } from "../../models";
import { Actions, Container, Content, Image, Title } from "./styles.ts";
import { useEffect, useState } from "react";
import { getPokemon } from "../../api";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { AddPokemonModal } from "../AddPokemonModal";

export type PokemonCardProps = {
  pokemon: Pokemon;
};

export const PokemonCard = (props: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>(props.pokemon);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getPokemon(props.pokemon.id).then(setPokemon);
  }, [props.pokemon]);

  const navigate = useNavigate();

  return (
    <Container>
      <Image src={pokemon.image} />
      <Content>
        <Title>{pokemon.name}</Title>
        <Actions>
          <Button onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
            Ver
          </Button>
          <Button onClick={() => setShowModal(true)}>Adicionar</Button>
        </Actions>
      </Content>
      {/*{true ?? (*/}
      {/*  <AddPokemonModal*/}
      {/*    show={showModal}*/}
      {/*    pokemon={pokemon}*/}
      {/*    onClose={() => setShowModal(false)}*/}
      {/*  />*/}
      {/*)}*/}

      <AddPokemonModal
        show={showModal}
        pokemon={pokemon}
        onClose={() => setShowModal(false)}
      />
    </Container>
  );
};

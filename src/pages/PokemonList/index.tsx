import { useEffect, useState } from "react";
import { getPokemonList } from "../../api";
import { Pokemon } from "../../models";
import { Container } from "./styles.ts";
import { TextField, PokemonGrid } from "../../components";
import { Header } from "../../components/Header/index.tsx";

export const PokemonListPage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getPokemonList(151).then((pokemon) => {
      setPokemonList(pokemon.filter(({ name }) => !name.includes("-")));
    });
  }, []);

  const filterPokemon = () => {
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <TextField value={searchText} onChangeValue={setSearchText} />
        </div>
        <PokemonGrid pokemon={filterPokemon()} />
      </Container>
    </>
  );
};

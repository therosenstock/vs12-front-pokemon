import { useEffect, useState } from "react";
import { getPokemonList } from "../../api";
import { Pokemon } from "../../models";
import { Container, Search } from "./styles.ts";
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
        <Search>
          <TextField
            placeholder="Pesquise por um Pokémon..."
            value={searchText}
            onChangeValue={setSearchText}
          />
        </Search>
        <PokemonGrid pokemon={filterPokemon()} />
      </Container>
    </>
  );
};

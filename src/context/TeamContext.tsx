import { createContext, ReactNode, useEffect, useState } from 'react';
import { Pokemon, Team } from '../models';

export interface ITeamContext {
  teams: Team[]
  addTeam: (team: Team) => void;
  removeTeam: (teamId: number) => void;
  addPokemon: (teamId: number, pokemon: Pokemon) => void
  removePokemon: (teamId: number, pokemonId: number) => void;
}

export const TeamContext = createContext<ITeamContext>({
  teams: [],
  addPokemon: () => null,
  addTeam: () => null,
  removePokemon: () => null,
  removeTeam: () => null
});

export type TeamProviderProps = {
  children?: ReactNode | ReactNode[]
}
export const TeamProvider = ({ children }: TeamProviderProps) => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('teams');
    if (data) {
      setTeams(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (teams.length === 0) return;
    const data = JSON.stringify(teams);
    console.log('add teams');
    if (localStorage.getItem('teams') !== data) {
      localStorage.setItem('teams', data);
    }
  }, [teams]);

  const addTeam = (team: Team) => {
    setTeams([ ...teams, team ]);
  };

  const removeTeam = (teamId: number) => {
    setTeams(teams.filter((team) => team.id !== teamId));
  };

  const addPokemon = (teamId: number, pokemon: Pokemon) => {
    const index = teams.findIndex((team) => team.id === teamId);
    if (index === -1) return;
    const team = teams[index];
    if (team.pokemon.length >= 6) return;
    team.pokemon.push(pokemon);
    setTeams([...teams]);
  };

  const removePokemon = (teamId: number, pokemonId: number) => {
    const index = teams.findIndex((team) => team.id === teamId);
    if (index === -1) return;
    const team = teams[index];
    team.pokemon = team.pokemon.filter((pokemon) => pokemon.id !== pokemonId);
    setTeams([...teams]);
  };

  return (
    <TeamContext.Provider value={{ teams, addTeam, removeTeam, addPokemon, removePokemon }}>
      {children}
    </TeamContext.Provider>
  );
};

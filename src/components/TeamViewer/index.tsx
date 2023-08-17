import { Container } from "./styles.ts";
import { Team } from "../../models";
import { TeamViewerPokemon } from "../TeamViewerPokemon";
import { useTeams } from "../../hooks";

export type TeamViewerProps = {
  team: Team;
};

export const TeamViewer = ({ team }: TeamViewerProps) => {
  const { removePokemon } = useTeams();

  return (
    <Container>
      {team.name}
      {team.pokemon.map((pokemon) => (
        <TeamViewerPokemon
          key={pokemon.id}
          pokemon={pokemon}
          onRemove={() => removePokemon(team.id, pokemon.id)}
        />
      ))}
    </Container>
  );
};

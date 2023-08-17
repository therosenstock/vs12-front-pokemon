import { Container, Title } from "./styles.ts";
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
      <Title>{team.name}</Title>

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

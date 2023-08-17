import { Container, Counter, Title } from './styles.ts';
import { Team } from '../../models';

export type TeamCardProps = {
  team: Team;
  onClick?: () => void;
}

export const TeamCard = ({ team, onClick }: TeamCardProps) => {
  return (
    <Container onClick={onClick}>
      <Title>{team.name}</Title>
      <Counter>{team.pokemon.length} / 6</Counter>
    </Container>
  );
};
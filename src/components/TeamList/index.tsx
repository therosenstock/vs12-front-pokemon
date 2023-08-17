import { Container } from './styles.ts';
import { useTeams } from '../../hooks';
import { TeamCard } from '../TeamCard';
import { Team } from '../../models';

export type TeamListProps = {
  onSelect?: (team: Team) => void
}

export const TeamList = ({ onSelect }: TeamListProps) => {
  const { teams } = useTeams();

  return (
    <Container>
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} onClick={() => onSelect?.(team)} />
      ))}
    </Container>
  );
};
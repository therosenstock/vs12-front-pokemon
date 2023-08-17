import { useEffect, useState } from 'react';
import { Container, Content } from './styles.ts';
import { AddTeamModal, Button, TeamList, TeamViewer } from '../../components';
import { Team } from '../../models';
import { useTeams } from '../../hooks';

export const TeamPage = () => {
  const [showModal, setShowModal] = useState(false);

  const { teams } = useTeams();

  const [team, setTeam] = useState<Team>();

  useEffect(() => {
    if (!team && teams.length > 0) {
      setTeam(teams[0]);
    }
  }, [teams]);


  return (
    <Container>
      <Button onClick={() => setShowModal(true)}>Adicionar time</Button>
      <Content>
        <TeamList onSelect={setTeam} />
        {team && <TeamViewer team={team} />}
      </Content>
      <AddTeamModal show={showModal} onClose={() => setShowModal(false)} />
    </Container>
  );
};
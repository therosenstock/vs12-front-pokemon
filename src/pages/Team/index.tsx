import { useEffect, useState } from "react";
import {
  Container,
  Content,
  Title,
  Aside,
  AddTeam,
  Top,
  TeamContent,
} from "./styles.ts";
import { AddTeamModal, Button, TeamList, TeamViewer } from "../../components";
import { Team } from "../../models";
import { useTeams } from "../../hooks";
import { Header } from "../../components/Header/index.tsx";
import { Subtitle } from "../Pokemon/styles.ts";

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
    <>
      <Header />
      <Container>
        <Top>
          <Title>Times</Title>
          <AddTeam>
            <Button onClick={() => setShowModal(true)}>Adicionar time</Button>
          </AddTeam>
        </Top>

        <Content>
          <TeamContent>
            <Subtitle>Lista de Times</Subtitle>
            <TeamList onSelect={setTeam} />
          </TeamContent>
          <TeamContent>
            <Subtitle>Equipe Selecionada</Subtitle>
            <Aside>{team && <TeamViewer team={team} />}</Aside>
          </TeamContent>
        </Content>

        <AddTeamModal show={showModal} onClose={() => setShowModal(false)} />
      </Container>
    </>
  );
};

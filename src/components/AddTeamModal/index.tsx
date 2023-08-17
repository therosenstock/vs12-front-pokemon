import { Actions, Modal, Title } from './styles.ts';
import { TextField } from '../TextField';
import { Button } from '../Button';
import { FormEvent, useState } from 'react';
import { Team } from '../../models';
import { useTeams } from '../../hooks';

export type AddTeamModalProps = {
  show?: boolean;
  onClose?: () => void;
}
export const AddTeamModal = ({ show, onClose }: AddTeamModalProps) => {
  const [name, setName] = useState('');
  const { addTeam } = useTeams();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!name.trim()) {
      alert('Digite o nome do time!!!');
      return;
    }

    const team: Team = {
      id: Math.floor(Math.random() * 100000000) + 1,
      name,
      pokemon: []
    };

    addTeam(team);
    onClose?.();
  };
  
  return (
    <Modal isOpen={!!show}>
      <Title>Adicionar Time</Title>
      <form onSubmit={onSubmit}>
        <TextField value={name} onChangeValue={setName} />
        <Actions>
          <Button onClick={onClose}>
            Cancelar
          </Button>
          <Button type={'submit'}>
            Criar
          </Button>
        </Actions>
      </form>
    </Modal>
  );
};
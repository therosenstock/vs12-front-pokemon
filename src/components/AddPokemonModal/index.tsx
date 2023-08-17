import { Actions, Modal, Title } from './styles.ts';
import { Button } from '../Button';
import { FormEvent, useState } from 'react';
import { Pokemon, Team } from '../../models';
import { useTeams } from '../../hooks';
import { Select } from '../Select';

export type AddPokemonModalProps = {
  pokemon: Pokemon;
  show?: boolean;
  onClose?: () => void;
}
export const AddPokemonModal = ({ pokemon, show, onClose }: AddPokemonModalProps) => {
  const { teams, addPokemon } = useTeams();
  const [team, setTeam] = useState<Team>();

  console.log('teams', teams);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!team) {
      alert('Selecione um time!!');
      return;
    }

    if (team.pokemon.length === 6) {
      alert('O time escolhido já possuí 6 pokémon');
      return;
    }
    
    addPokemon(team.id, pokemon);
    onClose?.();
  };
  
  return (
    <Modal isOpen={!!show}>
      <Title>Adicionar Pokémon</Title>
      <form onSubmit={onSubmit}>
        <Select
          value={team}
          items={teams}
          placeholder={'Selecione um time'}
          getOptionKey={(team) => String(team.id)}
          getOptionLabel={(team) => team.name}
          onChange={setTeam}
        />
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
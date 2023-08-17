import { useContext } from 'react';
import { TeamContext } from '../context';

export const useTeams = () => {
  return useContext(TeamContext);
};
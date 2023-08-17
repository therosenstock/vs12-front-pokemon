import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Title = styled.h2`
  font-size: 1.5rem;
`;
export const Modal = styled(ReactModal)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

export const Select = styled.select`
  all: unset;

`;

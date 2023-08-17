import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid grey;
  border-radius: 8px;
`;

export const Image = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const Title = styled.span`
  text-transform: capitalize;
`;
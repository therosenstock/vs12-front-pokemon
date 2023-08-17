import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

`;

export const PokeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  `;
  

export const PokemonPic = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokemonInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;
export const PokemonStats = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  color: #333;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
`;
export const Name = styled.h1`
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid grey;
  padding-bottom: 1rem;

`;
export const Stats = styled.div`
  text-transform: uppercase;
  background-color: #d9d9d9;
  color: grey;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 16px;
  border: 1px solid grey;
  &:hover{
    background-color: #c9c9c9;
  }
`;

export const Subtitle = styled.h2`
  text-transform: capitalize;
  font-size: 1.2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
`;

export const Type = styled.span`
text-transform: uppercase;
  background-color: #d9d9d9;
  font-size: 1rem;
  margin-right: 8px;
  color: grey;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 16px;
  border: 1px solid grey;
  &:hover{
    background-color: #c9c9c9;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
`;

export const About = styled.div`
  color: #333;
  display: flex;
  gap: 2rem;
`;
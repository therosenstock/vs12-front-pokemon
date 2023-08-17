import styled from 'styled-components';
import { Link as ReactLink } from "react-router-dom";

export const Head = styled.header`
background-color: #0f224a;
display: flex;
align-items: center;
justify-content: space-between;
color: #fff;
padding: 1rem;

`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const Title = styled.h1``;

export const Link = styled(ReactLink)`
  all: unset;
  color: #fff;
`
export const A = styled.a`
  all: unset;
  color: #fff;
  cursor: pointer;
  font-weight: 700;

  &:hover{
    color: yellow;
  }

`;
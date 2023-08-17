import { Link } from "react-router-dom";
import { Nav, Title, Head, ReactLink, A } from "./styles";

export const Header = () => {
  return (
    <Head>
      <Title>Pokédex</Title>
      <Nav>
        <A href="/">Home</A>
        <A href="/team">Times</A>
      </Nav>
    </Head>
  );
};

import { Nav, Title, Head, A } from "./styles";

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

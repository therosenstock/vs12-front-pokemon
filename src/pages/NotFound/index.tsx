import { Container, Img, Text } from "./styles";

export const NotFound = () => {
  return (
    <>
      <Container>
        <Img src="src/assets/rocket.png" />
        <Text>
          Prepare-se para o Not Found!
          <br /> Not Found em dobro!
        </Text>
      </Container>
    </>
  );
};

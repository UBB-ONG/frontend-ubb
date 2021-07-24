import styled from "styled-components";
import Banner from "../components/banner/Banner";

export default function Home() {
  return (
    <Container>
      <Banner />
    </Container>
  );
}

const Container = styled.div`
  height: 300vh;
`;

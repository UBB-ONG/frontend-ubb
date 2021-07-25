import styled from "styled-components";
import Banner from "../components/banner/Banner";
import WhoWeAreSection from "../components/whoWeAreSection/WhoWeAreSection";

export default function Home() {
  return (
    <Container>
      <Banner />
      <WhoWeAreSection />
    </Container>
  );
}

const Container = styled.div`
  height: 300vh;
`;

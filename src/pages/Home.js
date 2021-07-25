import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import Banner from "../components/banner/Banner";
import SocialProgramsSection from "../components/socialProgramsSection/SocialProgramsSection";
import WhoWeAreSection from "../components/whoWeAreSection/WhoWeAreSection";
import SectionsContext from "../contexts/SectionsContext";

export default function Home() {
  const { setComponentRefs } = useContext(SectionsContext);
  const whoWeAreSectionRef = useRef();
  const socialProgramsSectionRef = useRef();

  useEffect(() => {
    setComponentRefs({ whoWeAreSectionRef, socialProgramsSectionRef });
  }, []);

  return (
    <Container>
      <Banner />
      <WhoWeAreSection whoWeAreSectionRef={whoWeAreSectionRef} />
      <SocialProgramsSection
        socialProgramsSectionRef={socialProgramsSectionRef}
      />
    </Container>
  );
}

const Container = styled.div`
  height: 300vh;
`;

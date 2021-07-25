import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import Banner from "../components/banner/Banner";
import PartnershipBanner from "../components/partnershipBanner/PartnershipBanner";
import SocialProgramsSection from "../components/socialProgramsSection/SocialProgramsSection";
import TestimonialsSection from "../components/testimonialsSection/TestimonialsSection";
import WhereWeOperate from "../components/whereWeOperateSection/WhereWeOperateSection";
import WhoWeAreSection from "../components/whoWeAreSection/WhoWeAreSection";
import SectionsContext from "../contexts/SectionsContext";

export default function Home() {
  const { setComponentRefs } = useContext(SectionsContext);
  const whoWeAreSectionRef = useRef();
  const socialProgramsSectionRef = useRef();
  const testimonialsSectionRef = useRef();
  const partnershipBannerRef = useRef();

  useEffect(() => {
    setComponentRefs({
      whoWeAreSectionRef,
      socialProgramsSectionRef,
      testimonialsSectionRef,
      partnershipBannerRef,
    });
  }, []);

  return (
    <Container>
      <Banner />
      <WhoWeAreSection whoWeAreSectionRef={whoWeAreSectionRef} />
      <SocialProgramsSection
        socialProgramsSectionRef={socialProgramsSectionRef}
      />
      <WhereWeOperate />
      <TestimonialsSection testimonialsSectionRef={testimonialsSectionRef} />
      <PartnershipBanner partnershipBannerRef={partnershipBannerRef} />
    </Container>
  );
}

const Container = styled.div`
  height: 300vh;
  width: 100vw;
`;

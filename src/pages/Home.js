import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import OursPartersSection from "../components/ourPartnersSection/OurPartnersSection";
import PartnershipBanner from "../components/partnershipBanner/PartnershipBanner";
import SocialProgramsSection from "../components/socialProgramsSection/SocialProgramsSection";
import TestimonialsSection from "../components/testimonialsSection/TestimonialsSection";
import WhereWeOperate from "../components/whereWeOperateSection/WhereWeOperateSection";
import WhoWeAreSection from "../components/whoWeAreSection/WhoWeAreSection";
import SectionsContext from "../contexts/SectionsContext";
import Button from "../components/general/Button";
import sendToMoneyCollectionSite from "../utils/sendToMoneyCollectionSite";

export default function Home() {
  const { setComponentRefs } = useContext(SectionsContext);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const whoWeAreSectionRef = useRef();
  const socialProgramsSectionRef = useRef();
  const testimonialsSectionRef = useRef();
  const partnershipBannerRef = useRef();

  if (isRedirecting) {
    setTimeout(() => setIsRedirecting(false), 1000);
    sendToMoneyCollectionSite();
  }

  useEffect(() => {
    setComponentRefs({
      whoWeAreSectionRef,
      socialProgramsSectionRef,
      testimonialsSectionRef,
      partnershipBannerRef,
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Banner />
        <Button bgColor="#F66262" onClick={() => setIsRedirecting(true)}>
          {isRedirecting ? "Aguarde..." : "Quero ajudar"}
        </Button>
        <WhoWeAreSection whoWeAreSectionRef={whoWeAreSectionRef} />
        <SocialProgramsSection
          socialProgramsSectionRef={socialProgramsSectionRef}
        />
        <WhereWeOperate />
        <TestimonialsSection testimonialsSectionRef={testimonialsSectionRef} />
        <PartnershipBanner partnershipBannerRef={partnershipBannerRef} />
        <OursPartersSection />
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;

  & > button {
    position: fixed;
    right: -50px;
    top: 300px;

    text-align: left;
    padding-left: 1em;

    z-index: 20;

    &:hover {
      width: 288px;

      font-size: 32px;
    }
  }

  @media (max-width: 620px) {
    & > button {
      display: none;
    }
  }
`;

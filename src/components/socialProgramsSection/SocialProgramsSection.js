import styled from "styled-components";
import SocialImpact from "./SocialImpact";
import SocialProgramCard from "./SocialProgramCard";
import getDefaultSocialPrograms from "./utils/getDefaultSocialPrograms";
import Button from "../general/Button";
import sendToMoneyCollectionSite from "../../utils/sendToMoneyCollectionSite";
import { useState } from "react";

export default function SocialProgramsSection({ socialProgramsSectionRef }) {
  const socialPrograms = getDefaultSocialPrograms();
  const [isRedirecting, setIsRedirecting] = useState(false);

  if (isRedirecting) {
    sendToMoneyCollectionSite();
  }

  return (
    <Container ref={socialProgramsSectionRef}>
      <p>Programas</p>
      <div>
        {socialPrograms.map(({ id, title, imageUrl, descripton }) => (
          <SocialProgramCard
            key={id}
            title={title}
            imageUrl={imageUrl}
            descripton={descripton}
          />
        ))}
      </div>
      <SocialImpact />
      <Button
        bgColor="#2C4B7A"
        hoverBrightness
        onClick={() => setIsRedirecting(true)}
      >
        {isRedirecting ? "Aguarde..." : "DOE AGORA"}
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 100px;

  & > p {
    font-size: 32px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    color: #1f2d3d;
    margin-bottom: 50px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    max-width: 1140pxvw;

    & > div {
      margin: 0 10px;
    }
  }

  button {
    margin-top: 60px;
  }

  @media (max-width: 950px) {
    margin-top: 50px;
    & > div {
      flex-direction: column;
      align-items: center;
      width: 62vw;
      & > div {
        margin-bottom: 50px;
      }
    }

    button {
      margin-top: 40px;
    }
  }

  @media (max-width: 520px) {
    button {
      margin-top: 20px;
    }
  }
`;

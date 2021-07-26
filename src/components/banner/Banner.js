import { useState } from "react";
import styled from "styled-components";
import bannerImage from "../../assets/images/banner.png";
import sendToMoneyCollectionSite from "../../utils/sendToMoneyCollectionSite";
import Button from "../general/Button";

export default function Banner() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  if (isRedirecting) {
    sendToMoneyCollectionSite();
  }

  return (
    <Container>
      <div>
        <p>Nos ajude a melhorar o mundo com pequenos gestos</p>
        <Button bgColor="#47A634" onClick={() => setIsRedirecting(true)}>
          {isRedirecting ? "Aguarde..." : "DOE AGORA"}
        </Button>
      </div>
      <img src={bannerImage} alt="Mãos de um grupo de pessoas" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  margin-top: 116px;

  background: linear-gradient(
    226.49deg,
    rgba(0, 0, 0, 0) 3.88%,
    rgba(0, 0, 0, 0.38) 53.86%
  );

  img {
    width: 100%;
    position: relative;
    z-index: -1;
  }

  p {
    width: 570px;
    font-family: "Roboto", sans-serif;
    font-size: 40px;
    font-weight: bold;
    line-height: 56px;
    color: #fff;

    margin-bottom: 20px;
  }

  div {
    position: absolute;
    left: 180px;
    bottom: 114px;
  }

  @media (max-width: 1100px) {
    div {
      position: absolute;
      left: calc(50% - 15rem);
      bottom: 0;

      padding-bottom: 20px;

      button {
        margin: 0 auto;
      }
    }

    p {
      width: 30rem;
      font-size: 2rem;
    }
  }

  @media (max-width: 620px) {
    img {
      width: 100%;
      height: 270px;
    }

    div {
      left: calc(50vw - 151px);
      bottom: 55px;
      padding-bottom: 0;
    }
    p {
      width: 302px;
      font-size: 21px;
      line-height: 29px;
    }
  }
`;

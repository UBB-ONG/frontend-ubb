import styled from "styled-components";
import Footer from "../components/footer/Footer";
import logo from "../assets/images/logo.png";
import Button from "../components/general/Button";
import { useEffect, useState } from "react";
import sendToMoneyCollectionSite from "../utils/sendToMoneyCollectionSite";
import { useHistory } from "react-router-dom";

export default function Landing() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const history = useHistory();

  if (isRedirecting) {
    sendToMoneyCollectionSite();
  }

  const goToHome = () => history.push("/");

  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="UBB" onClick={goToHome} />

          <p>O verdadeiro amor é o gesto de se doar pelo próximo</p>
          <Button
            bgColor="#2C4B7A"
            hoverBrightness
            onClick={() => setIsRedirecting(true)}
          >
            {isRedirecting ? "Aguarde..." : "DOE AGORA"}
          </Button>
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/7IxLNNFQD-I?controls=0"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      </Content>
      <Footer noMargin fixed small />
    </Container>
  );
}

const Container = styled.div``;
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-top: 30px;
  padding-bottom: 296px;

  iframe {
    width: 100%;
    height: 50vh;
  }

  div {
    width: 50vw;
    margin-left: 20px;
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30vw;
    height: 60vh;
  }

  img {
    width: 20vw;

    cursor: pointer;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 2em;
    line-height: 47px;

    color: #1f2d3d;
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1.5em;
      line-height: 30px;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding-bottom: 180px;
    iframe {
      width: 90vw;
    }

    div {
      width: 90vw;
      margin: 0 auto;
    }

    div:first-child {
      align-items: center;
      width: 90vw;
      height: 40vh;
    }
  }

  @media (max-width: 620px) {
    div:first-child {
      height: 20vh;
      margin-bottom: 20px;
    }

    p {
      text-align: center;
      font-size: 1em;
      line-height: 1.2em;
    }
  }
`;

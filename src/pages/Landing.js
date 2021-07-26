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
            width="600"
            height="451"
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

  div {
    height: 60vh;
    width: 40%;
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-top: 80px;
  }

  img {
    width: 250px;
    height: 96px;
    cursor: pointer;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;

    color: #1f2d3d;
  }
`;

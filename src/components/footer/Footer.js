import styled from "styled-components";
import footerLogo from "../../assets/images/footerLogo.png";
import ContactInfo from "./ContactInfo";

export default function Footer() {
  return (
    <Container>
      <div>
        <img src={footerLogo} />
      </div>
      <ContactInfo />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 296px;
  width: 100vw;

  background-color: #f2f2f1;

  margin-top: 120px;
  padding-top: 36px;

  & > div > img {
    width: 337px;
  }

  @media (max-width: 1200px) {
    & > div > img {
      width: 28vw;
    }
  }

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;

    & > div > img {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 870px) {
    height: 144px;
    padding-top: 11px;
    overflow: hidden;
    & > div > img {
      width: 200px;
      margin-bottom: 20px;
    }
  }
`;

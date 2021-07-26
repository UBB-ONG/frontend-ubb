import { useHistory } from "react-router-dom";
import styled from "styled-components";
import footerLogo from "../../assets/images/footerLogo.png";
import ContactInfo from "./ContactInfo";

export default function Footer({ fixed, noMargin, small }) {
  const history = useHistory();

  const goToHome = () => history.push("/");

  return (
    <Container fixed={fixed} noMargin={noMargin} small={small}>
      <div>
        <img src={footerLogo} onClick={goToHome} />
      </div>
      <ContactInfo />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: ${({ small }) => (small ? "200px" : "296px")};
  width: 100vw;

  background-color: #f2f2f1;

  margin-top: ${({ noMargin }) => (noMargin ? 0 : "120px")};
  padding-top: 36px;

  ${({ fixed }) =>
    fixed
      ? `
  position: fixed;
  bottom: 0;
  left: 0;
  `
      : ""}

  & > div > img {
    width: 337px;
    cursor: pointer;
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

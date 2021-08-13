import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import Menu from "./Menu";
import MobileMenuIcon from "./MobileMenuIcon";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container showMobileMenu={showMobileMenu}>
      <div>
        <img src={logo} alt="UBB" />

        <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {<MobileMenuIcon isOpen={showMobileMenu} />}
        </button>
      </div>
      <Menu setShowMobileMenu={setShowMobileMenu} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: ${({ showMobileMenu }) => (!showMobileMenu ? "116px" : "245px")};
  min-height: 116px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  overflow: hidden;

  background-color: #f2f2f1;

  padding: 0 164px;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  img {
    width: 117px;
    margin-right: 153px;
  }

  button {
    display: none;
    background-color: #f2f2f1;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 1150px) {
    nav {
      width: 35em;
    }
  }
  @media (max-width: 1120px) {
    nav {
      width: 30em;
    }
  }

  @media (max-width: 950px) {
    padding: 0 100px;
    justify-content: space-between;

    img {
      width: 117px;
      margin-right: 0;
    }

    button {
      display: block;
      svg {
        width: 40px;
        height: 40px;
      }
    }

    nav {
      display: flex;
      flex-direction: column;

      width: 150px;
      height: auto;

      margin-top: 40px;

      top: 70px;
      right: calc(50vw - 75px);

      a {
        margin-bottom: 15px;
        text-align: center;
      }
    }
  }

  @media (max-width: 550px) {
    padding: 0 50px;

    nav {
      top: 74px;
      right: calc(50vw - 75px);
    }
  }
`;

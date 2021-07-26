import styled from "styled-components";
import { AiOutlineMail as EmailIcon } from "react-icons/ai";
import {
  FaWhatsapp as WhatsappIcon,
  FaFacebookSquare as FacebookIcon,
  FaInstagramSquare as InstagramIcon,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <Container>
      <p>
        <span>Endereço</span>
        <br />
        <span>
          Rua Travessa Rio <br />
          Quati,08072-025
          <br /> São Paulo, SP
        </span>
      </p>
      <VerticalRow />
      <p>
        <span>
          Contato
          <br />
        </span>
        <a href="#" className="emailLink">
          <EmailIcon />
          email
        </a>
        <br />
        <a
          className="whatsappLink"
          href="https://api.whatsapp.com/send?phone=5511946026591&text=Ol%C3%A1.%20Gostaria%20de%20saber%20mais%20sobre%20a%20UBB!"
        >
          <WhatsappIcon />
          (11)94602-6591
        </a>
      </p>
      <VerticalRow />
      <p>
        <span>Redes sociais</span>
        <br />
        <span className="socialMediasHolder">
          <a href="#">
            <FacebookIcon color="#1F2D3D" />
          </a>

          <a href="#">
            <InstagramIcon color="#1F2D3D" />
          </a>
        </span>
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;

  & > p {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 138px;

    font-family: "Noto Sans JP", sans-serif;
    color: #1f2d3d;
    font-size: 18px;
    font-weight: 300;
    line-height: 25px;

    flex-shrink: 0;

    margin: 0 59px;
    span {
      text-align: left;
    }

    span:first-child {
      display: block;
      font-weight: 500;
      font-size: 24px;
      color: #1f2d3d;
      text-align: left;
      width: 100%;

      margin-bottom: 10px;
    }

    .emailLink,
    .whatsappLink {
      display: flex;
      justify-content: left;
      align-items: center;
      width: 100%;

      color: #1f2d3d;
      text-decoration: none;

      margin-bottom: 5px;

      svg {
        flex-shrink: 0;
        width: 24px;
        height: 24px;

        margin-right: 8px;
      }
    }

    .socialMediasHolder {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-top: 20px;

      svg {
        width: 37px;
        height: 37px;
      }
    }
  }

  & > p:last-child {
    width: 170px;

    span {
      text-align: center;
    }
  }

  @media (max-width: 1200px) {
    justify-content: space-between;
    width: 60vw;

    & > p {
      margin: 0;
      width: 13vw;
    }
  }

  @media (max-width: 1050px) {
    & > p {
      font-size: 15px;

      span:first-child {
        font-size: 23px;
      }
    }
  }

  @media (max-width: 870px) {
    width: 90vw;
    & > p {
      font-size: 9px;
      width: 22vw !important;
      line-height: 13px;

      span:first-child {
        font-size: 14px;
        margin-bottom: 5px;
      }
      span {
        width: 100%;
      }
    }

    a {
      & > svg {
        width: 13px !important;
      }
      margin-bottom: 0 !important;
    }

    & > p {
      .socialMediasHolder {
        svg {
          width: 22px !important;
        }
        margin-top: -4px;
      }
    }
  }
`;

const VerticalRow = styled.div`
  height: 259px;
  width: 2px;
  background-color: #ccc;
`;

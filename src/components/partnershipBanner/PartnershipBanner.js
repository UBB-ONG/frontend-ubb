import styled from "styled-components";
import partnershipBannerImage from "../../assets/images/partnershipBanner.png";
import Button from "../general/Button";

import { AiOutlineWhatsApp as WhatsappIcon } from "react-icons/ai";

export default function PartnershipBanner({ partnershipBannerRef }) {
  return (
    <Container ref={partnershipBannerRef}>
      <p>Faça parceria com a UBB</p>
      <Button bgColor="#47A634">
        <WhatsappIcon />
        PARTICIPE
      </Button>
      <div />
      <div />
      <img src={partnershipBannerImage} />
    </Container>
  );
}

const Container = styled.div`
  height: 322px;
  width: 100vw;
  overflow: hidden;
  position: relative;
  font-family: "Roboto", sans-serif;

  margin-top: 80px;

  p {
    font-size: 32px;
    font-weight: 700;
    color: #fff;

    position: absolute;
    z-index: 2;

    left: calc(50vw - 187px);
    top: 100px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 22px;

    position: absolute;
    z-index: 2;

    left: calc(50vw - 116px);
    top: 158px;

    svg {
      width: 35px;
      height: 35px;
      margin-right: 12px;
    }
  }

  img {
    width: 100vw;
    height: 322px;
    position: relative;
    z-index: -1;
  }

  div {
    width: 100vw;
    height: 322px;
    position: absolute;
    left: 0;
    right: 0;
    background: rgba(10, 58, 0, 0.7);
  }

  div:first-child {
    background: linear-gradient(
      180deg,
      rgba(8, 47, 0, 0.7) 0%,
      rgba(10, 58, 0, 0) 118.17%
    );
    transform: rotate(-180deg);
  }

  @media (max-width: 620px) {
    height: 167px;
    margin-top: 20px;

    p {
      font-size: 16px;
      left: calc(50vw - 92px);
      top: 60px;
    }

    button {
      font-size: 11px;

      left: calc(50vw - 60px);
      top: 95px;
      svg {
        width: 16px;
        height: 16px;

        margin-right: 5px;
      }
    }
  }
`;

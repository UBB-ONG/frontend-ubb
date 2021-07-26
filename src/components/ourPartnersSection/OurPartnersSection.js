import { useRef } from "react";
import styled from "styled-components";
import slideCarousel from "../general/utils/slideCarousel";
import getPartners from "./utils/getPartners";

import {
  FiChevronRight as RightArrow,
  FiChevronLeft as LeftArrow,
} from "react-icons/fi";

export default function OursPartersSection({ OursPartersSectionRef }) {
  const carouselRef = useRef();

  const partners = getPartners();

  return (
    <Container>
      <p ref={OursPartersSectionRef}>Nossos Parceiros</p>
      <button
        className="btn-right"
        onClick={() => slideCarousel(carouselRef, "right", 5, 5)}
      >
        <RightArrow color="#134563" />
      </button>
      <button
        className="btn-left"
        onClick={() => slideCarousel(carouselRef, "left", 5, 5)}
      >
        <LeftArrow color="#134563" />
      </button>
      <Carousel ref={carouselRef}>
        {partners.map((p) => (
          <li key={p.id}>
            <img src={p.image} />
          </li>
        ))}
      </Carousel>
    </Container>
  );
}

const Carousel = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 61vw;
  overflow: hidden;
  overflow-x: scroll;

  li {
    display: flex;
    justify-content: center;
    width: 144px;
    flex-shrink: 0;

    border-radius: 50%;
    overflow: hidden;
    margin: 0 10px;
    image {
      width: 144px;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media (max-width: 1050px) {
    width: 76vw;
    li {
      height: 75px;
      width: 75px;

      image {
        height: 75px;
        width: 75px;
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100vw;

  margin-top: 40px;
  position: relative;

  & > button {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    width: 40px;
    height: 50px;

    top: 125px;

    cursor: pointer;

    svg {
      width: 40px;
      height: 50px;
    }
  }

  .btn-right {
    position: absolute;
    right: calc(15vw);
  }

  .btn-left {
    position: absolute;
    left: calc(15vw);
  }

  & > p {
    font-family: "Noto sans", sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #1f2d3d;
    margin-bottom: 50px;
  }

  @media (max-width: 1050px) {
    & > p {
      font-size: 26px;
      margin-bottom: 30px;
    }
    & > button {
      top: 70px;
    }
    .btn-right {
      right: calc(5vw);
    }

    .btn-left {
      left: calc(5vw);
    }
  }

  @media (max-width: 600px) {
    & > p {
      font-size: 16px;
    }
    & > button {
      top: 60px;
    }
  }
`;

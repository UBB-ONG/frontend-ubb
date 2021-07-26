import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import slideCarousel from "../general/utils/slideCarousel";
import TestimonialCard from "./TestimonialCard";
import {
  FiChevronRight as RightArrow,
  FiChevronLeft as LeftArrow,
} from "react-icons/fi";
import * as testimonials from "../../services/api/testimonials.js";

export default function TestimonialsSection({ testimonialsSectionRef }) {
  const [testimonialsList, setTestimonialsList] = useState([]);
  const carouselRef = useRef();

  useEffect(() => {
    const promise = testimonials.list();
    promise.then((res) => {
      setTestimonialsList(res.data);
    });

    promise.catch((e) => {});
  }, []);

  return (
    <Container>
      <p ref={testimonialsSectionRef}>Depoimentos</p>
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
        {testimonialsList.map((t) => (
          <li key={t.id}>
            <TestimonialCard
              name={t.name}
              occupation={t.office}
              city={t.city}
              relation={t.relation}
              profilePicture={t.avatar_url}
              text={t.description}
            />
          </li>
        ))}
      </Carousel>
    </Container>
  );
}

const Carousel = styled.ul`
  display: flex;
  width: 90vw;
  overflow: hidden;
  overflow-x: scroll;

  li {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-shrink: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
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

    top: 157px;

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

  @media (max-width: 780px) {
    .btn-right {
      right: calc(8vw);
    }

    .btn-left {
      left: calc(8vw);
    }
  }
`;

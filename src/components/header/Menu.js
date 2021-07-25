import { useContext, useEffect } from "react";
import styled from "styled-components";
import SectionsContext from "../../contexts/SectionsContext";

export default function Menu() {
  const { componentRefs } = useContext(SectionsContext);
  useEffect(() => {});

  const {
    whoWeAreSectionRef,
    socialProgramsSectionRef,
    testimonialsSectionRef,
  } = componentRefs;

  function scrollComponentIntoView(component) {
    return component?.current.scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "smooth",
    });
  }

  return (
    <Container>
      <button onClick={() => scrollComponentIntoView(whoWeAreSectionRef)}>
        Quem Somos
      </button>
      <button onClick={() => scrollComponentIntoView(socialProgramsSectionRef)}>
        Programas
      </button>
      <button onClick={() => scrollComponentIntoView(testimonialsSectionRef)}>
        Depoimentos
      </button>
      <button onClick={() => scrollComponentIntoView()}>Parcerias</button>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 40em;
  position: absolute;
  top: 47px;
  right: 164px;

  button {
    display: inline-block !important;
    text-decoration: none;
    color: #000;
    font-family: "Noto Sans", sans-serif;
    font-size: 18px;
    font-weight: 400;
  }
`;

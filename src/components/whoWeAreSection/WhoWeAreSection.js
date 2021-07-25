import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import teamPicture from "../../assets/images/team.png";
import SectionsContext from "../../contexts/SectionsContext";

export default function WhoWeAreSection() {
  const { componentRefs, setComponentRefs } = useContext(SectionsContext);

  const whoWeAreSectionRef = useRef();

  useEffect(() => {
    setComponentRefs({ ...componentRefs, whoWeAreSectionRef });
  }, []);

  return (
    <Container ref={whoWeAreSectionRef} id="whoWeAre">
      <div>
        <p>Quem Somos</p>
        <p>
          Somos uma Ong que visa ajudar pessoa que estão em situações precárias
          e que precisam de ajuda situadas inicialmente na zona leste, mas
          pretendemos aumentar para fora.
          <br />
          <br />
          Queremos não apenas ajudar em materias, mas também na educação e no
          melhoramento interno pessoal delas.
        </p>
      </div>
      <img src={teamPicture} alt="Foto do time" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Noto Sans", sans-serif;
  color: #1f2d3d;

  margin-top: 53px;
  div {
    width: 470px;

    margin-right: 100px;

    p:first-child {
      font-size: 32px;
      font-weight: bold;
      line-height: 44px;
      margin-bottom: 54px;
    }

    p:last-child {
      font-size: 16px;
      line-height: 22px;
    }
  }

  img {
    width: 570px;
    border-radius: 20px;
  }

  @media (max-width: 1165px) {
    div {
      width: 40%;
    }

    img {
      width: 40%;
      border-radius: 20px;
    }
  }

  @media (max-width: 900px) {
    justify-content: space-around;

    div {
      margin-right: 10px;
    }
  }

  @media (max-width: 620px) {
    flex-direction: column-reverse;
    align-items: center;

    margin-top: 23px;

    div {
      width: 85vw;
      text-align: center;

      p:first-child {
        font-size: 16px;
        font-weight: bold;
        line-height: 22px;
        margin-bottom: 20px;
      }

      p:last-child {
        font-size: 12.5px;
        line-height: 17px;
      }
    }
    img {
      width: 72vw;
      margin-bottom: 25px;
    }
  }
`;

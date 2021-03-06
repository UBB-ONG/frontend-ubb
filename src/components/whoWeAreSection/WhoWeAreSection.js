import styled from "styled-components";
import teamPicture from "../../assets/images/team.png";

export default function WhoWeAreSection({ whoWeAreSectionRef }) {
  return (
    <Container ref={whoWeAreSectionRef} id="whoWeAre">
      <div>
        <p>Quem Somos</p>
        <p>
          A União Beneficente Brasileira em Assistência Social (UBB) é uma ong
          que visa ajudar pessoas na zona leste de São Paulo que estão em
          situação de vulnerabilidade e precisam de ajuda.
          <br />
          <br />
          Queremos ajudar não apenas com materiais, mas também com educação e
          desenvolvimento pessoal.
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

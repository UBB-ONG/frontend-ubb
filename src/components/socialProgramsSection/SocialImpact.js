import styled from "styled-components";
import ImpactedFamilies from "./ImpactedFamilies";

export default function SocialImpact() {
  return (
    <Container>
      <ImpactedFamilies />
      <ol>
        <li>Solicitação ao BPC - Loas</li>
        <li>Aposentadoria via INSS</li>
        <li>CAPS</li>
        <li>Casa de Recuperação</li>
        <li>Encaminhamento para UBS</li>
      </ol>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 84px;

  ol {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    list-style: disc;

    margin-top: 40px 0;

    li {
      font-family: "Roboto", sans-serif;
      font-size: 16px;

      margin: 0 40px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 950px) {
    ol {
      width: 60vw;
    }
  }

  @media (max-width: 520px) {
    margin-top: 0px;
    ol {
      width: 90vw;
      li {
        font-size: 9px;
      }
    }
  }
`;

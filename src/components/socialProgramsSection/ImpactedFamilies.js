import styled from "styled-components";
import { HiUserGroup } from "react-icons/hi";

export default function ImpactedFamilies() {
  return (
    <Container>
      <div>
        <HiUserGroup color="#47A634" size="80px" />
        <p>650</p>
      </div>
      <p>Famílias impactadas</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 30px !important;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 0px !important;
    margin-right: 40px;

    p {
      font-size: 53px;
      color: #47a634;
      margin-left: 33px;
      line-height: 36px;
      padding-top: 15px;
    }
  }

  p {
    font-size: 34px;
    line-height: 36px;
    color: #47a634;

    padding-top: 17px;
  }

  @media (max-width: 520px) {
    svg {
      width: 56px;
    }

    div {
      margin-right: 0;
      p {
        font-size: 42px;
        margin-left: 30px;
      }
    }

    p {
      font-size: 18px;
      padding-top: 0;
    }
  }
`;

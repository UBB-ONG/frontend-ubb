import styled from "styled-components";
import OperatingPlaceCard from "./OperatingPlaceCard";
import getDefaultOperatingPlaces from "./utils/getDefaultOperatingPlaces";

export default function WhereWeOperate() {
  const operatingPlaces = getDefaultOperatingPlaces();

  return (
    <Container>
      <p>Onde atuamos</p>
      <div>
        {operatingPlaces.map(({ id, imageUrl, title }) => (
          <OperatingPlaceCard
            key={id}
            imageUrl={imageUrl}
            title={title}
            size={"132px"}
          />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 349px;
  width: 100vw;

  background-color: #2c4b7a;

  margin: 70px 0;

  & > div {
    display: flex;
    justify-content: space-between;
    width: 510px;

    margin-top: 50px;
  }

  & > p {
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    margin-top: 35px;
  }

  @media (max-width: 600px) {
    div {
      width: 420px;
    }
  }

  @media (max-width: 460px) {
    height: 180px;
    & > p {
      font-size: 16px;
      margin-top: 22px;
    }

    & > div {
      width: 90vw;
      margin-top: 20px;
      img {
        width: 70px;
      }

      p {
        width: 105px;
        font-size: 10px;
        line-height: 12px;
        margin-top: 4px;
      }
    }
  }
`;

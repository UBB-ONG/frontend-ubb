import styled from "styled-components";
import Avatar from "../general/Avatar";

export default function TestimonialCard({
  name,
  occupation,
  city,
  relation,
  profilePicture,
  text,
}) {
  return (
    <Container>
      <Avatar src={profilePicture} size="200px" />
      <div>
        <p>“{text}”</p>
        <div>
          <p>{name}</p>
          <p>{occupation}</p>
          <p>{city}</p>
          <p>{relation}</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 55vw;
  min-height: 190px;

  img {
    margin-right: 40px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-family: "Roboto", sans-serif;
    & > p:first-child {
      font-style: italic;
      font-size: 16px;
      text-align: center;
    }

    div {
      p {
        font-size: 12px;
      }

      margin-top: 10px;
      padding-bottom: 20px;
    }
  }

  @media (max-width: 940px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 105px;
      margin-bottom: 18px;
      margin-right: 0;
    }

    & > div {
      justify-content: center;
      width: 66vw;
      max-width: 400px;
      align-items: center;

      & > p:first-child {
        font-size: 11px;
      }

      div {
        p {
          text-align: center;
          font-size: 9px;
          line-height: 10px;
        }
      }
    }
  }
`;

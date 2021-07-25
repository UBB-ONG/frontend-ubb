import styled from "styled-components";

export default function SocialProgramCard({ title, imageUrl, descripton }) {
  return (
    <Container>
      <div>
        <p>{title}</p>
        <img src={imageUrl} alt={title} />
      </div>
      <p>{descripton}</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 370px;
  width: 29vw;

  div {
    display: flex;
    flex-direction: column;
    height: 238px;

    border-radius: 20px;
    margin-bottom: 22px;

    overflow: hidden;

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 68px;
      background-color: #3b6db4;
      font-weight: bold;
      font-size: 26px;
      font-family: "Noto Sans", sans-serif;
      color: #fff;
    }

    img {
      width: 100%;
      height: 170px;
    }
  }

  p {
    width: 100%;

    text-align: left;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: #000;
  }

  @media (max-width: 950px) {
    width: 60vw;

    p {
      width: 55vw;
    }
  }

  @media (max-width: 520px) {
    width: 62vw;
    max-width: 600px;

    div {
      width: 100%;
      height: 168px;

      p {
        height: 48px;
        font-size: 13.5px;
      }

      img {
        height: 120px;
      }
    }
    p {
      width: 76vw;
      font-size: 12.5px;
      line-height: 14.5px;
    }
  }
`;

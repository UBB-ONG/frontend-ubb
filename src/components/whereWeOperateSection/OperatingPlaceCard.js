import styled from "styled-components";
import Avatar from "../general/Avatar";

export default function OperatingPlaceCard({ imageUrl, size, title }) {
  return (
    <Container>
      <Avatar src={imageUrl} size={size} alt={title} />
      <p>{title}</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    width: 200px;

    font-family: "Roboto", sans-serif;
    color: #fff;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    margin-top: 10px;
  }
`;

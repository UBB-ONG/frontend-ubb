import styled from "styled-components";

export default function Menu() {
  return (
    <Container>
      <a href="#">Quem Somos</a>
      <a href="#">Programas</a>
      <a href="#">Depoimentos</a>
      <a href="#">Parcerias</a>
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

  a {
    text-decoration: none;
    color: #000;
    font-family: "Noto Sans", sans-serif;
    font-size: 18px;
    font-weight: 400;
  }
`;

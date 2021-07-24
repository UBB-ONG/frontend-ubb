import styled from "styled-components";

export default function MobileMenuIcon({ isOpen }) {
  return (
    <Container isOpen={isOpen}>
      <Row className="firstRow" />
      <Row className="middleRow" />
      <Row className="lastRow" />
    </Container>
  );
}

const Row = styled.div`
  display: block;
  width: 100%;
  height: 2px;
  margin: 8px auto;
  transition: 0.3s;
  background: #000;
`;

const Container = styled.div`
  width: 30px;
  .firstRow {
    transform: ${(props) =>
      props.isOpen ? "translate3d(0,10px,0) rotate(45deg)" : ""};
  }
  .middleRow {
    opacity: ${(props) => (props.isOpen ? "0" : "1")};
  }
  .lastRow {
    transform: ${(props) =>
      props.isOpen ? "translate3d(0,-11px,0) rotate(-45deg)" : ""};
  }
`;

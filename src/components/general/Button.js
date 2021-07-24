import styled from "styled-components";

const Button = styled.button`
  display: block;
  width: 222px;
  height: 56px;

  font-family: "Roboto", sans-serif;
  font-size: 22px;

  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#000")};
  color: ${({ fontColor }) => (fontColor ? fontColor : "#fff")};

  border: none;
  border-radius: 15px;

  cursor: pointer;

  @media (max-width: 620px) {
    height: 29px;
    width: 117px;
    border-radius: 10px;

    font-size: 11.5px;
  }
`;

export default Button;

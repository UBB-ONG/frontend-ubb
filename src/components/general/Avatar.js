import styled from "styled-components";

const Avatar = styled.img`
  width: ${({ size }) => (size ? size : "40px")};
  height: ${({ size }) => (size ? size : "40px")};
  border-radius: 50%;
`;

export default Avatar;

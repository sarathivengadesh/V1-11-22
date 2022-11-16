import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${(props) => `${(props.height / 100) * 5}px`};
  .centerAlign {
    text-align: center;
  }
`;

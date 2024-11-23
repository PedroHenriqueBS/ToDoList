import styled from "styled-components";

export const Container = styled.header`
  background-color: #1C1C1C;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding: 55px 20px;
    font-size: 3.5rem;
    background-image: linear-gradient(90deg, lightgreen, green);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 360px) {
    h1 {
      text-align: center;
      font-size: 2.7rem;
    }
  }
`
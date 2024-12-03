import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding: 55px 20px;
    font-size: 3.5rem;
    background-image: ${({ theme }) => theme.degrade};
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
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    p {
      color: ${({ theme }) => theme.textCounter};
      font-size: 0.9rem;
      font-weight: bolder;
    }

    span {
      background-color: ${({ theme }) => theme.boxCounter};
      padding: 3px 6px;
      border-radius: 10px;
      font-size: 0.8rem;
      color: #FFF;
    }
  }

  .noneTasks {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      color: ${({ theme }) => theme.h1None};
      font-size: 12px;
      margin: auto;
    }
  }
`;

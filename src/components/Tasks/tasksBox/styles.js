import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 10px;
  margin: 5px 0;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img, span {
    background-color: transparent;
  }

  button, .remove {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
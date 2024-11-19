import styled from "styled-components";

export const Container = styled.div`
  background-color: #393939;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 10px;
  margin-top: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

  }

  button, .remove {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
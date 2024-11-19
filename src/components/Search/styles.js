import styled from "styled-components"

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  gap: 10px;

  input {
    width: calc(100% - 90px);
    height: 2.5rem;
    border-radius: 5px;
    border: none;
    background-color: #393939;
    padding-left: 20px;

  }

  button {
    padding: 0 1rem;
    border-radius: 5px;
    border: none;
    background-color: #0BA928;
    font-weight: bold;
    cursor: pointer;
    transition: .1s;

    &:active {
      box-shadow: 1px 1px 5px green;
    }
  }
`;
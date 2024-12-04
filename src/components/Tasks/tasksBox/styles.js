import styled from "styled-components";

export const Container = styled.div`
  background: ${({ isCheck }) => isCheck ? ({ theme }) => theme.inputCheck : ({ theme }) => theme.input};
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

  .text {
    text-decoration: ${({ isCheck }) => (isCheck ? "line-through" : "none")};
    color: ${({ isCheck }) => isCheck ? ({theme}) => theme.inputColorOpacity : ({theme}) => theme.inputColor};
  }

  .editText {
    padding: 3px 5px;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.inputColor};
  }

  img, span, div, button, .editText {
    background-color: transparent;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

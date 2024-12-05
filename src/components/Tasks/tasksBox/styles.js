import styled from "styled-components";

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isCheck",
})
.attrs((props) => ({
  "data-ischeck": props.isCheck ? props.isCheck.toString() : undefined,
}))
`
  background: ${( props ) => props.isCheck 
  ? ({ theme }) => theme.inputCheck 
  : ({ theme }) => theme.input};
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 10px;
  margin: 5px 0;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      margin-right: 10px;
      word-break: break-word; 
      overflow-wrap: break-word; 
    }
  }

  .text {
    text-decoration: ${( props ) => (props.isCheck ? "line-through" : "none")};
    color: ${( props ) => props.isCheck 
    ? ({theme}) => theme.inputColorOpacity 
    : ({theme}) => theme.inputColor};
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

  @media (max-width: 415px){
    .editor {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      input { width: 130px; }
      div { display: flex; }
    }
  }
`;

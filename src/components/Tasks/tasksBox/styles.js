import styled from "styled-components";

export const Container = styled.div`
  background: ${({isCheck}) => isCheck ? 'rgba(57, 57, 57, .3)' : 'rgba(57, 57, 57, 1)'};
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
    text-decoration: ${({isCheck}) => isCheck ? 'line-through' : 'none'};
    color: ${({isCheck}) => isCheck ? 'rgba(255, 255, 255, .4)' : '#fff'};
  }

  .editText{
    padding: 3px 5px; 
    border-radius: 5px;
    border: none;
    color: #fff;
  }

  img, span, div {
    background-color: transparent;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
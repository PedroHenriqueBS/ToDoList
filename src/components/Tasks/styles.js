import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 20px;

  .search {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    transform: translateY(-25px);
    background-color: transparent;

    input {
      width: 100%;
      height: 2.5rem;
      border-radius: 5px;
      border: none;
      background-color: ${({ theme }) => theme.input};
      padding: 0 20px;
      color: ${({ theme }) => theme.inputColor};
      text-overflow: ellipsis;  
    }

    input::placeholder {
      color: ${({ theme }) => theme.inputColor};
      opacity: 0.5;
    }

    .theme {
      background-color: transparent;
      padding: 0;
      border-radius: 0;

      img { background: transparent; }
      &:active { box-shadow: none; }
    }

    button {
      padding: 0 1rem;
      border-radius: 5px;
      border: none;
      background-color: #0BA928;
      font-weight: bold;
      cursor: pointer;
      transition: .1s;
      color: #fff;

      &:active { box-shadow: 1px 1px 5px green; }
    }
  }
`;
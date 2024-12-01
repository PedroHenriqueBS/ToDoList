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

    input {
      width: calc(100% - 90px);
      height: 2.5rem;
      border-radius: 5px;
      border: none;
      background-color: #393939;
      padding-left: 20px;
      color: #fff;
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

      &:active {
        box-shadow: 1px 1px 5px green;
      }
    }
  }
`;
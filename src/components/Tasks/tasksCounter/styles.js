import styled from "styled-components";

export const Container = styled.div`
  display: flex;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      gap: 10px;

      p { 
        color: #05E08C; 
        font-size: .9rem;
        font-weight: bolder;
      }

      span { 
        background-color: #535353;
        padding: 3px 6px;
        border-radius: 10px;
        font-size: .8rem;
      }
    }
`;
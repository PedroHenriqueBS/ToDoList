import React from "react";
import { Container } from "./styles";

export default function Search(){
  return(
    <Container>
      <input type="text" placeholder="Adicionar uma nova tarefa"/>
      <button>Submit</button>
    </Container>
  );
}
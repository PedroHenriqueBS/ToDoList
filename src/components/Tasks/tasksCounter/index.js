import React from "react";
import { Container } from "./styles";

export default function TasksCounter(){
  return(
    <Container>
      <div>
        <p>Tarefas criadas</p>
        <span>0</span>
      </div>
      <div>
        <p>Concluídas</p>
        <span>0 de 0</span>
      </div>
    </Container>
  );
}
"use client";

import React from "react";
import { Container } from "./styles";
import taskImgDark from '../../../assets/card-list.svg'
import taskImgLight from '../../../assets/card-list-light.svg'

export default function TasksCounter({ tasks, taskTotal}) {

  const totalConcluidas = tasks.reduce((acumulador, elementoAtual) => {
    const tasksCheck = acumulador + elementoAtual.complete

    if(tasksCheck === taskTotal){
      alert('PARABÉNS, você finalizou todas as tarefas!')
      setTimeout(() => {
        location.reload();
      }, 600);
    }
    
    return elementoAtual.complete > 0 ? tasksCheck : acumulador;
  }, 0);

  return (
    <Container>
      {tasks.length > 0 ? (
        <>
          <div>
            <p>Tarefas criadas</p>
            <span>{taskTotal}</span>
          </div>
          <div>
            <p>Concluídas</p>
            <span>
              {totalConcluidas} de {taskTotal}
            </span>
          </div>
        </>
      ) : (
        <div className="noneTasks">
          <img src={false ? taskImgDark : taskImgLight} alt={'card de tarefas'}/>
          <h1> Não há tarefas aqui, adicione uma nova!</h1>
        </div>
      )}
    </Container>
  );
}

"use client";

import React from "react";
import { Container } from "./styles";
import taskImg from '../../../assets/card-list.svg'

export default function TasksCounter({ tasks, taskTotal }) {

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
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
          }}>
          <img src={taskImg} alt={'card de tarefas'}/>
          <h1
            style={{
              color: "#d3d3d3",
              fontSize: "12px",
              margin: "auto",
            }}
          >
            Não há tarefas aqui, adicione uma nova!
          </h1>
        </div>
      )}
    </Container>
  );
}

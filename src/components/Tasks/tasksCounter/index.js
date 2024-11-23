"use client";

import React from "react";
import { Container } from "./styles";
import taskImg from '../../../assets/card-list.svg'

export default function TasksCounter({ tipo, taskTotal }) {
  const totalConcluidas = tipo.reduce((acumulador, elementoAtual) => {
    return elementoAtual.complete > 0
      ? acumulador + elementoAtual.complete : acumulador;
  }, 0);

  return (
    <Container>
      {tipo.length > 0 ? (
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

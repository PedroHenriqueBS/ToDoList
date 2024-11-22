"use client";

import React from "react";
import { Container } from "./styles";

export default function TasksCounter({ tipo, taskTotal }) {
  console.log(taskTotal)
  // Soma dos valores maiores que 0
  const totalConcluidas = tipo.reduce((acumulador, elementoAtual) => {
    return elementoAtual.complete > 0 ? acumulador + elementoAtual.complete : acumulador;
  }, 0);

  const totalCriadas = tipo.reduce((acumulador, elementoAtual) => elementoAtual.total, 0);

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
            <span>{totalConcluidas} de {taskTotal}</span>
          </div>
        </>
      ) : (
        <h1
          style={{
            color: "#d3d3d3",
            fontSize: "12px",
            margin: "auto",
          }}
        >
          Não há tarefas aqui, adicione uma nova!
        </h1>
      )}
    </Container>
  );
}

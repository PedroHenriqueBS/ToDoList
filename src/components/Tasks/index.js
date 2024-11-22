import React, { useState } from "react";
import { Container } from "./styles";

import TasksCounter from "./tasksCounter";
import TasksBox from "./tasksBox";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [total, setTotal] = useState(0);
  const [variavel, setVariavel] = useState(""); // Armazena o valor do input

  const handleChange = (event) => {
    setVariavel(event.target.value); // Atualiza o valor com o input
  };

  function handleCreated() {
    setTasks((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        complete: 0,
        check: false,
        text: variavel,
        deleted: false,
      }
    ],
    setTotal((prevState) => prevState + 1));
  }

  function handleCheck(taskId) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === taskId
          ? { ...task, check: !task.check }
          : task
      )
    );
  }

  function handleRemove(taskId) {
    setTasks((prevState) => {
      const newTasks = prevState.filter((task) => task.id !== taskId); // Remove a tarefa
      setTotal((prevState) => prevState - 1); // Atualiza o contador baseado no novo tamanho do array
      return newTasks;
    });
  }
  

  function handleComplete(id) {
    setTasks((prevState) => (
      prevState.map((task) => (
        task.id === id)
        ? {...task, complete: task.check ? task.complete + 1 : task.complete- 1}
        : task
        )   
      )
    )
  }

  return (
    <Container>
      <div className="search">
        <input
          type="text"
          placeholder="Adicionar uma nova tarefa"
          onChange={handleChange}
          value={variavel}
        />
        <button onClick={handleCreated}>Submit</button>
      </div>

      <TasksCounter tipo={tasks} taskTotal={total} />

      {tasks.map((item) => (
        <TasksBox
          key={item.id}
          onCheck={handleCheck}
          onRemove={handleRemove}
          onComplete={handleComplete}
          tasks={{
            id: item.id,
            complete: item.complete,
            check: item.check,
            text: item.text,
            delete: item.deleted,
          }}
        />
      ))}
    </Container>
  );
}

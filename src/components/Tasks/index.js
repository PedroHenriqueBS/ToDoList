import React, { useState, useRef } from "react";
import { Container } from "./styles";

import TasksCounter from "./tasksCounter";
import TasksBox from "./tasksBox";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [total, setTotal] = useState(0);
  const [variavel, setVariavel] = useState(""); 
  const inputRef = useRef(null);

  const handleCreated = () => {
    if (!variavel.trim()){
      alert('Adicione uma tarefa no espaço vazio!')
      return
    } setTasks((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          complete: 0,
          check: false,
          text: variavel,
          deleted: false,
        },
      ]),
      setTotal((prevState) => prevState + 1),
      setVariavel("") // Limpa o input após criar)

      if (inputRef.current) {
        inputRef.current.focus();
      }
  };

  const handleCheck = (taskId) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === taskId ? { ...task, check: !task.check } : task
      )
    );
  };

  const handleRemove = (taskId) => {
    setTasks((prevState) => {
      const newTasks = prevState.filter((task) => task.id !== taskId); // Remove a tarefa
      setTotal((prevState) => prevState - 1); // Atualiza o contador
      return newTasks;
    });
  };

  const handleComplete = (id) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id
          ? { ...task, complete: task.check ? task.complete + 1 : task.complete - 1, }
          : task
      )
    );
  };

  return (
    <Container>
      <div className="search">
        <input
          type="text"
          placeholder="Adicionar uma nova tarefa"
          onChange={event => setVariavel(event.target.value)}
          value={variavel}
          ref={inputRef}
          id="send"
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

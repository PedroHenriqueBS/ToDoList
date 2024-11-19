import React from "react";
import { Container } from "./styles";

import TasksBox from "../Tasks/tasksBox/index";
import TasksCounter from "./tasksCounter";

export default function Tasks(){
  return(
    <Container>
      <TasksCounter />
      <TasksBox />
    </Container>
  );
}
"use client";

import React from "react";
import { Container } from "./styles";
import circle from "../../../assets/circle.svg";
import circleCheck from "../../../assets/check-circle.svg";
import remove from "../../../assets/remove.svg";

export default function TasksBox(props) {
  return (
    <Container
      style={{
        background:
          props.tasks.check === true
            ? "rgba(57, 57, 57, .3)"
            : "rgba(57, 57, 57, 1)",
      }}
    >
      <div style={{ background: "transparent" }}>
        <button
          onClick={() => {
            props.onCheck(props.tasks.id), props.onComplete(props.tasks.id);
          }}
        >
          <img
            src={props.tasks.check ? circleCheck : circle}
            alt="button check"
          ></img>
        </button>
        <span
          style={{
            textDecoration:
              props.tasks.check === true ? "line-through" : "none",
            color:
              props.tasks.check === true ? "rgba(255, 255, 255, .4)" : "#fff",
          }}
        >
          {props.tasks.text}
        </span>
      </div>
      <button className="remove" onClick={() => props.onRemove(props.tasks.id)}>
        <img src={remove} alt="Remover tarefa"></img>
      </button>
    </Container>
  );
}

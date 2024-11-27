"use client";

import React, {useState} from "react";
import { Container } from "./styles";
import circle from "../../../assets/circle.svg";
import circleCheck from "../../../assets/check-circle.svg";
import remove from "../../../assets/remove.svg";
import edit from "../../../assets/edit.svg";
import save from "../../../assets/save.svg";
import cancel from "../../../assets/cancel.svg";

export default function TasksBox(props) {

  const [isEditing, setIsEditing] = useState(false); // Define se está em modo de edição
  const [newText, setNewText] = useState(props.tasks.text); // Texto temporário para edição

  const handleEdit = () => {
    setIsEditing(true); // Ativa o modo de edição
  };

  const handleSave = () => {
    props.onEdit(props.tasks.id, newText); // Salva a alteração
    setIsEditing(false); // Sai do modo de edição
  };

  const handleCancel = () => {
    setNewText(props.tasks.text); // Restaura o texto original
    setIsEditing(false); // Sai do modo de edição
  };

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
          {isEditing ? (
        <div>
          <input
            style={{padding: '3px 5px', borderRadius: '5px', border: 'none'}}
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)} // Atualiza o texto 
          />
          <button onClick={handleSave}>
            <img src={save} alt="Remover tarefa"></img>
          </button>
          <button onClick={handleCancel}>
            <img src={cancel} alt="Remover tarefa"></img>
          </button>
        </div>
      ) : (
        <span>{props.tasks.text}</span>
      )}
        </span>
      </div>
      <div>
        <button onClick={handleEdit}>
          <img src={edit} alt="Remover tarefa"></img>
        </button>
        <button className="remove" onClick={() => props.onRemove(props.tasks.id)}>
          <img src={remove} alt="Remover tarefa"></img>
        </button>
      </div>
    </Container>
  );
}

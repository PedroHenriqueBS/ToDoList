"use client";

import React, { useState } from "react";
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
    <Container isCheck={props.tasks.check}>
      <div>
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

        <span className="text">
          {isEditing ? (
            <div className="editor">
              <input
                className="editText"
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)} // Atualiza o texto
              />
              <div>
                <button onClick={handleSave}>
                  <img src={save} alt="icone para salvar tarefa"></img>
                </button>
                <button onClick={handleCancel}>
                  <img src={cancel} alt="icone para cancelar tarefa"></img>
                </button>
              </div>
            </div>
          ) : (
            <span>{props.tasks.text}</span>
          )}
        </span>
      </div>
      <div>
        <button onClick={handleEdit}>
          <img src={edit} alt="icone para editar tarefa"></img>
        </button>
        <button onClick={() => props.onRemove(props.tasks.id)}>
          <img src={remove} alt="icone para remover tarefa"></img>
        </button>
      </div>
    </Container>
  );
}

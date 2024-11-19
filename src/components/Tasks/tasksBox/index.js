import React from "react";
import { Container } from "./styles";
import circle from '../../../assets/circle.svg';
import circleCheck from '../../../assets/check-circle.svg';
import remove from '../../../assets/remove.svg'

export default function TasksBox(){
  return(
    <Container>
      <div>
        <button>
          <img src={circle} alt="ola"></img>
        </button>
        <span>Devocional</span>
      </div>
      <button className="remove">
        <img src={remove} alt="ola"></img>
      </button>
    </Container>
  );
}
import React from "react";
import { Container } from "./styles";
import Search from '../Search/index';

export default function Header() {
  return (
    <Container>
      <h1>TO DO LIST</h1>
      <Search />
    </Container>
  );
}

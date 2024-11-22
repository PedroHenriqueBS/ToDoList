import React from "react";
import { Container } from "./styles";

import Header from "../Header";
import Tasks from "../Tasks";

export default function Layout() {

  return (
    <Container>
      <Header />
      <Tasks />
    </Container>
  );
}

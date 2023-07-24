"use client";

import React from "react";

import {
  Calculadora_UserInput,
  Calculadora_BlocoInput,
  Legenda,
  Input,
} from "./Calculadora-style";

export default function Calculadora() {
  return (
    <Calculadora_UserInput>
      <Calculadora_BlocoInput>
        <Legenda>DIA</Legenda>
        <Input type="number" placeholder="DD" min="1" />
      </Calculadora_BlocoInput>
      <Calculadora_BlocoInput>
        <Legenda>MÊS</Legenda>
        <Input type="number" placeholder="MM" min="1" />
      </Calculadora_BlocoInput>
      <Calculadora_BlocoInput>
        <Legenda>ANO</Legenda>
        <Input type="number" placeholder="AA" min="1" />
      </Calculadora_BlocoInput>
    </Calculadora_UserInput>
  );
}

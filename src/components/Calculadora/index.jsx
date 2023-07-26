"use client";

import React from "react";
import Image from "next/image";
import Icone from "@/assets/images/icon-arrow.svg";

import {
  Calculadora_UserInput,
  Calculadora_BlocoInput,
  Legenda,
  Input,
  ContainerBotao,
  StyleBotao,
} from "./Calculadora-style";

export default function Calculadora() {
  return (
    <>
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
      <ContainerBotao>
        <StyleBotao>
          <Image src={Icone} alt="Botao de calcular"></Image>
        </StyleBotao>
      </ContainerBotao>
    </>
  );
}

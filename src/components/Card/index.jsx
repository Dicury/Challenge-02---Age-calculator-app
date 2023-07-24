"use client";

import React from "react";
import { Calculadora_Main, Calculadora_Card } from "./Card-style";

export default function Card({ children }) {
  return (
    <Calculadora_Main>
      <Calculadora_Card>{children}</Calculadora_Card>
    </Calculadora_Main>
  );
}

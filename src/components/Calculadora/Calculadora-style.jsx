"use client";

import { styled } from "styled-components";

export const Legenda = styled.p`
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 3px;
  color: var(--smokey-grey);
`;

export const Input = styled.input`
  height: 55px;
  width: 100%;
  padding-left: 10px;
  font-size: 32px;
  font-weight: 700;
  display: flex;
  border-radius: 5px;
  border: 1px solid var(--light-grey);
`;

export const Calculadora_UserInput = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: space-between;
`;

export const Calculadora_BlocoInput = styled.div`
  display: flex;
  flex-direction: column;
`;

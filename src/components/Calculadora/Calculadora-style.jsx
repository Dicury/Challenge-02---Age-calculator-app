"use client";

import { styled } from "styled-components";

export const Calculadora_UserInput = styled.div`
  display: flex;
  width: auto;
  height: 35%;
  gap: 1rem;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-grey);

  @media (min-width: 769px) {
    height: 20%;
    width: 90%;
    padding-right: 10%;
  }
`;

export const Calculadora_BlocoInput = styled.div``;

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
  border-radius: 5px;
  border: 1px solid var(--light-grey);

  @media (min-width: 769px) {
    width: 80%;
  }
`;

export const ContainerBotao = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 70px;

  @media (min-width: 769px) {
    margin-bottom: 60px;
  }
`;

export const StyleBotao = styled.button`
  position: absolute;
  top: -35px;
  background-color: var(--purple);
  height: 70px;
  width: 70px;
  border: none;
  border-radius: 100px;

  @media (min-width: 769px) {
    height: 80px;
    width: 80px;
    top: -40px;
    right: 0;
  }
`;

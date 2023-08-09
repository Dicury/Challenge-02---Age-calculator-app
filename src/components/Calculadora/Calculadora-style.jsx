"use client";

import { styled } from "styled-components";

export const Calculadora_Form = styled.form`
  display: flex;
  flex-wrap: nowrap;
  width: auto;
  height: 35%;
  gap: 1rem;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-grey);
  box-sizing: border-box;

  @media (min-width: 769px) {
    height: auto;
    padding-bottom: 1em;
    width: 90%;
    padding-right: 10%;
  }
`;

export const Calculadora_BlocoInput = styled.div`
  width: 30%;
`;

export const Legenda = styled.p`
  display: flex;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 3px;
  color: ${(props) => (props.styleError ? "#ff5757" : "#716f6f")};
`;

export const Input = styled.input`
  display: block;
  height: 55px;
  width: 100%;
  padding-left: 10px;
  font-size: 32px;
  font-weight: 700;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.styleError ? "#ff5757" : "#dbdbdb")};
  /* border: 1px solid var(--light-grey); */

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:hover {
    border: 2px solid var(--purple);
  }

  &:focus {
    border: 2px solid var(--purple);
    outline: none;
  }

  @media (min-width: 769px) {
    width: 80%;
  }
`;

export const MensagemErro = styled.label`
  color: var(--light-red);
  font-size: 12px;
  font-style: italic;
  margin-bottom: 10px;
`;

export const ContainerBotao = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 70px;

  @media (min-width: 769px) {
    margin-bottom: 60px;
  }

  @media (min-width: 1500px) {
    margin-bottom: 30px;
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
  transition: 0.5s;

  &:hover {
    background-color: var(--off-black);
  }

  @media (min-width: 769px) {
    height: 80px;
    width: 80px;
    top: -40px;
    right: 0;
  }
`;

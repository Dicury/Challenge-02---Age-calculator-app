"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Icone from "@/assets/images/icon-arrow.svg";

import {
  Calculadora_Form,
  Calculadora_BlocoInput,
  Legenda,
  Input,
  ContainerBotao,
  StyleBotao,
  MensagemErro,
} from "./Calculadora-style";
import Data from "../Data";

export default function Calculadora() {
  const DataAtual = new Date();
  const [diaPorMes, setDiaPorMes] = useState([
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ]);
  const [IdadeDias, setIdadeDias] = useState("--");
  const [IdadeMes, setIdadeMes] = useState("--");
  const [IdadeAnos, setIdadeAnos] = useState("--");

  const form = useForm();
  const { register, handleSubmit, formState, getValues } = form;
  const { errors } = formState;

  function tipoDoAno() {
    if (
      (0 === getValues("ano") % 4 && 0 !== getValues("ano") % 100) ||
      0 === getValues("ano") % 400
    ) {
      setDiaPorMes((antigoDiaPorMes) => {
        const novoDiaPorMes = [...antigoDiaPorMes];
        novoDiaPorMes[1] = 29;
        return novoDiaPorMes;
      });
    } else {
      setDiaPorMes((antigoDiaPorMes) => {
        const novoDiaPorMes = [...antigoDiaPorMes];
        novoDiaPorMes[1] = 28;
        return novoDiaPorMes;
      });
    }
  }

  function onSubmit(data) {
    let nascimento = `${data.mes}/${data.dia}/${data.ano}`;
    let nascimentoObj = new Date(nascimento);
    let diferençaIdadeMilisegundos = Date.now() - nascimentoObj;
    let idadeData = new Date(diferençaIdadeMilisegundos);
    console.log(idadeData, idadeData.getDate());
    setIdadeAnos(idadeData.getUTCFullYear() - 1970);
    setIdadeMes(idadeData.getUTCMonth());
    setIdadeDias(idadeData.getUTCDate() - 1);
  }

  return (
    <>
      <Calculadora_Form
        id="calculadora"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Calculadora_BlocoInput>
          <Legenda styleError={errors.dia}>DIA</Legenda>
          <Input
            styleError={errors.dia}
            type="number"
            placeholder="DD"
            {...register("dia", {
              valueAsNumber: true,
              validate: (fieldValue) => {
                return (
                  fieldValue <= diaPorMes[getValues("mes") - 1] ||
                  "dia inexistente"
                );
              },
              min: {
                value: 1,
                message: "data inválida",
              },
              max: {
                value: 31,
                message: "data inválida",
              },
              required: "Campo necessário",
            })}
          />
          <MensagemErro>{errors.dia?.message}</MensagemErro>
        </Calculadora_BlocoInput>
        <Calculadora_BlocoInput>
          <Legenda styleError={errors.mes}>MÊS</Legenda>
          <Input
            styleError={errors.mes}
            type="number"
            placeholder="MM"
            {...register("mes", {
              valueAsNumber: true,
              min: {
                value: 1,
                message: "data inválida",
              },
              max: {
                value: 12,
                message: "data inválida",
              },
              required: "Campo necessário",
            })}
          />
          <MensagemErro>{errors.mes?.message}</MensagemErro>
        </Calculadora_BlocoInput>
        <Calculadora_BlocoInput>
          <Legenda styleError={errors.ano}>ANO</Legenda>
          <Input
            styleError={errors.ano}
            type="number"
            placeholder="AA"
            {...register("ano", {
              valueAsNumber: true,
              validate: () => tipoDoAno(),
              min: {
                value: 1900,
                message: "data inválida",
              },
              max: {
                value: DataAtual.getFullYear(),
                message: "data inválida",
              },
              required: "Campo necessário",
            })}
          />
          <MensagemErro>{errors.ano?.message}</MensagemErro>
        </Calculadora_BlocoInput>
      </Calculadora_Form>
      <ContainerBotao>
        <StyleBotao form="calculadora">
          <Image src={Icone} alt="Botao de calcular"></Image>
        </StyleBotao>
      </ContainerBotao>
      <Data dia={IdadeDias} mes={IdadeMes} ano={IdadeAnos} />
    </>
  );
}

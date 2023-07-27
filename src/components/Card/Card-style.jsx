import { styled } from "styled-components";

export const Calculadora_Card = styled.div`
  background-color: var(--white);
  height: 50vh;
  width: 90vw;
  padding: 1.5rem;
  margin-top: 10vh;
  border-radius: 30px 30px 100px 30px;

  @media (min-width: 769px) {
    height: 70vh;
    width: 60vw;
    padding: 3rem;
    margin-top: 0;
    border-radius: 30px 30px 200px 30px;
  }
`;

export const Calculadora_Main = styled.main`
  display: flex;
  justify-content: center;
  height: 100vh;

  @media (min-width: 769px) {
    align-items: center;
    justify-content: center;
  }
`;

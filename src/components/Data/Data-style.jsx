import { styled } from "styled-components";

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DataLegenda = styled.p`
  font-weight: 800;
  font-size: clamp(3rem, 8vw, 8vw);
  line-height: 3.5rem;

  @media (min-width: 769px) {
    line-height: 8vw;
    font-size: clamp(2rem, 7vw, 8vw);
  }
`;

export const DataConta = styled.span`
  color: var(--purple);
`;

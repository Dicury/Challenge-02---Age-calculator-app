import React from "react";

import { DataContainer, DataLegenda, DataConta } from "./Data-style";

export default function Data({ dia, mes, ano }) {
  return (
    <DataContainer>
      <DataLegenda>
        <DataConta>{ano} </DataConta>Anos
      </DataLegenda>
      <DataLegenda>
        <DataConta>{mes} </DataConta>Meses
      </DataLegenda>
      <DataLegenda>
        <DataConta>{dia} </DataConta>Dias
      </DataLegenda>
    </DataContainer>
  );
}

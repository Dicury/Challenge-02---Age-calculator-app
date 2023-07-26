import React from "react";

import { DataContainer, DataLegenda, DataConta } from "./Data-style";

export default function Data() {
  return (
    <DataContainer>
      <DataLegenda>
        <DataConta>24 </DataConta>Anos
      </DataLegenda>
      <DataLegenda>
        <DataConta>0 </DataConta>Meses
      </DataLegenda>
      <DataLegenda>
        <DataConta>1 </DataConta>Dias
      </DataLegenda>
    </DataContainer>
  );
}

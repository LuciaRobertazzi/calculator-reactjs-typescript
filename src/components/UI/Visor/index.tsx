import React from "react";
import { VisorComponent, Text } from "./styles";
interface VisorInterface {
  currentValue: string;
  previousValue: string;
  operator: string;
}
const Visor = ({ currentValue, previousValue, operator }: VisorInterface) => {
  return (
    <VisorComponent>
      {previousValue && currentValue === "" && (
        <>
          <Text>{previousValue}</Text>
          {operator && <Text dangerouslySetInnerHTML={{ __html: `${operator}` }}/>}
        </>
      )}
      <Text currentValue>{currentValue}</Text>
    </VisorComponent>
  );
};

export default Visor;

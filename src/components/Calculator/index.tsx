import React from "react";
import Container from "./styles";
import Visor from "../UI/Visor";
import ActionButton from "../UI/ActionButton";
import contentArray from "../../constants/content";

const Calculator = () => {
  return (
    <Container general>
      <Visor currentValue="123" previousValue="123" operator="+" />
      <Container buttons>
        {contentArray.map(
          (row: {
            row: number;
            content: {
              type: "number" | "operation";
              value: string;
              operation:
                | "plus"
                | "minus"
                | "multiply"
                | "divide"
                | "delete"
                | "clear"
                | "calculate"
                | "number";
            }[];
          }) => (
            <Container key={row.row}>
              {row.content.map((button) => (
                <ActionButton
                  key={button.value}
                  buttonType={button.type}
                  value={button.value}
                  onClick={() => console.log(button.operation)}
                />
              ))}
            </Container>
          )
        )}
      </Container>
    </Container>
  );
};

export default Calculator;

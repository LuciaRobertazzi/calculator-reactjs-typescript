import React from "react";
import ActionButton from "./components/UI/ActionButton";
import Visor from "./components/UI/Visor";
import "./App.css";
import contentArray from "./constants/content";

function App() {
  return (
    <div className="App">
      <div className="calculatorComponent">
        <Visor currentValue="123" previousValue="123" operator="+" />
        <div className="buttonsContainer">
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
              <div key={row.row} className="row">
                {row.content.map((button) => (
                  <ActionButton
                    key={button.value}
                    buttonType={button.type}
                    value={button.value}
                    onClick={() => console.log(button.operation)}
                  />
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

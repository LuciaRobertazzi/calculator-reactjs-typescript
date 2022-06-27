import React, { useReducer } from "react";
import Container from "./styles";
import Visor from "../UI/Visor";
import ActionButton from "../UI/ActionButton";
import contentArray from "../../constants/content";

type operationsType =
  | "plus"
  | "minus"
  | "multiply"
  | "divide"
  | "delete"
  | "clear"
  | "calculate"
  | "number";

interface stateInterface {
  currentValue: string;
  previousValue: string;
  operator:
    | {
        value: string;
        type: operationsType;
      }
    | {};
}

const calculateFunction = ({
  currentValue,
  previousValue,
  operator,
}: { currentValue: string;
  previousValue: string;
  operator:{
        value: string;
        type: operationsType;
      }}): stateInterface => {
        console.log("Vainilla");
        
  const chooseOperation: {
    plus: stateInterface;
    clear: stateInterface;
    calculate: stateInterface;
    minus: stateInterface;
    multiply: stateInterface;
    divide: stateInterface;
    delete: stateInterface;
    number: stateInterface;
  } = {
    plus: {
      currentValue: `${previousValue + currentValue}`,
      previousValue: "",
      operator,
    },
    clear: {
      currentValue: "",
      previousValue: "",
      operator: {},
    },
    calculate: {
      currentValue: "",
      previousValue: "",
      operator: {},
    },
    minus: {
      currentValue: "",
      previousValue: "",
      operator,
    },
    multiply: {
      currentValue: "",
      previousValue: "",
      operator,
    },
    divide: {
      currentValue: "",
      previousValue: "",
      operator,
    },
    delete: {
      currentValue: "",
      previousValue: "",
      operator,
    },
    number: {
      currentValue: "",
      previousValue: "",
      operator,
    },
  };
  console.log(operator?.type);

  return operator?.type !== undefined ? chooseOperation[operator.type] : {currentValue, previousValue, operator};
  // return {currentValue, previousValue, operator};

};

const manageCalculator: (
  state: {
    currentValue: string;
    previousValue: string;
    operator: {
      value: string;
      type: operationsType;
    };
  },
  {
    type,
    payload,
  }: {
    type: "number" | "operation";
    payload:
      | {
          value: string;
          type: operationsType;
        }
      | string;
  }
) => any = (state, { type, payload }) => {
  const actions: {
    number: stateInterface;
    operation: stateInterface;
  } = {
    number: { ...state, currentValue: `${state.currentValue}${payload}` },
    operation: calculateFunction({
      ...state,
      operator: payload as {
        value: string;
        type: operationsType;
      }
    }),
  };
  console.log(type);
  
  return actions[type];
};

const Calculator = () => {
  const [{ currentValue, previousValue, operator }, dispatch] = useReducer(
    manageCalculator,
    {
      currentValue: "",
      previousValue: "",
      operator: {},
    }
  );
React.useEffect(()=>{
  console.log("chocolate", { currentValue, previousValue, operator });
  
},[currentValue, previousValue, operator])
  return (
    <Container general>
      <Visor
        currentValue={currentValue}
        previousValue={previousValue}
        operator={operator?.value || ""}
      />
      <Container buttons>
        {contentArray.map(
          (row: {
            row: number;
            content: {
              type: "number" | "operation";
              value: string;
              operation: operationsType;
            }[];
          }) => (
            <Container key={row.row}>
              {row.content.map((button) => (
                <ActionButton
                  key={button.value}
                  buttonType={button.type}
                  value={button.value}
                  onClick={() =>
                    dispatch({
                      type: button.type,
                      payload:
                        button.type === "operation"
                          ? { value: button.value, type: button.operation }
                          : button.value,
                    })
                  }
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

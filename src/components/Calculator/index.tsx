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

// type calculateOperatorType = Omit<operationsType, "number" | "calculate">;

const calculateFunction = ({
  currentValue,
  previousValue,
  operator,
}: {
  currentValue: string;
  previousValue: string;
  operator: {
    value: string;
    type: operationsType;
  };
}): stateInterface => {
  const chooseOperation: {
    plus: stateInterface;
    clear: stateInterface;
    minus: stateInterface;
    multiply: stateInterface;
    divide: stateInterface;
  } = {
    plus: {
      currentValue: `${
        parseInt(previousValue, 10) + parseInt(currentValue, 10)
      }`,
      previousValue: "",
      operator: {},
    },
    clear: {
      currentValue: "0",
      previousValue: "",
      operator: {},
    },
    minus: {
      currentValue: `${
        parseInt(previousValue, 10) - parseInt(currentValue, 10)
      }`,
      previousValue: "",
      operator,
    },
    multiply: {
      currentValue: `${
        parseInt(previousValue, 10) * parseInt(currentValue, 10)
      }`,
      previousValue: "",
      operator,
    },
    divide: {
      currentValue: `${
        parseInt(previousValue, 10) / parseInt(currentValue, 10)
      }`,
      previousValue: "",
      operator,
    },
  };
  // if (operator.type !== undefined && currentValue && previousValue ) {

  //   return chooseOperation[operator.type as "plus" | "clear" | "minus" | "multiply" | "divide"]
  // }
  // if (operator.type !== undefined && operator.type === "clear") {

  //   return chooseOperation[operator.type as "plus" | "clear" | "minus" | "multiply" | "divide"]
  // }
  // return { currentValue, previousValue, operator }
  return (operator?.type !== undefined && currentValue && previousValue) ||
    operator.type === "clear"
    ? // temporary solution until type correctly
      chooseOperation[
        operator.type as "plus" | "clear" | "minus" | "multiply" | "divide"
      ]
    : { currentValue, previousValue, operator };
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
  }:
    | {
        type: "number";
        payload: string;
      }
    | {
        type: "operation";
        payload: {
          value: string;
          type: operationsType;
        };
      }
) => any = (state, { type, payload }) => {
  const actions: {
    number: stateInterface;
    operation: stateInterface;
  } = {
    number: {
      ...state,
      currentValue:
        state.currentValue === "0"
          ? `${payload !== "0" ? payload : "0"}`
          : `${state.currentValue}${payload}`,
    },
    operation:
      typeof payload === "object" &&
      (payload?.type === "clear" || payload?.type === "calculate")
        ? calculateFunction({ ...state, operator: payload })
        : {
            previousValue: `${
              state.previousValue === "" && state.currentValue !== ""
                ? state.currentValue
                : state.previousValue
            }`,
            currentValue: "",
            operator: payload,
          },
  };

  return type === "operation" && payload.type === "calculate"
    ? calculateFunction(state)
    : actions[type];
};

const Calculator = () => {
  const [{ currentValue, previousValue, operator }, dispatch] = useReducer(
    manageCalculator,
    {
      currentValue: "0",
      previousValue: "",
      operator: {},
    }
  );

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
                  buttonType={
                    button.operation === "clear" ? "number" : button.type
                  }
                  value={button.value}
                  onClick={() =>
                    dispatch(
                      button.type === "number"
                        ? {
                            type: "number",
                            payload: button.value,
                          }
                        : {
                            type: "operation",
                            payload: {
                              type: button.operation,
                              value: button.value,
                            },
                          }
                    )
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

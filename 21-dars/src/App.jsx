import { useCallback, useMemo, useState } from "react";
import { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.INC:
      state.result = +state.firstInputValue + +state.secondInputValue;
      break;
    case TYPES.DEC:
      state.result = +state.firstInputValue - +state.secondInputValue;
      break;
    case TYPES.FIRST_INPUT:
      state.firstInputValue = action.payload;
      break;
    case TYPES.SECOND_INPUT:
      state.secondInputValue = action.payload;
      break;
    case TYPES.CLEAR:
      state.firstInputValue = "";
      state.secondInputValue = "";
      break;
    default:
      break;
  }
  return { ...state };
};

const TYPES = {
  INC: "INC",
  DEC: "DEC",
  MUL: "MUL",
  DIV: "DIV",
  FIRST_INPUT: "FIRST_INPUT",
  SECOND_INPUT: "SECOND_INPUT",
  CLEAR: "CLEAR",
};

function App() {
  // const [count, setCount] = useState(0);
  // const [count10, setCount10] = useState(0);
  // // const handleSubmit = useCallback(() => {});
  // const hand = useMemo(() => {
  //   for (let i = 0; i < 1000000000; i++) {
  //     // og'ir jarayon
  //   }
  //   return "hello world";
  // }, [count10]);

  // -------------------------------------
  const [state, setState] = useReducer(reducer, {
    firstInputValue: "",
    secondInputValue: "",
    result: "",
  });
  const calculate = (type) => {
    setState({ type });
    setState({ type: TYPE.CLEAR });
  };

  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <br />
      <br />
      <h1>{count10}</h1>
      <button onClick={() => setCount10((count) => count + 1)}>+</button> */}
      <input
        type="number"
        value={state.firstInputValue}
        onChange={(e) => {
          setState({
            type: TYPES.FIRST_INPUT,
            payload: e.target.value
              ? Number(e.target.validity)
              : e.target.value,
          });
        }}
      />
      <input
        type="number"
        value={state.secondInputValue}
        onChange={(e) => {
          setReducess({
            type: TYPES.SECOND_INPUT,
            payload: e.target.value
              ? Number(e.target.validity)
              : e.target.value,
          });
        }}
      />
      <button onClick={() => calculate(TYPES.INC)}>+</button>
      <button onClick={() => calculate(TYPES.DEC)}>-</button>
      <button onClick={() => calculate(TYPES.MUL)}>*</button>
      <button onClick={() => calculate(TYPES.DIV)}>/</button>

      <h1>{state.result}</h1>
    </>
  );
}

export default App;

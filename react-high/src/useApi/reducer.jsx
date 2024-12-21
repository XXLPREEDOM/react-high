import React, { useReducer, useState } from "react";
import Card from "../HoC/card";

/**
 * 对 action 封装，使得对数据的修改都可控
 */
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("unknow action");
  }
}

const initialState = { count: 0 };
export default function Reducer() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>

      {/* 会出现此种不可预测的情况 导致报错 */}
      <button onClick={() => dispatch({ type: "known" })}>'{}'</button>
    </div>
  );
}

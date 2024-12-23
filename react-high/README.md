# React 高级

## Hooks

### useReducer

问题代码

```jsx
import React, { useState } from "react";
import Card from "../HoC/card";
export default function Reducer() {
  const [count, setCount] = useState(0);
  // 问题在于
  // count可以是任意值，会导致在jsx中使用时，或者有其他运算情况时，会出现不可预测的值

  // 为解决此问题，出现 reducer，让数据变得可预测
  return (
    <Card title={"title"}>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>

      {/* 会出现此种不可预测的情况 导致报错 */}
      <button onClick={() => setCount({})}>'{}'</button>
    </Card>
  );
}

```

reducer 解决的问题：

- 让数据的变化变为可预测

```jsx
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
    <Card title={"title"}>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>

      {/* 会出现此种不可预测的情况 导致报错 */}
      <button onClick={() => dispatch({ type: "known" })}>'{}'</button>
    </Card>
  );
}

```

## HoC


## 渲染优化

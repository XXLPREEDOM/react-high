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

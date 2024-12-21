import React, { useEffect, useState } from "react";
import { createStore } from "./src/data";
import { actionType, reducer } from "./src/reducer";

// 用户定义的初始化数据
export const initialData = {
  count: 0,
};

const storeData = createStore(initialData, reducer);

export default function () {
  // 搭配 reducer 使用
  const [count, setCount] = useState(storeData.getState().count);
  useEffect(() => {
    storeData.subscribe(() => {
      const currData = storeData.getState();
      console.log("sbuscribe", currData);
      //   setCount(count);  // 产生闭包陷阱
      setCount(currData.count);
    });
  }, []);
  return (
    <div>
      <h2>my redux</h2>
      <div>count值为：{count}</div>
      <button onClick={() => storeData.dispatch(actionType.increment)}>
        plus1
      </button>
      <button onClick={() => storeData.dispatch(actionType.reset100)}>
        reset
      </button>
    </div>
  );
}

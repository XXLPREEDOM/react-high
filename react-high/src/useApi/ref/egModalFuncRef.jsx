import React, { forwardRef, useImperativeHandle, useState } from "react";
function Modal(props, ref) {
  const [visible, setVisible] = useState(true);

  // useImperativeHandle 类似vue的expose，在外部组件通过 ref 获取此组件的属性或方法
  // 将需要暴露的方法包装成对象 转发出去
  useImperativeHandle(ref, () => ({
    setVisible,
  }));

  return (
    <div
      style={{
        display: visible ? "block" : "none",
        width: "200px",
        height: "100px",
        background: "pink",
        position: "relative",
      }}
    >
      <span
        onClick={() => setVisible(false)}
        style={{
          position: "absolute",
          right: "4px",
          top: "0",
          cursor: "pointer",
        }}
      >
        X
      </span>
    </div>
  );
}
const FuncModal = forwardRef(Modal);
export default FuncModal;

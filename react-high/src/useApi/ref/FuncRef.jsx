import React, { useRef } from "react";
import FuncModal from "./egModalFuncRef";

export default function FuncRef() {
  const inputRef = useRef(null);
  const modalFuncRef = useRef(null);

  const focus = () => {
    console.log('inputRef', inputRef);
    inputRef.current.focus()
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focus}>focus</button>
        <br></br>
      <button onClick={() => modalFuncRef.current.setVisible(true)}>openModal</button>
      <button onClick={() => modalFuncRef.current.setVisible(false)}>closeModal</button>
      <FuncModal ref={modalFuncRef} />
    </div>
  );
}

import React, { useRef } from "react";

const UseRef2 = () => {
  const input = useRef();

  const focusInput = () => {
    console.log(input.current);
    console.log(document.querySelector(".input"));

    input.current.focus();
  };

  return (
    <>
      <input className="input" type="text" ref={input} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

export default UseRef2;

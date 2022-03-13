import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const UseRef1 = () => {
  const [inputValue, setInputValue] = useState("");
  //   const [count, setCount] = useState(0);
  const count = useRef(0);

  const increment = () => {
    console.log(count.current);
    count.current = count.current + 1;
  };

  useEffect(() => {
    // setCount((c) => c + 1);
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {count.current}
      <h1 onClick={increment}>Render Count: {count.current}</h1>
    </>
  );
};

export default UseRef1;

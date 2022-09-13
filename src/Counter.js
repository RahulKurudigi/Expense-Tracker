import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("unmounted");
    };
  }, [count]);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div style={{ color: "white" }}>{count} </div>

      <button onClick={countHandler}>Increament</button>
    </div>
  );
};

export default Counter;

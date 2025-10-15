import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
    
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
    <center>

      <h1 className="text-2xl font-bold mb-4 font-sans ">Counter:{count}</h1>
      <button
        onClick={increment}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
        >
        Increment
      </button>
      &nbsp; &nbsp;
      <button
        onClick={decrement}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
      >
        Decrement
      </button>
      </center>
    </>
  );
};

export default Counter;

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
    
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
    <center>


      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
      <button
        onClick={increment}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
        >
        Increment
      </button>
          </center>
    </>
  );
};

export default Counter;

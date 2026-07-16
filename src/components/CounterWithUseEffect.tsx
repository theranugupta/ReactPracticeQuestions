import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect( () =>{
    setCount(count=> count + 2) ;
      console.log('Use Effect Hook Function'+ " "+count);
  },[]);

  const increment = () => {
   setCount( count + 1) ;
    console.log('Increment Function'+ " "+count);
  };


  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      
    </div>
  );
}

export default Counter;


//In console: Use Effect Hook Function 0
//In UI: Counter: 2
// Render #1
// -----------
// count = 0
// ↓
// UI: Counter: 0

// Effect runs
// -----------
// setCount(count => count + 2)   // schedules update
// console.log(count)             // 0

// React re-renders
// ----------------
// count = 2
// UI: Counter: 2
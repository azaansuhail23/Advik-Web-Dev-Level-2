/*  Note : Why Hooks ?
function App(){
  let count=0;

  function Increment(){
    count=count+1;
    console.log(count);
  }

  return (
    <>
    <h1> Counter value: {count} </h1>

    <button onClick={Increment}>Increment</button>
    </>
  )
}

export default App;

/* 
0 --Click - 1 
1 -- Click --2
2 -- Click --3
 */

// Learn : The problem is the count value is not changing on the screen (UI) but the value of count is changing in the console.

// Note: You need hooks that will take care in the change in the UI/update the screen. *


import { useState } from "react";

function App() {
  let[count,setCount]=useState(0);

  function Increment() {
    count = count + 1;
    setCount(count);
    console.log(count);
  }

  function Decrement() {
    count = count - 1;
    setCount(count);
    console.log(count);
  }

  return (
    <>
      <h1> Counter value: {count} </h1>

      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default App;
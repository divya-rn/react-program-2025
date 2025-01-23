import { useEffect, useState } from "react";

export function Counter(){
   // let counter=0;        //ordinary variable
   let [counter,setCounter] = useState(0);  //state variable
   useEffect(()=>{
    console.log(counter)
   },[counter]);
    function increment(){
        // counter++;
        // counter++;
        // setCounter(counter+1);
        //console.log(counter+1);
        setCounter((prevCounter)=>prevCounter+1);
        setCounter((prevCounter)=>prevCounter+1);
        setCounter((prevCounter)=>prevCounter+1);
    }
    function decrement(){
        // counter--;
        // counter--;
        // setCounter(counter-1);
        //console.log(counter-1);
        setCounter((prevCounter)=>prevCounter-1);
        setCounter((prevCounter)=>prevCounter-1);
        setCounter((prevCounter)=>prevCounter-1);
    }
    return (
    <>
    <h4>Counter Component</h4>
    <button type="button" onClick={decrement}>
        -
    </button>
    <span>{counter}</span>
    <button type="button" onClick={increment}>
        +
    </button>
    </>
    );
}
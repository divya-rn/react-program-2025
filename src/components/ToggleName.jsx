import { useState } from "react";

let toggle=true;
export function ToggleName() {
  //let dName = "";
  let [dName,setDName] = useState("");
  function displayName() {
    if(toggle){
      //  dName = "Divya";
        setDName("Divya");
    }
    else{
        setDName("");
    }
    toggle=!toggle;
  }

  return (
    //<div>
    <>
      <h3>Toggle Name Component</h3>
      <button type="button" onClick={displayName}>Click</button>
      <h5>{dName}</h5>
    </>
    // </div>
  );
}

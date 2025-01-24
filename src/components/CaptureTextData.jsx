import { useState } from "react";
import { AppHeader } from "./AppHeader";

export function CaptureTextData() {
    let [nameData,setNameData] = useState("");

    function handleChange(event){
        console.log(event.target.value);
    }
    return ( 
        <>
        <AppHeader />
        <div className="container m-5"></div>
            <h2>Capture text box data...</h2>
            <div className="form-control-group">
                <label htmlFor="text-box" className="form-label">Name : {" "}</label>
                <input type="text" placeholder="Enter name" className="form-control" onChange={(event)=>handleChange(event)}/>
            </div>
        </>
     );
}
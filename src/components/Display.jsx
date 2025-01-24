import { Fragment } from "react";
import { AppHeader } from "./AppHeader";

function Display(){
    let movieName='Wakanda Forever';
    return(
        //<div>
        <>
        <AppHeader />
            <h2>Display Component</h2>
            <h3>Movie Name :{movieName}</h3>
            <input type="text"value ={movieName} />
        </>
       // </div>
    )
}
export default Display;
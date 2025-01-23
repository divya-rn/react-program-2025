import { Fragment } from "react";

function Display(){
    let movieName='Wakanda Forever';
    return(
        //<div>
        <>
            <h2>Display Component</h2>
            <h3>Movie Name :{movieName}</h3>
            <input type="text"value ={movieName} />
        </>
       // </div>
    )
}
export default Display;
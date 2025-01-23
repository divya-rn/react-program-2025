import { useState } from "react";
import Auth from "./auth.js";

export function Login(){
    let [loginData,setLoginData] = useState({});
    let [errorMessage,setErrorMessage] = useState("");
    function handleChangeInput(event){
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        });
    }
    function handleLoginFormSubmit(event){
        event.preventDefault();
        console.log(loginData);

        fetch("http://localhost:3000/users/" + loginData.id)
           .then((response) => response.json())
           .then((data) => {
            console.log(data)
            if(data.password==loginData.password){
                //login success
                console.log("Login Success")
                //store the jwt token in session storage
                Auth.isLoggedIn=true;
                Auth.storeToken(data.token);

                //store the user info in session storage
                Auth.storeUser({
                    id:data.id,
                    name:data.name,
                    email:data.email,
                    role:data.role
                })

                //navigate to the landing page based on the role of the user who has logged in

            }else{
                //login failed
                // console.log("Login Failed")
               setErrorMessage("INVALID CREDENTIALS")
            }
           })
           .catch((error) => setErrorMessage("INVALID CREDENTIALS"));
    }
    
    return (
        <>
          <div className="row my-2">
            <div className="col-3"></div>
            <div className="col-6">
              <div className="container my-5">
                <h5 className="text-danger">{errorMessage}</h5>
                <form onSubmit={(event) => handleLoginFormSubmit(event)}>
                  <div className="card">
                    <div className="card-header bg-secondary text-light">
                      <h4>LOGIN</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-control-group mb-2">
                        <label htmlFor="uid" className="form-label">
                         User Id:
                        </label>
                        <input
                          type="text"
                          id="uid"
                          className="form-control"
                          placeholder="Enter User Id:"
                          name="id"
                        //   value={newBook.bookTitle}
                          onChange={(event) => handleChangeInput(event)}
                        ></input>
                      </div>
                      <div className="form-control-group mb-2">
                        <label htmlFor="password" className="form-label">
                          Password:
                        </label>
                        <input
                          type="password"
                          id="pword"
                          className="form-control"
                          placeholder="Enter Password"
                          name="password"
                        //   value={newBook.bookAuthor}
                          onChange={(event) => handleChangeInput(event)}
                        ></input>
                      </div>
                    </div>
                    <div className="card-footer bg-secondary text-light">
                      {/* {Object.keys(validationErrors).length == 0 ? ( */}
                        <button
                          type="submit"
                          className="btn btn-light text-success"
                        >
                          SUBMIT
                        </button>
                      {/* ) : (
                        <button
                          type="submit"
                          className="btn btn-light text-success"
                          disabled
                        >
                          ADD
                        </button>
                      )} */}
                      <button
                        type="reset"
                        className="btn btn-light text-success mx-5"
                      >
                        CLEAR
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
        </>
      );
}
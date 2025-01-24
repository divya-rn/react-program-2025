import { useEffect } from "react";
import Auth from "./auth"
import { AppHeader } from "../AppHeader";

export function Logout() {
    useEffect(() => {
        Auth.isLoggedIn=false;
        Auth.deleteToken();
        Auth.deleteUser();
    },[])
    return ( 
        <>
        <AppHeader />
            <div className="container m-5 border-primary">
                <h4>You have successfully Logged out!!</h4>
                <h6>
                    <Link to="/login">Click Here</Link> to Login
                </h6>
            </div>
        </>
     );
}


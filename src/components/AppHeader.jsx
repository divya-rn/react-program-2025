import { Link } from "react-router-dom";
import Auth from "./login/auth.js";

export function AppHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
          {Auth.isLoggegIn && Auth.getRole()=="CUSTOMER"?(
            <li className="nav-item">
              <Link className="nav-link" to="/display">
                Display
              </Link>
            </li> ): ("")}
            {Auth.isLoggedIn && Auth.getRole()=="CUSTOMER"?(
            <li className="nav-item">
              <Link className="nav-link" to="/counter">
                Counter
              </Link>
            </li> ): ("")}
            {Auth.isLoggedIn && Auth.getRole()=="CUSTOMER"?(
            <li className="nav-item">
              <Link className="nav-link" to="/list-city">
                List of Cities
              </Link>
            </li> ): ("")}
            {Auth.isLoggedIn && Auth.getRole()=="CUSTOMER"?(
            <li className="nav-item">
              <Link className="nav-link" to="/toggle-name">
                Toggle Name
              </Link>
            </li> ): ("")}
            {Auth.isLoggedIn && Auth.getRole()=="CUSTOMER"?(
            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                To Do List
              </Link>
            </li> ): ("")}
            {Auth.isLoggedIn && Auth.getRole()=="CUSTOMER"?(
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Fruits
              </Link>
            </li> ): ("")}
            {Auth.isLoggedIn && Auth.getRole()=="ADMIN"?(
            <li className="nav-item">
              <Link className="nav-link" to="/book-home">
                Book
              </Link>
            </li> ): ("")}
            {Auth.isLoggedIn && Auth.getRole()=="ADMIN"?(
            <li className="nav-item">
              <Link className="nav-link" to="/book-home-http">
                Book Http
              </Link>
            </li> ): ("")}
            <li className="nav-item">
              <Link className="nav-link" to="/property-list">
                Property List
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/fetch-demo">
                Fetch Demo
              </Link>
            </li> */}
            {!Auth.isLoggedIn ? (
              <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            ) : ("")}
            {!Auth.isLoggedIn ? (
              <li className="nav-item">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
            ) : ("")}
          </ul>
        </div>
      </nav>
    </>
  );
}

import { Link } from "react-router-dom";

export function AppHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/display">
                Display Component
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list-city">
                List of Cities
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/toggle-name">
                Toggle Name
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                To Do List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fruit">
                Fruit List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book-home">
                Book
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book-home-http">
                Book Http
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/property-list">
                Property List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fetch-demo">
                Fetch Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

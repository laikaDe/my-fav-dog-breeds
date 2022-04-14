import  React  from "react";
import { Link } from 'react-router-dom';
// import logo from '../logo.svg'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
            <h2> My Favorite Dog Breeds </h2>
               <ul className="nav-links">
                  <li>
                     <Link to="/">
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link to="/about">
                        About
                     </Link>
                  </li>  
                  <li>
                     <Link to="/create">
                        Create
                     </Link>
                  </li> 
                  </ul>
            </div>
        </nav>
    )
}

export default Navbar;
import  React  from "react";
import { Link } from 'react-router-dom';
// import logo from '../logo.svg'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
            <h2> Navbar Component </h2>
               <Link to="/">
                  {/* <img src={logo} alt="my fav dog breeds logo" className="logo"> */}
               </Link>  
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
                  
               </ul>
            </div>
        </nav>
    )
}

export default Navbar;
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

 class Navbar extends Component {
     render() {
         return(
             <div>
                <nav className="navbar navbar-dark bg-dark">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/Characters" className="nav-link">Characters</Link>
                        <Link to="/CreateCharacter" className="nav-link">Create</Link>
                        <Link to="/Starships" className="nav-link">Starships</Link>
                       
            </nav>
             </div>
         )
     }
 }









export default Navbar; 
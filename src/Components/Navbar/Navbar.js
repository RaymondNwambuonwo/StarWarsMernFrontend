import React, {Component} from 'react';
import {Link} from 'react-router-dom'

 class Navbar extends Component {
     render() {
         return(
             <div>
                <nav className="navbar navbar-dark bg-dark">
                        <Link to="/Characters" className="nav-link">Characters</Link>
                        <Link to="/CreateCharacter" className="nav-link">Create</Link>
                        <Link to="/UpdateCharacter" className="nav-link">Update</Link>
                        <Link to="/DeleteCharacter" className="nav-link">Delete</Link>
                       
            </nav>
             </div>
         )
     }
 }









export default Navbar; 
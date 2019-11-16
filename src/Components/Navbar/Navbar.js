import React, {Component} from 'react';
import {Link} from 'react-router-dom'

 class Navbar extends Component {
     render() {
         return(
             <div>
                <nav class="nav nav-pills nav-fill">
                        <Link to="/" class="nav-link">Home</Link>
                        <Link to="/Characters" class="nav-link">Characters</Link>
                        <Link to="/Films" class="nav-link">Films</Link>
                        <Link to="/Starships" class="nav-link">Starships</Link>
                       
            </nav>
             </div>
         )
     }
 }









export default Navbar; 
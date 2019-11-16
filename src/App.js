import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Characters from "./Components/Characters/Characters";
import Films from "./Components/Films/Films";
import Starships from "./Components/Starships/Starships";


function App() {
  return (
   <Router>
     <div className= "container">
        <Navbar />
        <br/>
            <Route path = "/" exact component={Home} />
            <Route path = "/Characters" component={Characters} />
            <Route path = "/Films" exact component={Films} />
            <Route path="/Starships" component={Starships} />
    </div>
</Router>

  );
}



export default App;

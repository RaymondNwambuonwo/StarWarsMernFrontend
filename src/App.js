import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Characters from "./Components/Characters/Characters";
import CreateCharacter from "./Components/Characters/CreateCharacter";
import DeleteCharacter from "./Components/Characters/DeleteCharacter";
import UpdateCharacter from "./Components/Characters/UpdateCharacter";


function App() {
  return (
    <div className= "container">
      <h1>Intergalactic People</h1>
   <Router>
        <Navbar />
        <br/>
            <Route path = "/" exact component={Characters} />
            <Route path = "/Characters" component={Characters} />
            <Route path = "/CreateCharacter" exact component={CreateCharacter} />
            <Route path="/DeleteCharacter" component={DeleteCharacter} />
            <Route path="/UpdateCharacter" component={UpdateCharacter} />
   
</Router>
</div>

  );
}



export default App;

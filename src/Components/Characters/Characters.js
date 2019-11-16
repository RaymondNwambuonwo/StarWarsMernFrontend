import React, {Component} from 'react';
import axios from "axios";

class Characters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Characters2: []
        }
        // this.Charactery = this.Charactery.bind(this);
    }
    componentDidMount() {
        axios.get("http://localhost:3001/characters2")
        .then(res => {
            console.log( "Success");
            this.setState({ Characters2: res.data })
            console.log(this.state.Characters2);
        })
        .catch(err => {
            console.log(err, "Something's wrong")
        })
    }
    render() {
        return(
            <div>
              <h1>Characters</h1>
              {
                  this.state.Characters2.map(Character =>{
                      console.log(Character)
                      return(
                          <div>
                              <h1>{Character.name}</h1>
                              <p>{Character.homeworld}</p>
                          </div>
                      )
                  })
              }
              {/* <button onClick={this.Charactery}>BUTTON</button> */}
            </div>
        
        )
    }
}

export default Characters; 
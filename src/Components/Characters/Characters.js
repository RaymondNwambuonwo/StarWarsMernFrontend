import React, {Component} from 'react';
import "./Characters.css";
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
              {this.state.Characters2.map((Character, index) =>{
                      console.log(Character)
                      return(
                          <div key={Character._id}>
                              <img className="img-thumbnail" src={Character.image} alt=""/>
                              <p>{Character.name}</p>
                          </div>
                      )
                  })
              }
            </div>
        
        )
    }
}

export default Characters; 
import React, {Component} from 'react';
import "./Characters.css";
import axios from "axios";

class Characters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/characters2")
        .then(res => {
            this.setState({ characters: res.data })
        })
        .catch(err => {
            console.log(err, "Something's wrong")
        })
    }
    render() {
        return(
            <div>
              <h1>Characters</h1>
              <div className= "container2">
              {this.state.characters.map((Character, index) =>{
                      console.log(Character)
                      return(
                        <div key={Character._id}>
                          <div className="card-deck">
                              <div className="card">
                              <img className="img-thumbnail" src={Character.image} alt=""/>
                              {/* <p className="card-text">{Character.name}</p> */}
                              </div>
                          </div>
                          <p className="card-text">{Character.name}</p>
                          </div>
                      )
                  })
              }
              </div>
            </div>
        )
    }
}

export default Characters; 
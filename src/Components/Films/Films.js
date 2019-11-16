import React, {Component} from 'react';
import "./Films.css";
import axios from "axios";

class Films extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Films: []
        }
        // this.Filmer = this.Filmer.bind(this);
    }
    componentDidMount() {
        axios.get("http://localhost:3001/films")
        .then(res => {
            console.log( "Success");
            this.setState({ Films: res.data })
            console.log(this.state.Films);
        })
        .catch(err => {
            console.log(err, "Something's wrong")
        })
    }
    render() {
        return(
            <div>
              <h1>Films and shit</h1>
              {
                  this.state.Films.map(film =>{
                      console.log(film)
                      return(
                          <div>
                              <h1>{film.title}</h1>
                              <p>{film.director}</p>
                          </div>
                      )
                  })
              }
              {/* <button onClick={this.Filmer}>BUTTON</button> */}
            </div>
        
        )
    }
}


export default Films; 
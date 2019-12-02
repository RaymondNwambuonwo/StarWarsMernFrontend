import React, {Component} from 'react';
import "./Characters.css";
import axios from "axios";

class UpdateCharacter extends Component {
    constructor(props) {
        super(props);
  this.state = {
    id: "",
    name: "",
    height: 0,
    gender: "",
    homeworld: []
  }
  this.handleChange = this.handleChange.bind();
  this.handleSubmit = this.handleSubmit.bind();
    }
 
    handleChange = (evt) => {
      evt.preventDefault()
      console.log(evt.target.name)
      if(evt.target.name == "height"){
        let h = parseInt(evt.target.value)
        this.setState({ [evt.target.name]: h });
      }
      else if(evt.target.name == "homeworld"){
        let w = this.state.homeworld
        w.push(evt.target.value)
        this.setState({ [evt.target.name]: w });
      }
      else{this.setState({ [evt.target.name]: evt.target.value });}
    };

  handleSubmit = event => {
    event.preventDefault();

    axios.put(`https://raymond-api.herokuapp.com/characters2/id/${this.state.id}`, 
    this.state)
    .then(res => {
        console.log(res);
      })
    .catch(err => {
        console.log(err)
    })  
  }

  render() {
      // const { id, name, height, gender, homeworld } = this.state;
    return (
      <div>
          <h2>Update Character</h2>
        <form onSubmit={this.handleSubmit}>
        <div>
            <input
              type="text"
              name="id"
              placeholder="ID"
              // value={id}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              // value={name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="height"
              placeholder="Height"
              // value={height}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="homeworld"
              placeholder="Homeworld"
              // value={homeworld}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              // value={gender}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default UpdateCharacter;
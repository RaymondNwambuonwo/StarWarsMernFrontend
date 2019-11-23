import React, { Component } from "react";
import "./Characters.css";
import axios from "axios";

class CreateCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      height: "",
      gender: "",
      image: "", 
      born: "",
      homeworld: [],
      bornLocation: "",
      hair_color: "",
      eye_color: "",
      cybernetics: [],
      name: ""
    };
    this.onChange = this.handleChange.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
  }


  handleChange = (evt) => {
    evt.preventDefault()
    this.setState({ [evt.target.name]: evt.target.value });
    console.log(this.state);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
   const url = `http://localhost:3001/characters2`;
    axios.post(url, {
        gender: this.state.gender,
        height: this.state.height,
        born: this.state.born,
        image: this.state.image, 
        homeworld: this.state.homeworld,
        bornLocation: this.state.bornLocation,
        hair_color: this.state.hair_color,
        eye_color: this.state.eye_color,
        cybernetics: this.state.cybernetics,
        name: this.state.name
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
      console.log(this.state);
    })
    .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { height, gender, born, image, bornLocation, hair_color, eye_color, cybernetics, name, homeworld } = this.state;
    return (
        <div className="create">
      <form onSubmit={this.handleSubmit}>

      <label>Homeworld:</label>
        <input
          type="text"
          name="homeworld"
          value={homeworld}
          onChange={this.handleChange}
        />
         <br />
        <label>Height:</label>
        <input
          type="text"
          name="height"
          value={height}
          onChange={this.handleChange}
        />
        <br />
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          value={gender}
          onChange={this.handleChange}
        />
        <br />
        <label>Born:</label>
        <input
          type="text"
          name="born"
          value={born}
          onChange={this.handleChange}
        />
        <br />
        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={this.handleChange}
        />
         <br />
         <label>Birth Place:</label>
        <input
          type="text"
          name="bornLocation"
          value={bornLocation}
          onChange={this.handleChange}
        />
         <br />
         <label>Hair Color:</label>
        <input
          type="text"
          name="hair_color"
          value={hair_color}
          onChange={this.handleChange}
        />
         <br />
         <label>Eye Color:</label>
        <input
          type="text"
          name="eye_color"
          value={eye_color}
          onChange={this.handleChange}
        />
         <br />
         <label>Cybernetics:</label>
        <input
          type="text"
          name="cybernetics"
          value={cybernetics}
          onChange={this.handleChange}
        />
         <br />
         <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default CreateCharacter;
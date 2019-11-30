import React, { Component } from "react";
import "./Characters.css";
import axios from "axios";

class CreateCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      height: 0,
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
    else if(evt.target.name == "cybernetics"){
      let c = this.state.cybernetics
      c.push(evt.target.value)
      this.setState({ [evt.target.name]: c });
    } else{this.setState({ [evt.target.name]: evt.target.value });}
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("ive been clicked", JSON.stringify(this.state))
   const url = `http://localhost:3001/Characters2`;
    axios.post(url, this.state)
    .then(res => {
      console.log('response:', res);
      // redirect to characters page
      this.props.history.push('/characters')
    })
    .catch(error => {
        console.log(error);
      });
  };


  render() {
    // const { height, homeworld, gender, born, image, bornLocation, name, hair_color, eye_color, cybernetics } = this.state;
    return (
        <div className="create">
      <form onSubmit={this.handleSubmit}>

        <label>Height:</label>
        <input
          type="text"
          name="height"
          // value={height}
          onChange={this.handleChange}
        />
        <br />
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          // value={gender}
          onChange={this.handleChange}
        />
        <br />
        <label>Born:</label>
        <input
          type="text"
          name="born"
          // value={born}
          onChange={this.handleChange}
        />
        <br />
        <label>Name:</label>
        <input
          type="text"
          name="name"
          // value={name}
          onChange={this.handleChange}
        />
        <br />
        <label>Image:</label>
        <input
          type="text"
          name="image"
          // value={image} 
          onChange={this.handleChange}
        />
         <br />
         <label>Birth Place:</label>
        <input
          type="text"
          name="bornLocation"
          // value={bornLocation}
          onChange={this.handleChange}
        />
         <br />
         <label>Hair Color:</label>
        <input
          type="text"
          name="hair_color"
          // value={hair_color}
          onChange={this.handleChange}
        />
         <br />
         <label>Eye Color:</label>
        <input
          type="text"
          name="eye_color"
          // value={eye_color}
          onChange={this.handleChange}
        />
         <br />
         <label>Cybernetics:</label>
        <input
          type="text"
          name="cybernetics"
          // value={cybernetics}
          onChange={this.handleChange}
        />
         <br />
         <label>Homeworld:</label>
        <input
          type="text"
          name="homeworld"
          // value={homeworld} 
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
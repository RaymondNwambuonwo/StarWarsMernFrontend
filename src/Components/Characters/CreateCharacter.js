import React, { Component } from "react";
import axios from "axios";

class CreateCharacter extends Component {
  constructor() {
    super();
    this.state = {
      image: "",  
      name: "",
      height: "",
      gender: "",
      born: ""

    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
    console.log(this.state);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // console.log("form has been submitted");
    const character = {
        image: this.state.image,
        name: this.state.name,
        height: this.state.height,
        gender: this.state.gender,
        born: this.state.born
    }

    axios.post(`http://localhost:3001/characters2`, { character })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    .catch(error => {
        console.log(error);
      });
  };

  render() {
    // const { name, height, gender, born } = this.state;
    return (
        <div className="create">
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
        //   value={name}
          onChange={this.handleChange}
        />
        <br />
        <label>Height:</label>
        <input
          type="text"
          name="height"
        //   value={height}
          onChange={this.onChange}
        />
        <br />
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
        //   value={gender}
          onChange={this.onChange}
        />
        <br />
        <label>Born:</label>
        <input
          type="text"
          name="born"
        //   value={born}
          onChange={this.onChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default CreateCharacter;
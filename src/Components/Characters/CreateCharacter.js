import React, { Component } from "react";
import axios from "axios";

class CreateCharacter extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      height: "",
      gender: "",
      born: ""

    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("form has been submitted");

    axios.post("http://localhost:3001/characters2", this.state)
    .then(result => {
      console.log(result);
      this.props.closeSubmit();
    })
    .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { name, height, gender, born } = this.state;
    return (
        <div className="create">
      <form onSubmit={this.onSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.onChange}
        />
        <br />
        <label>Height:</label>
        <input
          type="text"
          name="height"
          value={height}
          onChange={this.onChange}
        />
        <br />
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          value={gender}
          onChange={this.onChange}
        />
        <br />
        <label>Born:</label>
        <input
          type="text"
          name="born"
          value={born}
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
import React, { Component } from "react";
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
    };
    this.handleChange = this.handleChange.bind();
    this.handleSubmit = this.handleSubmit.bind();
  }

  handleChange = evt => {
    evt.preventDefault();
    console.log(evt.target.name);
    if (evt.target.name == "height") {
      let h = parseInt(evt.target.value);
      this.setState({ [evt.target.name]: h });
    } else if (evt.target.name == "homeworld") {
      let w = this.state.homeworld;
      w.push(evt.target.value);
      this.setState({ [evt.target.name]: w });
    } else {
      this.setState({ [evt.target.name]: evt.target.value });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .put(
        `https://raymond-api.herokuapp.com/characters2/id/${this.state.id}`,
        this.state
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // const { id, name, height, gender, homeworld } = this.state;
    return (
      <div className="create">
        <h2>Update Soilder</h2>
        <form className="the-form" onSubmit={this.handleSubmit}>
          <label>Character ID:</label>
          <input
            type="text"
            name="id"
            className="the-form__input"
            // value={id}
            onChange={this.handleChange}
          />
          <br />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className="the-form__input"
            // value={id}
            onChange={this.handleChange}
          />
          <br />
          <label>Height:</label>
          <input
            type="text"
            name="height"
            className="the-form__input"
            // value={id}
            onChange={this.handleChange}
          />
          <br />
          <label>Homeworld:</label>
          <input
            type="text"
            name="homeworld"
            className="the-form__input"
            // value={id}
            onChange={this.handleChange}
          />
          <br />
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            className="the-form__input"
            // value={id}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UpdateCharacter;

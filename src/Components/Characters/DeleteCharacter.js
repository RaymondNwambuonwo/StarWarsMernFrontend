import React, { Component } from "react";
import "./Characters.css";
import axios from "axios";

class DeleteCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    // this.setState({ id: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .delete(
        `https://raymond-api.herokuapp.com/characters2/name/${this.state.name}`,
        this.state
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.history.push("/characters");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    //   const {id} = this.state;
    return (
      <div>
        <form className="the-form" onSubmit={this.handleSubmit}>
          <label>
            Soilder Name:
            <input
              className="the-form__input"
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}

export default DeleteCharacter;

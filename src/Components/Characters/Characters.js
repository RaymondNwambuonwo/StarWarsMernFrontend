import React, { Component } from "react";
import "./Characters.css";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";
import Button from "react-bootstrap/Button";

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      modal1: false
    };
  }

  setModal1(Character) {
    this.setState({ modal1: true, characters: [Character] });
    console.log(this.state);
  }

  componentDidMount() {
    axios
      .get("https://raymond-api.herokuapp.com/characters2")
      .then(res => {
        this.setState({ characters: res.data });
      })
      .catch(err => {
        console.log(err, "Something's wrong");
      });
  }

  render() {
    return (
      <div>
        <h1>Soilders</h1>
        <div className="container2">
          {this.state.characters.map((Character, index) => {
            console.log(Character);
            return (
              <div key={Character._id}>
                <div className="card-deck">
                  <div className="card">
                    <img
                      className="img-thumbnail"
                      src={Character.image}
                      alt=""
                    />
                  </div>
                </div>
                <Button
                  type="primary"
                  onClick={() => this.setModal1(Character)}
                >
                  <div className="card-text">{Character.name}</div>
                </Button>
                <Modal
                  title={Character.name}
                  visible={this.state.modal1}
                  onOk={() => this.setState({ modal1: false })}
                  onCancel={() => this.setState({ modal1: false })}
                >
                  <div className="text-centered modtex">
                    <h3>Description</h3>
                    <p className="modal-paragraph">
                      Height: {Character.height}
                      <br />
                      Homeworld: {Character.homeworld}
                      <br />
                      Gender: {Character.gender}
                      <br />
                      Birth: {Character.born}
                      <br />
                      Died: {Character.died}
                      <br />
                      Cybernetics: {Character.cybernetics}
                      <br />
                      Place of Birth: {Character.bornLocation}
                      <br />
                      Affiliations: {Character.affiliations}
                      <br />
                      Place of Death: {Character.diedLocation}
                      <br />
                      Wiki: {Character.wiki}
                    </p>
                  </div>
                </Modal>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Characters;

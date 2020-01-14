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
        <h1>Characters</h1>
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
                  <p className="card-text">{Character.name}</p>
                </Button>
                <Modal
                  title="charac"
                  visible={this.state.modal1}
                  onOk={() => this.setState({ modal1: false })}
                  onCancel={() => this.setState({ modal1: false })}
                >
                  <div className="text-centered">{Character.name}</div>
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

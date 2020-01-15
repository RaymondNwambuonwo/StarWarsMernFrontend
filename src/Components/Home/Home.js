import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="fade"></div>
        <div className="star-wars">
          <div className="crawl">
            <div className="title">
              <p>Episode X</p>
              <h1>WAR ON THE HORIZON</h1>
            </div>

            <p>
              It is a period of civil war, as a new empire has arisen. A
              resistance is being formed and we need more soilders if we are
              going to win this.
            </p>

            <p>
              If you are willing to face the evil empire and take back the
              galaxy in the name of all that is good.
            </p>

            <p>
              Sign up in the create section and fill out the information
              accordingly. Thank you for joining the intergalactic war front!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;

import React from "react";
import {Fade} from "react-awesome-reveal";
import leaf from '../img/leaf.png';


class Top extends React.Component {
  render() {
    return (
  <div className="Top-Start">
    <div className="Join-Us">
      <Fade delay={1000} duration={3000}>
      <h1 className="Join-Day">
      Join us on October 16th, 2021
      </h1>
      </Fade>
      <Fade delay={2000} duration={3000}>
      <p>
      Owl's Nest Resort <br />White Mountains Thornton, New Hampshire
      </p>
      </Fade>
        <Fade direction="down" delay={500} duration={2000}>
          <img className="leaf" src={leaf} alt="Logo" />
        </Fade>
    </div>
  </div>
    );
  }
}

export default Top;

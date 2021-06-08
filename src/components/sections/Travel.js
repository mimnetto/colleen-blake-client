import React from 'react';
import owl from '../../img/owl-logo.png';
import {Container, Row, Col} from 'react-bootstrap';


class Travel extends React.Component {
  render() {
    return (
    <div className="Top-Start">
        <Container>
          <Row>
            <Col className="col-12">
            <div className="background_title">
              Travel
            </div>
            <div>
                <h1 className="headp">
                  Travel
                </h1>
                <a href="https://www.owlsnestresort.com/" target="_blank" rel="noreferrer" >
                <img className="logos" src={owl} alt="Logo" />
                </a>
                <p className="info">
                The Ceremony and Reception will be held at <b><a href="https://www.owlsnestresort.com/" target="_blank" rel="noreferrer" >Owl’s Nest Resort</a></b>.
                <br/>
                <br/>
                <b><a href="https://www.google.co.in/maps/place/40+Clubhouse+Ln,+Thornton,+NH+03285/@43.8701087,-71.6565107,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb361453e9406eb:0x59a6815cd199c456!8m2!3d43.8710175!4d-71.6546538" target="_blank" rel="noreferrer" >
                40 Clubhouse Lane <br/> Thornton, NH 03285
                </a></b>
                </p>
                <p className="more-soon">
                  More info coming soon...
                </p>
                <br />
                </div>
              </Col>
            </Row>
            </Container>
    </div>);
  }
}

export default Travel

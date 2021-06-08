import React from 'react';
import owl from '../../img/owl-logo.png';
import snow from '../../img/snow-logo.png';
import {Slide} from "react-awesome-reveal";
import {Container, Row, Col} from 'react-bootstrap';


class Hotel extends React.Component {
  render() {
    return (
    <div className="Top-Start">
      <Slide direction="right">
        <Container>
          <Row>
            <Col className="col-12">
            <div className="background_title">
              Accommodations
            </div>
            <div>
                <h1 className="headp">
                  Accommodations
                </h1>
                <a href="https://www.owlsnestresort.com/" target="_blank" rel="noreferrer" >
                <img className="logos" src={owl} alt="Logo" />
                </a>
                <p className="info">
                There are a limited number of one bedroom hotel style rooms, and two bedroom condos available at <b><a href="https://www.owlsnestresort.com/" target="_blank" rel="noreferrer" >Owls Nest</a></b>.
                <br />
                 Please contact Barbara Leach at <b><a href="tel:603-726-3076">(603) 726-3076</a> ext. 295 </b>if you would like to reserve one.
                </p>
                <img className="logos" src={snow} alt="Logo" />
                <p className="info">
                There will also be a block of rooms at the Snowy Owl just down the road in Waterville Valley, NH.  A bus will be provided between the Snowy Owl and Owl's Nest.  Please contact the Snowy Owl at <b><a href="tel:603-236-8383">(603) 236-8383</a></b> and mention the Young / Kelley wedding.  Waterville Valley is very walk-able and there are a number of condos and houses that can be rented as well.
                </p>
                </div>
              </Col>
            </Row>
            </Container>
      </Slide>
    </div>);
  }
}

export default Hotel

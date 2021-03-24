import React from 'react';
import {Slide} from "react-awesome-reveal";
import {Container, Row, Col} from 'react-bootstrap';
import './Ribbon.css';


class Wedding extends React.Component {
  render() {
    return (
    <div className="Top-Start">
      <Slide direction="right">
        <Container fluid>
          <Row>
            <Col className="col-12">
                <h1 className="headp">
                  Wedding
                </h1>
              </Col>
            </Row>
            </Container>
            <Row className="d-flex justify-content-center align-items-stretch" xs={1} md={1} lg={4} xl={4}>
              <Col className="wed-info align-self-stretch content" >
              <h2 className="doko ribbon">
                Where
              </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper cursus neque id congue. Phasellus at quam et ex lobortis eleifend. Nam ullamcorper tempor gravida. Quisque congue ante non dui finibus posuere. Suspendisse viverra rhoncus dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc dapibus urna nec urna porta, eget hendrerit massa suscipit. Nam vitae congue tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
            </Col>
              <Col className="wed-info align-self-stretch" >
              <h2 className="doko">
                Where
              </h2>
                <p>
                </p>
            </Col>
              <Col className="wed-info align-self-stretch" >
              <h2 className="doko">
                Where
              </h2>
                <p>
                </p>
            </Col>
          </Row>
      </Slide>
    </div>);
  }
}

export default Wedding

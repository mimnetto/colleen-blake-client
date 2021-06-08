import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import target from '../../img/target.png';
import willy from '../../img/willy-s.png';


class Registry extends React.Component {
  render() {
    return (
  <div className="Top-Start">
    <Container>
      <Row>
        <Col className="col-12">
        <div className="background_title">
          Registry
        </div>
        <h1 className="headp">
          Registry
        </h1>
        <br/>
        <br/>
          </Col>
        <Col className="col-6">
            <p>
              <a href="https://www.target.com/gift-registry/giftgiver?registryId=11df621e2f684388be5202615dd953cd&type=WEDDING" target="_blank" rel="noreferrer" >
              <img className="reg-pic" src={target} alt="Logo" />
              </a>
            </p>
            <p className="more-soon">
              <a href="https://www.target.com/gift-registry/giftgiver?registryId=11df621e2f684388be5202615dd953cd&type=WEDDING" target="_blank" rel="noreferrer" >
              Target
              </a>
            </p>
            <br />
          </Col>
          <Col className="col-6">
          <br />
          <br />
          <p>
            <a href="https://www.williams-sonoma.com/registry/5wvbp2pdhb/registry-list.html" target="_blank" rel="noreferrer" >
            <img className="reg-pic" src={willy} alt="Logo" />
            </a>
          </p>
          <p className="more-soon">
            <a href="https://www.williams-sonoma.com/registry/5wvbp2pdhb/registry-list.html" target="_blank" rel="noreferrer" >
            Williams-Sonoma
            </a>
          </p>
            </Col>
        </Row>
        </Container>
  </div>
    );
  }
}

export default Registry;

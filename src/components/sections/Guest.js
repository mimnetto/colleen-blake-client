import React, { Component } from "react";
import CommentList from "./comment/CommentList";
import CommentForm from "./comment/CommentForm";
import {Container, Row, Col} from 'react-bootstrap';

class Guest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch("http://localhost:2048")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }
  render() {
    return (
      <div className = "test-border Top-Start" >
        <Container >
          <Row>
            <Col className = "col-4 test-blue" >
              <h6 > Say something about React < /h6>
                <CommentForm addComment={this.addComment}/>
            </Col>
            <Col className = "col-8 test-row" >
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
            </Col>
        </Row>
      </Container>
    </div>
    );
  }
}

export default Guest;

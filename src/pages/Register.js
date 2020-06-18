/* eslint-disable linebreak-style */
import React, { Component, Fragment } from 'react';
import {
  Container, Row, Col, Card, Form, Button,
} from 'react-bootstrap';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      notMatch: false,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { password, password2 } = this.state;
    if (password !== password2) {
      this.setState({
        notMatch: true,
      });
    } else {
      this.props.history.push({
        pathname: '/',
        state: this.state,
      });
    }
  }

  render() {
    const { notMatch } = this.state;
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={5} className="mx-auto">
              <Card className="card-signin flex-row my-5">
                <Card.Body>
                  <h5 className="card-title text-center">Register</h5>
                  <Form className="form-signin" onSubmit={this.onSubmit}>
                    <Form.Group className="form-label-group" controlId="inputUserame">
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        onChange={(e) => this.setState({ username: e.target.value })}
                        required
                        autoFocus
                      />
                      <Form.Label>Username</Form.Label>
                    </Form.Group>
                    <Form.Group className="form-label-group " controlId="inputEmail">
                      <Form.Control
                        type="email"
                        placeholder="Email address"
                        onChange={(e) => this.setState({ email: e.target.value })}
                        required
                      />
                      <Form.Label>Email address</Form.Label>
                    </Form.Group>
                    <Form.Group className="form-label-group " controlId="inputPassword">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => this.setState({ password: e.target.value })}
                      />
                      <Form.Label>Password</Form.Label>
                    </Form.Group>
                    <Form.Group className="form-label-group " controlId="inputPassword2">
                      <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        onChange={(e) => this.setState({ password2: e.target.value })}
                        required
                      />
                      <Form.Label>Confirm password</Form.Label>
                      {notMatch ? <Form.Text className="ml-3 text-danger">Password not match</Form.Text> : null}
                    </Form.Group>
                    <Button className="text-uppercase" type="submit" size="lg" block>Register</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

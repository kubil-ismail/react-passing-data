/* eslint-disable linebreak-style */
import React, { Component, Fragment } from 'react';
import {
  Container, Row, Col, Card, Button, ListGroup,
} from 'react-bootstrap';

export default class Home extends Component {
  render() {
    const history = this.props.history.location;
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={5} className="mx-auto">
              <Card className="card-signin flex-row my-5">
                <Card.Body>
                  <ListGroup>
                    {history.state === undefined ? (
                      <ListGroup.Item className="text-center" variant="warning" >Data Not Found</ListGroup.Item>
                    ) : (<>
                      <ListGroup.Item>{history.state.username}</ListGroup.Item>
                      <ListGroup.Item>{history.state.email}</ListGroup.Item>
                      <ListGroup.Item>{history.state.password}</ListGroup.Item>
                    </>)}
                  </ListGroup>
                  <Button block onClick={() => this.props.history.push('/register')}>Back</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

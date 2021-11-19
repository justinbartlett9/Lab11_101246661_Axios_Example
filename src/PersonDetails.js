import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default function PersonDetails(props) {
  return (
    <Card>
      <Card.Header className="justify-content-med-left">
        {`${props.user.name.title} ${props.user.name.first} ${props.user.name.last}`}{" "}
        - {props.user.login.uuid}
      </Card.Header>
      <Card.Body>
        <Row>
          <Col sm="2">
            <Row className="justify-content-md-left">
              <Image
                src={props.user.picture.large}
                alt="Profile"
                roundedCircle
                fluid
              />
            </Row>
            <Row>
              <Button variant="primary">Details</Button>
            </Row>
          </Col>
          <Col sm="2">
            <Card.Text>Username:</Card.Text>
            <Card.Text>Gender:</Card.Text>
            <Card.Text>Time Zone Description:</Card.Text>
            <Card.Text>Address:</Card.Text>
            <Card.Text>Email:</Card.Text>
            <Card.Text>Birth Date and Age:</Card.Text>
            <Card.Text>Register Date:</Card.Text>
            <Card.Text>Phone:</Card.Text>
            <Card.Text>Cell:</Card.Text>
          </Col>
          <Col sm="auto">
            <Card.Text>{props.user.login.username}</Card.Text>
            <Card.Text>{props.user.gender}</Card.Text>
            <Card.Text>{props.user.location.timezone.description}</Card.Text>
            <Card.Text>
              {`${props.user.location.street.number}
                ${props.user.location.street.name} ${props.user.location.city}, ${props.user.location.state}, ${props.user.location.country} - ${props.user.location.postcode}`}
            </Card.Text>
            <Card.Text>{props.user.email}</Card.Text>
            <Card.Text>{`${props.user.dob.date} (${props.user.dob.age})`}</Card.Text>
            <Card.Text>{props.user.registered.date}</Card.Text>
            <Card.Text>{props.user.phone}</Card.Text>
            <Card.Text>{props.user.cell}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

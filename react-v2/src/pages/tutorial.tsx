import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';

const Tutorial: React.FC = () => {
  return (
    <Container className="mt-5 p-5">
      <Row>
        <Col>
          <h2><FaInfoCircle /> About Us</h2>
          <p>
            Our application is designed to help users manage their tasks efficiently.
            We are committed to providing the best user experience through our innovative features.
          </p>
        </Col>
        <Col>
          <h2>Our Mission</h2>
          <p>
            To simplify task management and improve productivity for individuals and teams.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Tutorial;
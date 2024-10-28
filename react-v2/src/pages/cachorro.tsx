import React, { useState, useEffect } from "react";
import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";

function Cachorro() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);

  const fetchDogImage = () => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((apiData) => {
        setImageUrl(apiData.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDogImage();
  }, [update]);

  return (
    <Container className="mt-5 p-5">
      <Row className="align-items-center mb-4 sticky-top">
        <Col>
          <h1>Cachorro do Dia</h1>
        </Col>
        <Col xs="auto">
          <Button variant="secondary" onClick={() => setUpdate(!update)}>
            Atualizar
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {loading ? (
          <Spinner animation="border" role="status" className="my-4">
            <span className="sr-only"></span>
          </Spinner>
        ) : (
          <Image
            src={imageUrl}
            alt="Random Dog"
            fluid
            rounded
            className="my-4 shadow-lg"
            style={{
              objectFit: "contain",
              maxHeight: "calc(100vh - 300px)",
              maxWidth: "100%",
            }}
          />
        )}
      </Row>
    </Container>
  );
}

export default Cachorro;

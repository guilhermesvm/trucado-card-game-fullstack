import React, { useState } from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'

const Contador: React.FC <{ player: string }> = (props) => {
  const [contador, setContador] = useState(0)
  const [jogador] = useState(props.player)
  
  const incrementar = () => {
    setContador(prev => (prev < 24 ? prev + 1 : prev))
  }

  const decrementar = () => {
    setContador(prev => (prev > 0 ? prev - 1 : prev))
  }

  return (
	<div className="placarContainer">
		<Row>
			<h3>{jogador}</h3>
		</Row>
		<Row>
			<Col className="imagem-container">
				<Image src={`/placar/${contador}.jpg`} alt={`Imagem ${contador}`} />
			</Col>
			<Col className="d-flex align-items-center justify-content-between">
				<Button onClick={incrementar}>Mais</Button>
				<Button onClick={decrementar}>Menos</Button>
			</Col>
		</Row>
	</div>
  );
};

export default Contador;

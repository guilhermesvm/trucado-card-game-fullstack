import React, { useEffect, useState } from 'react'
import MatchService from './services/matchService'
import { Button, Container, Modal, Table } from 'react-bootstrap'
import Contador from './components/Contador'

const MatchList = () => {
  const [matches, setMatches] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedParticipants, setSelectedParticipants] = useState([])

  useEffect(() => {
    const fetchMatches = async () => {
      const data = await MatchService.getMatches()
      setMatches(data)
    }
    fetchMatches()
  }, [])

  const handleStartScore = (participants) => {
    setSelectedParticipants(participants)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedParticipants([])
  }

  return (
    <Container className="mt-5 p-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Data</th>
            <th>Torneio</th>
            <th>Competidores</th>
            <th>Vencedor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.id}>
              <td>{match.date ? new Date(match.date).toLocaleDateString() : 'Data não definida'}</td>
              <td>{match.tournament?.name || 'Não definido'}</td>
              <td>
              {
                match.users?.length > 0 ? (
                  match.users.map((user) => user.name).join(' x ')
                ) : (
                  match.teams?.length > 0 ? (
                    match.teams.map((team) => team.name).join(' x ')
                  ) : (
                    'Nenhum'
                  )
                )
              }
              </td>
              <td>
              {
                match.winnerUser ? (
                  match.winnerUser.name
                ) : (
                  match.winnerTeam.name ? (
                    match.winnerTeam.name
                  ) : (
                    'Nenhum'
                  )
                )
              }
              </td>
              <td>
                <Button variant="primary" onClick={
                  () => handleStartScore(match.users && match.users.length ? match.users : match.teams)
                }>
                  Placar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


      {/*matches.map((match) => (
        <Card key={match.id} className="mb-3">
          <Card.Header>Partida {match.id}</Card.Header>
          <Card.Body>
            <Card.Title>
              Torneio: {match.tournament?.name || 'Não definido'}
            </Card.Title>
            <Card.Text>
              Data: {match.date ? new Date(match.date).toLocaleDateString() : 'Data não definida'}
            </Card.Text>

            <ListGroup>
              <ListGroup.Item>
                <strong>Usuários:</strong> {match.users?.length ? match.users.map((user) => user.name).join(', ') : 'Nenhum'}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Times:</strong> {match.teams?.length ? match.teams.map((team) => team.name).join(', ') : 'Nenhum'}
              </ListGroup.Item>
              {match.winnerUser && (
                <ListGroup.Item>
                  <strong>Vencedor (Usuário):</strong> {match.winnerUser.name}
                </ListGroup.Item>
              )}
              {match.winnerTeam && (
                <ListGroup.Item>
                  <strong>Vencedor (Time):</strong> {match.winnerTeam.name}
                </ListGroup.Item>
              )}
            </ListGroup>

            <Button
              variant="primary"
              className="mt-3"
              onClick={() => handleStartScore(match.users && match.users.length ? match.users : match.teams)}
            >
              Iniciar Placar
            </Button>
          </Card.Body>
        </Card>
      ))*/}

      <Modal bg="dark" data-bs-theme="dark" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Placar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="placarContainer">
              {selectedParticipants.map((participant, index) => (
                  <Contador key={index} player={participant.name}></Contador>
              ))}
          </div>
          <ul>
            
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default MatchList
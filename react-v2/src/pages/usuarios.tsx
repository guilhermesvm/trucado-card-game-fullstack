import React, { useState, useEffect } from "react"
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  Form,
  Modal,
} from "react-bootstrap"
import UserCardModal from "./components/UserCard"
import UserService from "./services/userService"
import UserForm from "./components/UserForm"

interface User {
  id: number
  name: string
  email: string
  password: number
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  /*const fetchUsersApi = async () => {
    setLoading(true)
    try {
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      )
      setUsers(response.data)
    } catch (error) {
      console.error("Erro ao buscar usuários:", error)
    } finally {
      setLoading(false)
    }
  }*/

  const fetchUsers = async () => {
    setLoading(true)
    
    try {
      const response = await UserService.getUsers()
      setUsers(response)
    } catch (error) {
      console.error("Erro ao buscar usuários:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleOpenModal = (user?: User) => {
    setSelectedUser(user || { id: 0, name: "", email: "", password: null})
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedUser(null)
  }

  const handleSaveUser = async () => {
    if (!selectedUser) return

    try {
      if (selectedUser.id) {
        await UserService.updateUser(selectedUser.id, selectedUser)
      } else {
        await UserService.addUser(selectedUser)
      }
      fetchUsers()
    } catch (error) {
      console.error("Erro ao salvar usuário:", error)
    } finally {
      handleCloseModal()
    }
  }

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
      </Container>
    )
  }

  return (
    <Container className="mt-5 p-5">
      <Row className="align-items-center mb-4 sticky-top">
        <Col>
          <h1>Lista de Usuários</h1>
        </Col>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Buscar por nome ou email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col xs="auto">
          <Button variant="secondary" onClick={fetchUsers}>
            Refresh
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={() => handleOpenModal()}>
            Adicionar Usuário
          </Button>
        </Col>
      </Row>
      <Row>
        {filteredUsers.map((user) => (
          <Col key={user.id} sm={12} md={6} lg={4} className="mb-4">
            <UserCardModal user={user} onEdit={handleOpenModal} />
          </Col>
        ))}
      </Row>

      <Modal 
        show={showModal}
        onHide={handleCloseModal}
        bg="dark"
        data-bs-theme="dark"    
    >
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedUser ? "Editar Usuário" : "Adicionar Usuário"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {selectedUser && (
            <UserForm
              user={selectedUser}
              onChange={(user) => setSelectedUser(user)}
              onSubmit={handleSaveUser}
              onCancel={handleCloseModal}
            />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default UserList

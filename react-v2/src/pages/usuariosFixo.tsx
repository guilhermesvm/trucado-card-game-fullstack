import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { FaTrash, FaEdit } from 'react-icons/fa';

const UsuariosFixo = () => {
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ];

  return (
    <Container className="mt-5 p-5">
      <h2>Users List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="warning" className="me-2"><FaEdit /> Edit</Button>
                <Button variant="danger"><FaTrash /> Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UsuariosFixo;

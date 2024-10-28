import React, { useState, useEffect } from 'react'
import { Table, Button, Modal, Form, Container } from 'react-bootstrap'
import { FaEdit, FaTrash, FaPlus, FaSortUp, FaSortDown } from 'react-icons/fa'
import UserService from './services/userService'
import UserInterface from './interfaces/UserInterface'

const UserTable = () => {
    const [users, setUsers] = useState<UserInterface[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [currentUser, setCurrentUser] = useState<UserInterface>({ id: 0, name: '', email: '', password: 0 });
    const [isEdit, setIsEdit] = useState(false);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const usersData = await UserService.getUsers();
        setUsers(usersData);
    };

    const handleDelete = async (id: number) => {
        await UserService.deleteUser(id);
        fetchUsers();
    };

    const handleEdit = (user: UserInterface) => {
        setCurrentUser(user);
        setIsEdit(true);
        setShowModal(true);
    };

    const handleAdd = () => {
        setCurrentUser({ id: 0, name: '', email: '', password: null });
        setIsEdit(false);
        setShowModal(true);
    };

    const handleSortById = () => {
        const sortedUsers = [...users].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.id - b.id;
            } else {
                return b.id - a.id;
            }
        });
        setUsers(sortedUsers);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const handleSubmit = async () => {
        if (isEdit) {
            await UserService.updateUser(currentUser.id, currentUser);
        } else {
            await UserService.addUser(currentUser);
        }
        setShowModal(false);
        fetchUsers();
    };

    return (
        <Container className="mt-5 p-5">
            <h2 className="mb-4">
                User List
                <Button variant="primary" className="float-end" onClick={handleAdd}>
                    <FaPlus /> Add User
                </Button>
            </h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th onClick={handleSortById} style={{ cursor: 'pointer' }}>
                            ID{' '}
                            {sortOrder === 'asc' ? <FaSortUp /> : <FaSortDown />}
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: UserInterface) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEdit(user)} className="me-2">
                                    <FaEdit />
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(user.id)}>
                                    <FaTrash />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal 
                show={showModal}
                onHide={() => setShowModal(false)}
                bg="dark"
                data-bs-theme="dark"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{isEdit ? 'Edit User' : 'Add User'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formUserName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentUser.name}
                                onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formUserEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={currentUser.email}
                                onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formUserPassword">
                            <Form.Label>Password (number)</Form.Label>
                            <Form.Control
                                type="number"
                                value={currentUser.password}
                                onChange={(e) => setCurrentUser({ ...currentUser, password: Number(e.target.value) })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        {isEdit ? 'Save Changes' : 'Add User'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default UserTable;
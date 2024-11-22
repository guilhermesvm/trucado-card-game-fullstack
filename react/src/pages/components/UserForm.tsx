import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import userService from "../services/userService";

interface User {
    name: string,
    email: string,
    password: string
}

const UserForm: React.FC = () => { 
    const [formData, setFormData] = useState<User>({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        await userService.createUser(formData);

        console.log(formData);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Digite o nome do usuário"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Digite o email do usuário"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Senha: </Form.Label>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Digite a senha do usuário"></Form.Control>
                </Form.Group>
                <Button type="submit">Enviar</Button>
            </Form>
        </>
    );
}

export default UserForm;

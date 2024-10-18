import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface User {
    name: string,
    email: string,
    password: number
}

const UserForm: React.FC = () => { 
    const [formData, setFormData] = useState<User>({
        name: "",
        email: "",
        password: 0
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const url = "http://localhost:3001/api/user"
        axios.post(url, formData).then( function(response) {
            if(response.status == 201) {
                console.log("User added");
            }
        }).catch(
            function(error){
                console.log(error);
            }
        )
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

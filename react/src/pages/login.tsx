import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";

interface User {
    email: string,
    password: string
}

const Login: React.FC = () => {
    const [formData, setFormData] = useState<User>({
        email: "",
        password: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const url = "http://localhost:3001/api/user"

        axios.post(url, formData).then(function(response) {
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

    return(
        <>
            <Form onSubmit={handleSubmit}>
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

export default Login;
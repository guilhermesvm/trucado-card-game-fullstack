import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Image, Modal, ModalBody, Spinner } from "react-bootstrap";
import UserForm from "./components/UserForm";

const Dogs = () => {
    const [loading, setLoading] = useState(true);
    const [dogImg, setDogImg] = useState("");
    const [reset, setReset] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const searchAxios = () => {
        const url = "https://dog.ceo/api/breeds/image/random"
        axios.get(url)
        .then(function (response) {
            setDogImg(response.data.message);
            setLoading(false);
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        setLoading(true)
        searchAxios()
    }, [reset])

    const handleClose = () => {
        setShowModal(false);
    }

    const handleOpen = () => {
        setShowModal(true);
    }

    return (
        <>
            {
                loading ? (
                    <Spinner animation="border"/>
                ) : (
                    <>
                        <Button onClick={() => setReset(!reset)}>Atualizar Cachorro</Button>
                        <Button onClick={handleOpen}>Adicionar Usuário</Button>
                        <Image 
                            className="mb-4 shadow" 
                            src={dogImg} 
                            alt="Random dog image" 
                            style={{ objectFit: "contain", maxHeight: "calc(100vh-300px)", maxWidth: "100%" }} 
                        ></Image>
                    </>
                )
            }
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar Usuário</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <UserForm></UserForm>
                </ModalBody>
            </Modal>
        </>
    );
}

export default Dogs;
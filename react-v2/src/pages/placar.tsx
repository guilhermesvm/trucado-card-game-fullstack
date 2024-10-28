import { Container } from "react-bootstrap";
import Contador from "./components/Contador";

const Placar = () => {
    return (
        <Container className="mt-5 p-5">
            <div className="placarContainer">
                <Contador player="Nos"></Contador>
                <Contador player="Eles"></Contador>
            </div>
        </Container>
    )
}

export default Placar
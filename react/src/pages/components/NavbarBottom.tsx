import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarBottom(){
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" fixed="bottom" sticky="bottom">
                <Container>
                    <Nav>
                        <Nav.Link as={Link} href="/health" passHref>HealthCheck</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
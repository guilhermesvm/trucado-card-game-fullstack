import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarTop(){
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" fixed="top" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <Link href="/">Home</Link>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} href="/users" passHref>Usuarios</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} href="/matches" passHref>Partidas</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} href="/scoreboard" passHref>Placar</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
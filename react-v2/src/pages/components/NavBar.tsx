import Link from "next/link";
//import { useRouter } from 'next/router'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarTop = () => {
  //const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    //Pode ser necessário ou não.
    //router.push("/login");
  };

  return (
    <Navbar bg="dark" expand="md" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link href="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/partidas" passHref>
              Partidas
            </Nav.Link>
            <Nav.Link as={Link} href="/tutorial" passHref>
              Tutorial
            </Nav.Link>
            <Nav.Link as={Link} href="/usuarios" passHref>
              Usuários
            </Nav.Link>
            <Nav.Link as={Link} href="/usuariosTable" passHref>
              UsuáriosTabela
            </Nav.Link>
            <Nav.Link as={Link} href="/placar" passHref>
              Placar
            </Nav.Link>
            <Nav.Link as={Link} href="/cachorro" passHref>
              Cachorro do Dia
            </Nav.Link>
            <Nav.Link as={Link} href="/usuariosFixo" passHref>
              Usuarios Fixo
            </Nav.Link>
            <Nav.Link as={Link} href="#" passHref onClick={handleLogout}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;

import 'bootstrap/dist/css/bootstrap.min.css'
import "@/styles/globals.css";
import "@/styles/scoreboard.css";
import type { AppProps } from "next/app";
import NavbarTop from './components/NavbarTop';
import { Container } from 'react-bootstrap';
import NavbarBottom from './components/NavbarBottom';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}> 
      <NavbarTop></NavbarTop>
      <div className="flex-grow-1">
        <Container>
          <Component {...pageProps} />
        </Container>
      </div>
      <NavbarBottom></NavbarBottom>
    </div>
  );
}

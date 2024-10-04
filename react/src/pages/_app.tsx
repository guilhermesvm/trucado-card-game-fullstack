import 'bootstrap/dist/css/bootstrap.min.css'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavbarTop from './components/NavbarTop';
import { Container } from 'react-bootstrap';
import NavbarBottom from './components/NavbarBottom';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div>
      <NavbarTop></NavbarTop>
      <Container className="d-flex justify-content-center align-items-center" style={{height: "90vh"}}>
        <Component {...pageProps} />
      </Container>
      <NavbarBottom></NavbarBottom>
    </div>
  )
};

import { useRouter } from "next/router";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import '@/styles/placar.css';
import type { AppProps } from "next/app";
import Container from 'react-bootstrap/Container';
import NavbarTop from "./components/NavBar";
import FooterBar from './components/FooterBar';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login"; // Verifica se está na página de login

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      {!isLoginPage && <NavbarTop />} {/* Mostra Navbar apenas se não for login */}
      <main className="flex-grow-1">
        <Container fluid>
          <Component {...pageProps} />
        </Container>
      </main>
      {!isLoginPage && <FooterBar />} {/* Mostra Footer apenas se não for login */}
    </div>
  );
}

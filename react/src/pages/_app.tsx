import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/matches">Matches</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />;
    </div>
  )
};

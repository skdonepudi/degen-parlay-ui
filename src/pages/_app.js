import "@/styles/globals.css";
import { BrowserRouter as Router } from "react-router-dom";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

import type { AppProps } from "next/app";
import { ThemeProvider } from "../states/context/theme/ThemeContext";
import AuthProvider from "../states/context/user/AuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;

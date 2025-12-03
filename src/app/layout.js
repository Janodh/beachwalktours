import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Script from "next/script";

export const metadata = {
  title: "Beach Walk Tours",
  description: "Sri Lanka Tour Packages & Car with Driver",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <script
            src="https://www.google.com/recaptcha/api.js?render=6LeGmxgsAAAAAL_OhPQVlaPjL-4ioJln-A5uStEQ"
            async
          ></script>
          <script
            id="cookieyes"
            type="text/javascript"
            src="https://cdn-cookieyes.com/client_data/deaead8ee1b2af39f1ac25f3a71e8c9b/script.js"
            strategy="beforeInteractive"
          ></script>
        </header>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

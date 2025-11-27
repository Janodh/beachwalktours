import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata = {
  title: "Beach Walk Tours",
  description: "Sri Lanka Tour Packages & Car with Driver",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          src="https://www.google.com/recaptcha/api.js?render=6LeGmxgsAAAAAL_OhPQVlaPjL-4ioJln-A5uStEQ"
          async
        ></script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

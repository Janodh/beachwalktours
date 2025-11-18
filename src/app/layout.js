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
          src="https://www.google.com/recaptcha/api.js?render=6Lf2yBAsAAAAABXXZVgXIFXMYbEqc1KWb_25yfbn"
          async
        ></script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

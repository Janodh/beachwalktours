import Hero from "../components/Hero";
import VehicleCarousel from "../components/VehicleCarousel";
import ItineraryGrid from "../components/ItineraryGrid";
import FeatureList from "../components/FeatureList";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <Hero />
      <VehicleCarousel />
      <ItineraryGrid />
      <FeatureList />

      {/* Tawk.to Live Chat */}
      <Script id="tawk-script" strategy="afterInteractive">
        {`
          var Tawk_API = Tawk_API || {};
          var Tawk_LoadStart = new Date();
          (function() {
              var s1 = document.createElement("script");
              var s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/661a4a08a0c6737bd12b681c/1hrbb2d8i';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
          })();
        `}
      </Script>
    </main>
  );
}

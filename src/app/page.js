import Hero from "../components/Hero";
import VehicleCarousel from "../components/VehicleCarousel";
import ItineraryGrid from "../components/ItineraryGrid";
import FeatureList from "../components/FeatureList";


export default function Home() {
  return (
    <main>
      <Hero />
      <VehicleCarousel />
      <ItineraryGrid />
      <FeatureList />
    </main>
  );
}

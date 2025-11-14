import "./FeatureList.css";

export default function FeatureList() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-left">
          <h2 className="features-title">
            Why Choose Beach Walk Tours for Your Sri Lankan Adventure?
          </h2>

          <p className="features-intro">
            Why pick Beach Walk Tours for your Sri Lankan adventure with our Car
            and Driver Hire Service? Because we ensure exceptional travel
            experiences, premium chauffeur services, and tailor-made tour
            packages crafted for comfort and adventure.
          </p>

          <div className="feature-item">
            <span className="feature-number">01.</span>
            <h3>Car Rental with Driver in Sri Lanka</h3>
            <p>
              Explore Sri Lanka with our reliable and professional drivers.
              Enjoy scenic routes and cultural treasures with total comfort and
              safety.
            </p>
          </div>

          <div className="feature-item">
            <span className="feature-number">02.</span>
            <h3>Hotel Bookings & Stays</h3>
            <p>
              Luxury hotels, boutique stays, or city convenience — we arrange
              accommodation to perfectly match your travel plans.
            </p>
          </div>

          <div className="feature-item">
            <span className="feature-number">03.</span>
            <h3>Tailor-Made Tour Packages</h3>
            <p>
              From cultural tours to beach escapes, our custom itineraries
              ensure every traveler enjoys a personalized experience.
            </p>
          </div>

          <div className="feature-item">
            <span className="feature-number">04.</span>
            <h3>Safaris & Other Activities</h3>
            <p>
              Discover wildlife, beaches, waterfalls, ancient ruins, and
              adventure — all arranged seamlessly with expert guidance.
            </p>
          </div>
        </div>

        <div className="features-right">
          <div className="bubble bubble-lg">
            <img src="/images/family-beach.jpg" alt="Beach Family" />
          </div>

          <div className="bubble bubble-md">
            <img src="/images/girl-elephant.jpg" alt="Elephant" />
          </div>

          <div className="bubble bubble-sm">
            <img src="/images/surf.jpg" alt="Surfing" />
          </div>

          <div className="watercolor-bg"></div>
        </div>
      </div>
    </section>
  );
}

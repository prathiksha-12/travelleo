function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/travel.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-subtitle">EXPLORE THE WORLD</p>

        <h1>
          Your next
          <br />
          adventure awaits.
        </h1>

        <p className="hero-description">
          Discover beautiful destinations, explore famous places,
          check live weather, and plan your journey with AI.
        </p>

     <button
  className="hero-button"
  onClick={() =>
    document
      .getElementById("destinations")
      ?.scrollIntoView({ behavior: "smooth" })
  }
>
  Explore Destinations
</button>
      </div>
    </section>
  );
}

export default Hero;
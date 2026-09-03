const famousPlaces = [
  {
    name: "Eiffel Tower",
    location: "Paris, France",
    description:
      "One of the world's most recognizable landmarks and a symbol of Paris.",
    image:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Uluwatu Temple",
    location: "Bali, Indonesia",
    description:
      "A beautiful Balinese temple perched dramatically above the Indian Ocean.",
    image:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Burj Khalifa",
    location: "Dubai, UAE",
    description:
      "An iconic skyscraper offering spectacular views across the Dubai skyline.",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Fushimi Inari Shrine",
    location: "Kyoto, Japan",
    description:
      "Famous for its thousands of traditional torii gates winding through the hills.",
    image:
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=1000&q=80",
  },
];

function FamousPlaces() {
  return (
    <section className="places-section">
      <div className="section-heading">
        <p>ICONIC EXPERIENCES</p>
        <h2>Famous Places</h2>
        <span>
          Discover landmarks and places worth adding to your journey.
        </span>
      </div>

      <div className="places-grid">
        {famousPlaces.map((place) => (
          <article className="place-card" key={place.name}>
            <img src={place.image} alt={place.name} />

            <div className="place-content">
              <p>{place.location}</p>
              <h3>{place.name}</h3>
              <span>{place.description}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FamousPlaces;
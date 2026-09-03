import { useState } from "react";
import destinations from "../data/destinations";

function DestinationExplorer({ onDestinationSelect }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(search.toLowerCase()) ||
      destination.country.toLowerCase().includes(search.toLowerCase());

    const matchesRegion =
      region === "all" || destination.category === region;

    return matchesSearch && matchesRegion;
  });

  return (
    <section className="destinations-section" id="destinations">
      <div className="section-heading">
        <p>DISCOVER YOUR NEXT JOURNEY</p>

        <h2>Explore Destinations</h2>

        <span>
          Find beautiful places and start planning your next adventure.
        </span>
      </div>

      <div className="destination-filters">
        <input
          type="text"
          placeholder="Search destinations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="all">All Regions</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Middle East">Middle East</option>
        </select>
      </div>

      <div className="destination-grid">
        {filteredDestinations.map((destination) => (
          <article
            className="destination-card"
            key={destination.id}
          >
            <img
              src={destination.image}
              alt={destination.name}
            />

            <div className="destination-content">
              <span>{destination.category}</span>

              <h3>{destination.name}</h3>

              <p>{destination.country}</p>

              <small>{destination.description}</small>

              <button
  onClick={() => {
    onDestinationSelect(destination);
    setTimeout(() => {
      document
        .getElementById("destination-details")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}
>
  Explore →
</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DestinationExplorer;
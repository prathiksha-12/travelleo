import { useState } from "react";

function LocationPicker({ onLocationSelect }) {
  const [location, setLocation] = useState("");

  function handleLocation() {
    if (!navigator.geolocation) {
      setLocation("Location is not supported by your browser.");
      return;
    }

    setLocation("Getting your location...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLocation(
          `Location detected: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`
        );
      },
      () => {
        setLocation("Unable to access your location.");
      }
    );
  }

  function handleSearch() {
  if (!location.trim()) {
    setLocation("Please enter a city.");
    return;
  }

  const city = location.trim();

  setLocation(city);
  onLocationSelect(city);
}

  return (
    <section className="location-section" id="location">
      <div className="section-heading">
        <p>YOUR LOCATION</p>

        <h2>Where are you starting from?</h2>

        <span>
          Allow location access or search for a place to get started.
        </span>
      </div>

      <div className="location-actions">
        <button onClick={handleLocation}>
          Use My Location
        </button>

        <input
          type="text"
          placeholder="Search for a city..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button onClick={handleSearch}>
          Search
        </button>
      </div>

      {location && <p>{location}</p>}
    </section>
  );
}

export default LocationPicker;
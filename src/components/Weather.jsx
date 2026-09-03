import { useEffect, useState } from "react";
import { getWeather } from "../services/weatherService";

function Weather({ city }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWeather() {
      try {
  const data = await getWeather(city);
  setWeather(data);
} catch (err) {
  console.error("Weather error:", err);
  setError(err.message);
} finally {
  setLoading(false);
}
    }

    fetchWeather();
}, [city]);

  if (loading) {
    return (
      <section className="weather-section" id="weather">
        <div className="weather-container">
          <div className="weather-heading">
            <p>LIVE WEATHER</p>
            <h2>Know Before You Go</h2>
          </div>

          <div className="weather-card">
            <p>Loading weather...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="weather-section" id="weather">
        <div className="weather-container">
          <div className="weather-heading">
            <p>LIVE WEATHER</p>
            <h2>Know Before You Go</h2>
          </div>

          <div className="weather-card">
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="weather-section" id="weather">
      <div className="weather-container">
        <div className="weather-heading">
          <p>LIVE WEATHER</p>
          <h2>Know Before You Go</h2>
          <span>
            Check the current weather conditions for your destination.
          </span>
        </div>

        <div className="weather-card">
          <div>
            <p className="weather-location">
              {weather.name}, {weather.sys.country}
            </p>

            <h3>{Math.round(weather.main.temp)}°</h3>

            <span>{weather.weather[0].description}</span>
          </div>

          <div className="weather-details">
            <div>
              <small>Feels like</small>
              <strong>
                {Math.round(weather.main.feels_like)}°
              </strong>
            </div>

            <div>
              <small>Humidity</small>
              <strong>{weather.main.humidity}%</strong>
            </div>

            <div>
              <small>Wind</small>
              <strong>
                {Math.round(weather.wind.speed * 3.6)} km/h
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;
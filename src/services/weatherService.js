const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getWeather(city) {
 if (!API_KEY) {
  throw new Error("API key is NOT being read from .env");
}

console.log("OpenWeather API key loaded:", Boolean(API_KEY));

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error("OpenWeather error:", errorData);
    throw new Error(errorData.message || "Weather request failed.");
  }

  return response.json();
}
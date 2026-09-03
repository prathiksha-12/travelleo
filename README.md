# Travelleo 🌍

Travelleo is a responsive travel planning web application built with React and Vite. It helps users discover destinations, explore famous places, check real-time weather, choose a starting location, and plan trips with an AI travel assistant.

## Live Demo

https://travel-j7w0u8t4r-prathiksharaomanep-6470.vercel.app

## GitHub Repository

https://github.com/prathiksha-12/travelleo

## Features

- Responsive travel landing page with looping background video
- Destination explorer with search and region filtering
- Destination details view
- Famous places and attractions
- Location detection using browser Geolocation API
- City search for selecting a location
- Real-time weather information using OpenWeather API
- AI travel assistant powered by Google Gemini
- AI-assisted itinerary planning
- Responsive design for desktop and mobile
- Loading and error states for API requests

## Technologies Used

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- OpenWeather API
- Google Gemini API
- Vercel

## Project Structure

```text
travel-app/
├── api/
│   └── chat.js
├── public/
│   └── travel.mp4
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── .gitignore
├── package.json
└── vite.config.js
```

## APIs

### OpenWeather

Used to retrieve real-time weather information for selected cities.

### Google Gemini

Used to power the Travelleo AI travel assistant and provide travel planning suggestions and itinerary responses.

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_OPENWEATHER_API_KEY=your_openweather_api_key
GEMINI_API_KEY=your_gemini_api_key
```

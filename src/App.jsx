import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LocationPicker from "./components/LocationPicker";
import DestinationExplorer from "./components/DestinationExplorer";
import FamousPlaces from "./components/FamousPlaces";
import Weather from "./components/Weather";
import DestinationDetails from "./pages/DestinationDetails";
import AIAssistant from "./components/AIAssistant";


function App() {
  const [selectedLocation, setSelectedLocation] = useState("Paris");
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />
      <LocationPicker onLocationSelect={setSelectedLocation} />
      <DestinationExplorer onDestinationSelect={setSelectedDestination}
/>
      <FamousPlaces />
      <AIAssistant />
      <DestinationDetails destination={selectedDestination} />
      
      <Weather city={selectedLocation} />
    </>
  );
}

export default App;
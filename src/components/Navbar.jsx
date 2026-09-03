function Navbar() {
  return (
    <nav>
      <div>
        <h2>Travelleo</h2>
      </div>

      <div>
        <a href="#destinations">Destinations</a>
        <a href="#weather">Weather</a>
       <button
  onClick={() =>
    document.querySelector(".ai-floating-button")?.click()
  }
>
  Trip Planner
</button>
      </div>
    </nav>
  );
}

export default Navbar;
function DestinationDetails({ destination }) {
  if (!destination) {
    return null;
  }

  return (
    <section className="destination-details" id="destination-details">
      <div className="destination-details-content">
        <p>{destination.category}</p>

        <h1>{destination.name}</h1>

        <h3>{destination.country}</h3>

        <span>{destination.description}</span>

        <button
  onClick={() => {
    document.querySelector(".ai-floating-button")?.click();
  }}
>
  Plan Your Trip
</button>
      </div>
    </section>
  );
}

export default DestinationDetails;
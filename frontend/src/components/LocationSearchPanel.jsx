const LocationSearchPanel = ({ setVehiclePanel, setPanelOpen }) => {
  const locations = [
    {
      name: "New York",
      address: "350 5th Ave, New York, NY 10118",
      city: "New York",
      country: "USA",
      coordinates: { lat: 40.7484, lng: -73.9967 },
    },
    {
      name: "Eiffel Tower",
      address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris",
      city: "Paris",
      country: "France",
      coordinates: { lat: 48.8584, lng: 2.2945 },
    },
  ];
  return (
    <div className="">
      {/* this is just a sample data */}
      {locations.map((location) => (
        <div
          onClick={() => {
            setVehiclePanel(true);
            setPanelOpen(false);
          }}
          key={location.name}
          className="flex items-center border-2 active:border-black border-gray-100 rounded-xl p-3 my-2  justify-start gap-4"
        >
          <h2 className="bg-[#eee] h-10 w-10 rounded-full flex items-center justify-center">
            <i className="ri-map-pin-line "></i>
          </h2>
          <h4 className="font-medium">{location.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;

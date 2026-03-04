const LocationSearchPanel = () => {
  return (
    <div className="">
      {/* this is just a sample data */}
      <div className="flex items-center my-4  justify-start gap-4">
        <h2 className="bg-[#eee] h-10 w-10 rounded-full flex items-center justify-center">
          <i className="ri-map-pin-line "></i>
        </h2>
        <h4 className="font-medium">24B , New York</h4>
      </div>
      <div className="flex items-center my-4  justify-start gap-4">
        <h2 className="bg-[#eee] h-10 w-10 rounded-full flex items-center justify-center">
          <i className="ri-map-pin-line "></i>
        </h2>
        <h4 className="font-medium">24B , New York</h4>
      </div>{" "}
    </div>
  );
};

export default LocationSearchPanel;

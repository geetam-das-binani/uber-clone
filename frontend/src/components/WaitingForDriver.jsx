const WaitingForDriver = ({
  setVehiclePanel,
  setconfirmRidePanel,
  setVehicleFound,
  setWaitingForDriver,
  waitingForDriver,
}) => {
  return (
    <div className="">
      <h5 className="p-3 text-center text-2xl">
        <i
          onClick={() => {
            setVehiclePanel(false);
            setconfirmRidePanel(false);
            setVehicleFound(false);
            setWaitingForDriver(false);
          }}
          className="ri-arrow-down-line"
        ></i>
      </h5>
      <div className="flex items-center justify-between">
        <img
          src="https://th.bing.com/th/id/OIP.2SyVm_Yz4l2O0Nz_upaCFgHaF7?w=126&h=108&c=7&qlt=90&bgcl=a29f76&r=0&o=6&dpr=1.3&pid=13.1"
          alt="carimage"
          className="h-16"
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Driver John </h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">ABC123 </h4>
          <p className="text-sm text-gray-600">Maruti 800</p>
        </div>
      </div>

      <div className="flex gap-2 justify-between items-center flex-col">
        <div className="w-full mb-2">
          <div className="flex gap-5 items-center p-2 border-b-2">
            <i className="ri-map-pin-user-fill text-lg"></i>
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankarita Talab,Ahmedabad
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-center p-2 border-b-2">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankarita Talab,Ahmedabad
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-center p-2 ">
            {" "}
            <i className="ri-currency-line text-lg"></i>
            <div className="">
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;

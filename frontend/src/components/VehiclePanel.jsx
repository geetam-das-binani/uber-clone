const VehiclePanel = ({ setVehiclePanel, setconfirmRidePanel }) => {
  return (
    <>
      <h5 className="p-1 text-center text-2xl">
        <i
          onClick={() => setVehiclePanel(false)}
          className="ri-arrow-down-line"
        ></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5"> Choose a Vehicle Type</h3>
      <div onClick={()=>setconfirmRidePanel(true)} className="flex active:border-black active:border-2   rounded-xl items-center p-3 justify-between w-full mb-2">
        <img
          src="https://th.bing.com/th/id/OIP.2SyVm_Yz4l2O0Nz_upaCFgHaF7?w=126&h=108&c=7&qlt=90&bgcl=a29f76&r=0&o=6&dpr=1.3&pid=13.1"
          alt="car image"
          className="h-20"
        />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>
            </span>
            4
          </h4>
          <h5 className="font-medium text-sm">2 mins away · Arrives 3:45 PM</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹193.20</h2>
      </div>
      <div onClick={()=>setconfirmRidePanel(true)} className="flex  active:border-black active:border-2  rounded-xl items-center p-3 justify-between w-full mb-2">
        <img
          src="https://th.bing.com/th/id/OIP.eQB0gi41q925wUMFN6QieQHaHk?w=176&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt="motorcycle"
          className="h-20 bg-transparent"
        />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>
            </span>
            1
          </h4>
          <h5 className="font-medium text-sm">5 mins away · Arrives 9:45 AM</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹65</h2>
      </div>
      <div onClick={()=>setconfirmRidePanel(true)} className="flex active:border-black active:border-2    rounded-xl items-center p-3 justify-between w-full mb-2">
        <img
          src="https://th.bing.com/th/id/OIP.h989F5_2QghpWh2kea_NkQHaHE?w=149&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt="auto"
          className="h-20 bg-transparent"
        />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-base">
            Auto{" "}
            <span>
              <i className="ri-user-3-fill"></i>
            </span>
            3
          </h4>
          <h5 className="font-medium text-sm">
            10 mins away · Arrives 3.20 PM
          </h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, auto rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹118.60</h2>
      </div>
    </>
  );
};

export default VehiclePanel;

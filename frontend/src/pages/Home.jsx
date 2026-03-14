import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        opacity: 1,
        padding: 20,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0px",
        opacity: 0,
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0%)",
        opacity: 1,
        duration: 0.5,
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [vehiclePanel]);
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uberlogo"
        className="w-16 absolute left-5 top-5"
      />
      <div className="h-screen w-screen">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="mapimage"
        />
      </div>

      <div className="absolute top-0 w-full h-screen flex flex-col justify-end">
        <div className="h-[30%] bg-white p-6 relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute top-6 text-2xl right-6 opacity-0"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form onSubmit={handleSubmit}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              value={pickup}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setpickup(e.target.value)}
              placeholder="Add a pickup location"
            />
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              value={destination}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 opacity-0 bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="bottom-0 fixed  translate-y-full opacity-0 z-10 px-3 py-8 bg-white w-full"
      >
        <h5 className="p-3 text-center text-2xl">
          <i
            onClick={() => setVehiclePanel(false)}
            className="ri-arrow-down-line"
          ></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5"> Choose a Vehicle Type</h3>
        <div className="flex active:border-black active:border-2   rounded-xl items-center p-3 justify-between w-full mb-2">
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
            <h5 className="font-medium text-sm">
              2 mins away · Arrives 3:45 PM
            </h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹193.20</h2>
        </div>
        <div className="flex  active:border-black active:border-2  rounded-xl items-center p-3 justify-between w-full mb-2">
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
            <h5 className="font-medium text-sm">
              5 mins away · Arrives 9:45 AM
            </h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, motorcycle rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹65</h2>
        </div>
        <div className="flex active:border-black active:border-2    rounded-xl items-center p-3 justify-between w-full mb-2">
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
      </div>
    </div>
  );
};

export default Home;

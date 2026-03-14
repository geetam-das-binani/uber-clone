const ConfirmRide = ({ setVehiclePanel, setconfirmRidePanel }) => {
  return (
    <div className="">
      <h5 className="p-3 text-center text-2xl">
        <i
          onClick={() => {
            setVehiclePanel(false);
            setconfirmRidePanel(false);
          }}
          className="ri-arrow-down-line"
        ></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5"> Confirm your ride</h3>
      <div className="flex justify-between items-center flex-col">
        <img
          src="https://th.bing.com/th/id/OIP.2SyVm_Yz4l2O0Nz_upaCFgHaF7?w=126&h=108&c=7&qlt=90&bgcl=a29f76&r=0&o=6&dpr=1.3&pid=13.1"
          alt="carimage"
        />
        <div>asas</div>
      </div>
      <div>
        <button className="w-full"> Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmRide;

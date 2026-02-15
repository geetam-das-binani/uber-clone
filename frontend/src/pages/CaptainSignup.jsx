import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCaptainContext } from "../context/captainContext";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  
  // Vehicle details state
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("car");

  const { setCaptain } = useCaptainContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const newCaptain = {
        fullName: {
          firstName: firstname,
          lastName: lastname,
        },
        email,
        password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: parseInt(vehicleCapacity),
          vehicleType: vehicleType,
        },
      };

      const url = `${import.meta.env.VITE_BASE_URL}/api/captain/register`;
      const response = await axios.post(url, newCaptain, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);

      if (response.status === 201) {
        const data = response.data;
        console.log(data.captain);
        setCaptain({
          email: data.captain.email,
          fullName: {
            firstName: data.captain.fullName.firstName,
            lastName: data.captain.fullName.lastName,
          },
          vehicle: data.captain.vehicle,
        });
        navigate("/captain-login");
      }
    } catch (error) {
      console.log(error);
      // Optionally add error handling UI feedback here
    } finally {
      setEmail("");
      setPassword("");
      setFirstname("");
      setLastname("");
      setVehicleColor("");
      setVehiclePlate("");
      setVehicleCapacity("");
      setVehicleType("car");
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form onSubmit={handleSubmit}>
          {/* Name Fields */}
          <h3 className="text-base font-medium mb-2">What's our Captain's name</h3>
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First name"
              required
            />
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last name"
            />
          </div>

          {/* Email Field */}
          <h3 className="text-base font-medium mb-2">What's our Captain's email</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="youremail@example.com"
            required
          />

          {/* Password Field */}
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
          />

          {/* Vehicle Details Section */}
          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          
          {/* Vehicle Type */}
          <h4 className="text-base font-medium mb-2">Vehicle Type</h4>
          <select
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
          >
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="motorcycle">Motorcycle</option>
          </select>

          {/* Vehicle Color and Plate */}
          <div className="flex gap-4 mb-6">
            <div className="w-1/2">
              <h4 className="text-base font-medium mb-2">Vehicle Color</h4>
              <input
                className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-sm"
                type="text"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                placeholder="e.g., Red"
                required
                minLength={3}
              />
            </div>
            <div className="w-1/2">
              <h4 className="text-base font-medium mb-2">License Plate</h4>
              <input
                className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-sm"
                type="text"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                placeholder="e.g., ABC-1234"
                required
                minLength={3}
              />
            </div>
          </div>

          {/* Vehicle Capacity */}
          <h4 className="text-base font-medium mb-2">Vehicle Capacity</h4>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="number"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            placeholder="Number of passengers"
            required
            min={1}
          />

          <button
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>

      <div>
        <p className="text-[10px] leading-tight">
          By proceeding, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
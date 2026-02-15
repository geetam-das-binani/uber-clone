import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCaptainContext } from "../context/captainContext";
import axios from "axios";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCaptain } = useCaptainContext();
    const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const url = `${import.meta.env.VITE_BASE_URL}/api/captain/login`;
      const response = await axios.post(
        url,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      console.log(response);

      if (response.status === 200) {
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
        

        navigate("/captain-home");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber-logo"
        />
        <form onSubmit={handleSubmit}>
          <h3 className="mb-2 font-medium text-lg">What's your email</h3>
          <input
            className="bg-[#eeeeee]  mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="youremail@exmaple.com"
          />
          <h3 className="mb-2 font-medium text-lg">Enter Password</h3>
          <input
            className="bg-[#eeeeee]  mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button
            className="bg-[#111]  mb-3 font-semibold rounded px-4 py-2  w-full text-white placeholder:text-base"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet? <Link to="/captain-signup">Register as a Captain</Link>
        </p>
      </div>

      <div>
        <Link
          to={"/login"}
          className="bg-[#d5622d]   flex items-center justify-center  mb-5 font-semibold rounded px-4 py-2  w-full text-white placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;

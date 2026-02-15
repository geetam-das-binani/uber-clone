import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../context/userContext";
const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newUser = {
        fullName: {
          firstName: firstname,
          lastName: lastname,
        },
        email,
        password,
      };

      const url = `${import.meta.env.VITE_BASE_URL}/api/user/register`;
      const response = await axios.post(url, newUser, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);

      if (response.status === 201) {
        const data = response.data;
        console.log(data.user);
        setUser({
          email: data.user.email,
          fullName: {
            firstName: data.user.fullName.firstName,
            lastName: data.user.fullName.lastName,
          },
        });

        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setEmail("");
      setPassword("");
      setFirstname("");
      setLastname("");
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
          <h3 className="mb-2 font-medium text-base">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeeeee]  w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm"
              type="text"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First name"
            />{" "}
            <input
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm"
              type="text"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last name"
            />
          </div>
          <h3 className="mb-2 font-medium text-base">What's your email</h3>
          <input
            className="bg-[#eeeeee]  mb-5  rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="youremail@exmaple.com"
          />
          <h3 className="mb-2 font-medium text-base">Enter Password</h3>
          <input
            className="bg-[#eeeeee]  mb-5  rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button
            className="bg-[#111]  mb-5 font-semibold rounded px-4 py-2  w-full text-white placeholder:text-base"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>

      <div>
        <p className="text-xs text-center leading-tight">
          By proceeding, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;

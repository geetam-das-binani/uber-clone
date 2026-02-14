import { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setuserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setuserData({
      email,
      password,
    });
    setEmail("");
    setPassword("");
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
          Don't have an account? <Link to="/signup">Create new Account</Link>
        </p>
      </div>

      <div>
        <Link to={"/captain-login"} className="bg-[#10b461]   flex items-center justify-center  mb-5 font-semibold rounded px-4 py-2  w-full text-white placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;

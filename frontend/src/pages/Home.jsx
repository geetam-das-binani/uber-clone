import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-[url(https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=768/height=768/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9iOGMzOWRlMC02ZTEzLTQ4NWItYmE0NS02NjUxMTE3MGM2MmEuanBn)] bg-cover h-screen bg-center w-full pt-8 bg-red-400 flex justify-between flex-col">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber-logo"
        />

        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-3xl font-bold">Get Started</h2>
          <Link
            to={"/login"}
            className="py-3 flex justify-center items-center  text-white w-full rounded mt-5 bg-black"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

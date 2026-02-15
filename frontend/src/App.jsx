import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "./context/userContext.jsx";
import Loader from "./loader/Loader.jsx";

const UserProtectedWrapper = lazy(
  () => import("./pages/UserProtectedWrapper.jsx"),
);
const IndexPage = lazy(() => import("./pages/Index.jsx"));
const HomePage = lazy(() => import("./pages/Home.jsx"));
const UserLoginPage = lazy(() => import("./pages/UserLogin.jsx"));
const UserSignUpPage = lazy(() => import("./pages/UserSignup.jsx"));
const CaptainLoginPage = lazy(() => import("./pages/CaptainLogin.jsx"));
const CaptainSignUpPage = lazy(() => import("./pages/CaptainSignup.jsx"));

const App = () => {
  const { setUser, setLoading } = useUserContext();

  const fetchUser = async () => {
    try {
      const url = `${import.meta.env.VITE_BASE_URL}/api/user/profile`;
      const response = await axios.get(url, {
        withCredentials: true,
      });

      if (response.status === 200) {
        const data = response.data;

        setUser({
          email: data.user.email,
          fullName: {
            firstName: data.user.fullName.firstName,
            lastName: data.user.fullName.lastName,
          },
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <HomePage />
            </UserProtectedWrapper>
          }
        />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/signup" element={<UserSignUpPage />} />
        <Route path="/captain-login" element={<CaptainLoginPage />} />
        <Route path="/captain-signup" element={<CaptainSignUpPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;

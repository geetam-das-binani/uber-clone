import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "./context/userContext.jsx";
import Loader from "./loader/Loader.jsx";
import { useCaptainContext } from "./context/captainContext.jsx";

const UserProtectedWrapper = lazy(
  () => import("./pages/UserProtectedWrapper.jsx"),
);
const CaptainProtectedWrapper = lazy(
  () => import("./pages/CaptainProtectedWrapper.jsx"),
);
const IndexPage = lazy(() => import("./pages/Index.jsx"));
const HomePage = lazy(() => import("./pages/Home.jsx"));
const CaptainHomePage = lazy(() => import("./pages/CaptainHome.jsx"));
const UserLoginPage = lazy(() => import("./pages/UserLogin.jsx"));
const UserSignUpPage = lazy(() => import("./pages/UserSignup.jsx"));
const CaptainLoginPage = lazy(() => import("./pages/CaptainLogin.jsx"));
const CaptainSignUpPage = lazy(() => import("./pages/CaptainSignup.jsx"));
const UserLogoutPage = lazy(() => import("./pages/UserLogout.jsx"));
const CaptainLogoutPage = lazy(() => import("./pages/CaptainLogout.jsx"));

const App = () => {
  const { setUser, setLoading } = useUserContext();
  const { setCaptain, setLoading: setCaptainLoading } = useCaptainContext();

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
  const fetchCaptain = async () => {
    try {
      const url = `${import.meta.env.VITE_BASE_URL}/api/captain/profile`;
      const response = await axios.get(url, {
        withCredentials: true,
      });

      if (response.status === 200) {
        const data = response.data;

        setCaptain({
          email: data.captain.email,
          fullName: {
            firstName: data.captain.fullName.firstName,
            lastName: data.captain.fullName.lastName,
          },
          vehicle: data.captain.vehicle,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setCaptainLoading(false);
    }
  };

  const fetchUserAndCaptain = async () => {
    await Promise.all([fetchUser(), fetchCaptain()]);
  };
  useEffect(() => {
    fetchUserAndCaptain();
  }, []);
  return (
    <Suspense fallback={<Loader />}>
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
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrapper>
              <CaptainHomePage />
            </CaptainProtectedWrapper>
          }
        />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/signup" element={<UserSignUpPage />} />
        <Route path="/captain-login" element={<CaptainLoginPage />} />
        <Route path="/captain-signup" element={<CaptainSignUpPage />} />
        <Route
          path="/user-logout"
          element={
            <UserProtectedWrapper>
              <UserLogoutPage />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/captain-logout"
          element={
            <UserProtectedWrapper>
              <CaptainLogoutPage />
            </UserProtectedWrapper>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default App;

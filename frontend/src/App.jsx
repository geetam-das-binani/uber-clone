import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/Home.jsx"));
const UserLoginPage = lazy(() => import("./pages/UserLogin.jsx"));
const UserSignUpPage = lazy(() => import("./pages/UserSignup.jsx"));
const CaptainLoginPage = lazy(() => import("./pages/CaptainLogin.jsx"));
const CaptainSignUpPage = lazy(() => import("./pages/CaptainSignup.jsx"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/signup" element={<UserSignUpPage />} />
        <Route path="/captain-login" element={<CaptainLoginPage />} />
        <Route path="/captain-signup" element={<CaptainSignUpPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;

import { Navigate } from "react-router-dom";
import { useCaptainContext } from "../context/captainContext";
import Loader from "../loader/Loader";

const CaptainProtectedWrapper = ({ children }) => {
  const { captain, loading } = useCaptainContext();

  if (loading) {
    return <Loader />;
  }

  if (!captain?.email) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default CaptainProtectedWrapper;

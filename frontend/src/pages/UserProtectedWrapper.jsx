import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import Loader from "../loader/Loader";


const UserProtectedWrapper = ({ children }) => {
  const { user, loading } = useUserContext();

  if (loading) {
    return <Loader/>
  }

  if (!user?.email) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default UserProtectedWrapper;

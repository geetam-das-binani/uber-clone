import axios from "axios";
import { useEffect } from "react";
const UserLogout = () => {
  const logoutUser = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}/api/user/logout`;
    await axios
      .get(`${url}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    logoutUser();
  }, []);

  return <></>;
};

export default UserLogout;

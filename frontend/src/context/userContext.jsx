import { createContext, useContext } from "react";

const UserDataContext = createContext();

const UserContext = ({ children }) => {
  return <UserDataContext.Provider value={{}}>{children}</UserDataContext.Provider>;
};

export default UserContext;
export const useUserContext = () => useContext(UserDataContext);

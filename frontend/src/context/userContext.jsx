import { createContext, useContext, useState } from "react";

const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <UserDataContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;


export const useUserContext = () => useContext(UserDataContext);

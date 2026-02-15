import { createContext, useContext, useState } from "react";

const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <CaptainDataContext.Provider
      value={{
        captain,
        setCaptain,
        loading,
        setLoading,
      }}
    >
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;

export const useCaptainContext = () => useContext(CaptainDataContext);

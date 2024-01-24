import React, { ReactNode, createContext, useContext, useState } from 'react';


interface LogedContextProps {
  loged: boolean;
  setLoged: React.Dispatch<React.SetStateAction<boolean>>;
}


const LogedContext = createContext<LogedContextProps>({} as LogedContextProps);


const LogedProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loged, setLoged] = useState<boolean>(false);

  return (
    <LogedContext.Provider value={{ loged, setLoged }}>
      {children}
    </LogedContext.Provider>
  );
};

export { LogedProvider };
export default LogedContext;
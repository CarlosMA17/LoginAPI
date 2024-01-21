import { Context, Dispatch, ReactNode, createContext, useContext, useState, SetStateAction  } from 'react'

export type UserData = {
    name: string;
    email: string;
}

export type UserContextType = {
    user: UserData | null;
    setUserData: Dispatch<SetStateAction<UserData | null>>;
}

interface UserProviderProps {
    children: ReactNode;
  }

export const UserContext = createContext<UserContextType | null>({} as UserContextType);

export const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUserData] = useState<UserData | null>(null);

    return (
        <UserContext.Provider value={{user, setUserData}} >
            {children}
        </UserContext.Provider>
    )
}

export const useUserAuth = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUserAuth must be used within a UserProvider');
    }
    return context;
  };
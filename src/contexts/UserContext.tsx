import {createContext, useState, ReactNode} from 'react';
import {UserDetails} from '../interfaces'

const UserContext = createContext<UserContextInterface>({} as UserContextInterface);

interface UserContextInterface {
  userData: UserDetails 
  updateUserData: (userData: UserDetails) => void
}

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({children}) => {
  const [userData, setUserData] = useState<UserDetails>({} as UserDetails);
  
  const updateUserData = (userData: UserDetails) => {
    setUserData(userData)
  }

  return (
    <UserContext.Provider
      value = {{
        userData,
        updateUserData
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContextProvider , UserContext };


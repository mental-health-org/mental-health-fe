import {createContext, useState, ReactNode, useEffect} from 'react';
import {UserDetails} from '../interfaces'

const UserContext = createContext<UserContextInterface>({} as UserContextInterface);

// import {User} from '../interfaces';

//To do --> need to update user based on sign in page.

interface UserContextInterface {
  userData: UserDetails 
}


interface UserContextProviderProps {
  children: ReactNode;
  // userData: UserDetails | null;
  // any other props that come into the component
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({children}) => {
  const [userData, setUserData] = useState<UserDetails>({} as UserDetails);
  
//TO DO AFTER OAUTH
  useEffect(() => {
    setUserData({
    username: 'stephanie',
    title: 'counselor',
    id: 2,
    created_at: 'test',
    updated_at: 'test'
  })
}, [] )


  return (
    <UserContext.Provider
      value = {{
        userData
      }}
    >
      {children}
    </UserContext.Provider>
  );

}

export { UserContextProvider , UserContext };


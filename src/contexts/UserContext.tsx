import {createContext, useState, ReactNode, useEffect} from 'react';
import {UserDetails} from '../interfaces'

const UserContext = createContext<UserContextInterface>({} as UserContextInterface);

// import {User} from '../interfaces';

//To do --> need to update user based on sign in page.

interface UserContextInterface {
  userData: UserDetails 
  updateUserData: (userData: UserDetails) => void
}


interface UserContextProviderProps {
  children: ReactNode;
  // userData: UserDetails | null;
  // any other props that come into the component
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({children}) => {
  const [userData, setUserData] = useState<UserDetails>({} as UserDetails);


// connections: {connected: Array(0), pending: Array(0)}
// created_at: "2021-11-23T14:02:01.486247Z"
// email: "stephaniemagdic@gmail.com"
// id: 37
// is_active: true
// is_admin: false
// is_staff: false
// is_superuser: false
// last_login: "2021-11-23T14:03:38.803965Z"
// title: "Linked In User"
// updated_at: "2021-11-23T14:02:01.552010Z"
// username: "StephanieM_874029361"

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


import './logoutButton.scss';
import { useCookies } from "react-cookie";

interface LogoutButtonProps {
  // removeToken: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps>  = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies();

  const logout = () => {
    console.log("I am clicked")
    // clear session storage here and clear token from app state.
    localStorage.removeItem("currentUser")
    // removeCookie('currentUser')
    // console.log("cookies after logout", cookies);
   
    
    //update below before deployment:
    // window.location.href = 'https://mental-health-fe.herokuapp.com/'
    // http://localhost:3000/
    window.location.href = 'http://localhost:3000/'
    
  }


  return <div className="LogoutButton" onClick={()=>logout()}>
      Logout
    </div>
}

export default LogoutButton;
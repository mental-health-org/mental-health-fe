import './logoutButton.scss';

const LogoutButton: React.FC<LogoutButtonProps>  = (props) => {

  const logout = () => {
    localStorage.removeItem("currentUser")
    // window.location.href = 'https://mental-health-fe.herokuapp.com/'
    // http://localhost:3000/
    window.location.href = 'http://localhost:3000/'
    
  }


  return <div className="LogoutButton" onClick={()=>logout()}>
      Logout
    </div>
}

export default LogoutButton;
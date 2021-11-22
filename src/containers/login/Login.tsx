// @ts-ignore
// @ts-nocheck

import Header from '../../components/header/Header'
import './login.scss'

const Login = (props) => {

  const redirect = () => {
    window.location.href = "https://developer-mental-health-org.herokuapp.com/auth/linkedin/login"
    props.setChangedURL()
  };

  const redirectButton = (<button onClick={()=> redirect()} className='login--btn'>Sign in with Linkedin</button>)

  return <div className="Login">
    <Header headerTitle='HeLP Network' redirect={redirectButton} />
  </div>
}

export default Login;




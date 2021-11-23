// @ts-ignore
// @ts-nocheck

import Header from '../../components/header/Header'
import { Link } from 'react-router-dom'
import './login.scss'

const Login = (props) => {

  const redirect = () => {
    window.location.href = "https://developer-mental-health-org.herokuapp.com/auth/linkedin/login"
    props.setChangedURL()
  };

  const redirectButton = (<button onClick={()=> redirect()} className='login--btn'>Sign in with Linkedin</button>)

  return <div className="Login">
    <Header headerTitle='HeLP Network' />

    <div className='LoginWrapper--container'>
      {redirectButton}

      <h4 className='SignupText--h4'>Don't have a LinkedIn profile yet?</h4>
        <a 
          className='SignUpLink--a'
          href="https://www.linkedin.com/signup/cold-join?trk=guest_homepage-basic_nav-header-join"
          target='_blank'
          rel="noreferrer"
        >Sign Up</a>
    </div>

  </div>
}

export default Login;
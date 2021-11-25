// @ts-ignore
// @ts-nocheck


import './login.scss'

const Login = (props) => {
//// Need to keep the next 7-8 lines of logic for redirect in login prop.
  const redirect = () => {
    window.location.href = "https://developer-mental-health-org.herokuapp.com/auth/linkedin/login"
    props.setChangedURL()
  };

  const redirectButton = (<button onClick={()=> redirect()} className='login--btn'>Sign in with Linkedin</button>)
///
  return <div className="Login">
   {/* Matt is styling this piece */}
        {redirectButton}
      
  </div>
}

export default Login;




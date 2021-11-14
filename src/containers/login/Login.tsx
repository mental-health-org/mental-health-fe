// @ts-ignore
// @ts-nocheck

import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {useEffect, useState } from 'react'
import {postForAccess} from '../../utils/util'


const Login = () => {
  const redirect = () => {
   window.location.href = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&scope=r_liteprofile&client_id=86n4l10lucphsb&redirect_uri=https%3A%2F%2Fmental-health-fe.herokuapp.com";

   // this is email address as well.

  //  window.location.href = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&scope=r_emailaddress&client_id=86n4l10lucphsb&redirect_uri=https%3A%2F%2Fmental-health-fe.herokuapp.com";
  //

  // AQRhiQdYcaG_O5R0nnsjvkFH9DX_OL_hVLHgYxyZsxk0fOgkF1kEqae0J0qqQ9LvH90ZWUnqlPptUC248oeYQAxf9po-W22PNLublF6taa0aGO6Df69q0pA7MDuzzokgfrLCcPXMEuXevrQeJU9bkYqbqvMd-N2ln1tINIZdEAHlqU71PlUjIW1Vmb_GFR-bFRlt0e-TOccj0ZBb7qY
   
  };

  return <div className="Login">
    <button onClick={()=> redirect()}>Login Via Linked in by Clicking here!</button>
  </div>
}

export default Login;




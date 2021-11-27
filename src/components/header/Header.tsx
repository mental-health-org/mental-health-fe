import React from 'react'
import '../../styles/Header.scss'
import mentalHealthLogo from '../../images/mental_health_logo1.png';
import  LogoutButton from '../logoutButton/LogoutButton'

interface HeaderProps {
  headerTitle: string;
  // removeToken: () => void;
}

const Header: React.FC<HeaderProps> = ({ headerTitle}) => {
  return (
    <header className='Header--container'>
      <LogoutButton />
      <div className='BottomBorder--border heading--container'>
       <img src={mentalHealthLogo} alt="head outline with lotus flower" className="logo--landing-page"></img>
      {headerTitle !== 'HeLP Network' && <h1 className='HeaderTitle--h1'>{headerTitle}</h1>} 
        {headerTitle === 'HeLP Network' && <>
          <h1 className='HeaderTitle--h1'>H<span className="letter-standout">e</span>LP Network</h1>
          <p className="subheading">Find answers to important legal and ethical questions</p>
        </>} 
      </div>
    </header>
  )
}

export default Header;
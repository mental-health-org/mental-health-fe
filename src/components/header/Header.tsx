import React from 'react'
import '../../styles/Header.scss'
import mentalHealthLogo from '../../images/mental_health_logo1.png';

interface HeaderProps {
  headerTitle: string;
}

const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
  return (
    <header className='Header--container'>
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
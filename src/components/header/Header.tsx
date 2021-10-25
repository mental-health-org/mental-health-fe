import React from 'react'
import '../../styles/Header.scss'


interface HeaderProps {
  headerTitle: string;
}

const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
  return (
    <header className='Header--container'>
      <div className='BottomBorder--border'>
        <h1 className='HeaderTitle--h1'>{headerTitle}</h1>
      </div>
    </header>
  )
}

export default Header;
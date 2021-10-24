import React from 'react'
import '../../styles/Header.scss'

interface HeaderProps {
  headerTitle: string;
}

const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
  return (
    <header>
      <h1 className='HeaderTitle--h1'>{headerTitle}</h1>
    </header>
  )
}

export default Header;
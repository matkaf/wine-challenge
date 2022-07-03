import React from 'react'
import Image from 'next/image'

import { Nav, StyledHeader, IconsWrapper, NavWrapper } from './styled'

import WineLogo from '../../assets/wine.svg'
import ProfileIcon from '@/images/profile.svg'
import SearchIcon from '@/images/search.svg'
import CartIcon from '@/images/winebox.svg'

const Header = () => {
  return (
    <StyledHeader>
      <NavWrapper>
        <Image
          src={WineLogo}
          alt="Wine"
          width={103}
          height={30}
          layout='fixed'
        />
        <Nav>
          <a href='#'>Clube</a>
          <a href='#'>Loja</a>
          <a href='#'>Produtores</a>
          <a href='#'>Ofertas</a>
          <a href='#'>Eventos</a>
        </Nav>
      </NavWrapper>

      <IconsWrapper>
        <Image
          src={SearchIcon}
          alt='Profile Icon'
          width={45}
          height={45}
        />
        <Image
          src={ProfileIcon}
          alt='Profile Icon'
          width={45}
          height={45}
        />
        <Image
          src={CartIcon}
          alt='Profile Icon'
          width={45}
          height={45}
        />
      </IconsWrapper>
    </StyledHeader>
  )
}

export default Header

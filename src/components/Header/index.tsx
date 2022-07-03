import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'

import { Nav, StyledHeader, IconsWrapper, NavWrapper, CartQuantity, Span } from './styled'

import WineLogo from '../../assets/wine.svg'
import ProfileIcon from '@/images/profile.svg'
import SearchIcon from '@/images/search.svg'
import CartIcon from '@/images/winebox.svg'
import Link from 'next/link'
import AppContext from 'context/AppContext'

const Header = () => {
  const { cartQuantity, setCartQuantity } = useContext(AppContext)

  useEffect(() => {
    const local = localStorage.getItem('cart')

    if (local) {
      const cart = JSON.parse(local)
      setCartQuantity(cart.length) 
    }
  }, [cartQuantity, setCartQuantity])

  return (
    <StyledHeader>
      <NavWrapper>
        <Link href='/'>
          <Image
            src={WineLogo}
            alt="Wine"
            width={103}
            height={30}
            layout='fixed'
          />
        </Link>
        <Nav>
          <a href='#'>Clube</a>
          <Link href='/'>
            <a href='#'>Loja</a>
          </Link>
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
        <Link href='/checkout' passHref={true}>
          <Span>
            <Image
              src={CartIcon}
              alt='Profile Icon'
              width={45}
              height={45}
            />
            <CartQuantity><p>{cartQuantity}</p></CartQuantity>
          </Span>
        </Link>
      </IconsWrapper>
    </StyledHeader>
  )
}

export default Header

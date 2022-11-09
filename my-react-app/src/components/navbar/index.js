// import React, {useState}from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => { 
  return(
    <>
      <Nav>
        <Bars />

        <NavMenu>
        <NavLink to='/Home' activestyle>
            Hjem
          </NavLink>
          <NavLink to='/Store' activestyle>
            Butikk
          </NavLink>
          <NavLink to='/About' activestyle>
            Om Oss
          </NavLink>
          <NavLink to='/Contact' activestyle>
            Kontakt oss
          </NavLink>
          <NavBtn>
            <NavBtnLink to='/Shopingcart' activestyle>Handlekurv</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar
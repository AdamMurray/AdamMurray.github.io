import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import { Routes } from './routes'

const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 0 10px;
`

const NavLink = styled.div`
  font-weight: bold;
  min-width: 60px;
  border-bottom: 2px solid #ed6bff;
  margin: 0 5px;
  padding: 10px 15px;
  text-align: center;
  letter-spacing: 3px;
  font-size: 14px;

  a {
    // color: #fff;
    color: #ed6bff;

    text-decoration: none;
    text-transform: uppercase;
  }
`

class App extends Component {
  render() {
    return (
      <>
        {/* NAV BAR | Home, CV links */}
        <Nav>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/cv">CV</Link>
          </NavLink>
        </Nav>
        <Routes />
      </>
    )
  }
}

export default App

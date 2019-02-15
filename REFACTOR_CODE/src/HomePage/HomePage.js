import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const HomePageWrapper = styled.div`
  ::-moz-selection {
    /* Code for Firefox */
    color: #eb12ff;
    background: black;
  }

  ::selection {
    color: #eb12ff;
    background: black;
  }

  height: 100vh;
  font-size: 16px;
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  background: linear-gradient(
    146deg,
    #000000,
    #3e0077,
    rgb(0, 133, 255),
    #00dcff
  );
`

const BackgroudImageWrapper = styled.div`
  height: 100vh;
  font-size: 16px;
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  background: linear-gradient(
    146deg,
    #000000,
    #3e0077,
    rgb(0, 133, 255),
    #00dcff
  );
  background-attachment: fixed;
  background-image: url('/img/joel-filipe.jpg');
  background-position: 50% 50%;
  background-size: 100%;
  background-color: #03178f;
  transform: scale(1);
  animation: grow-bg 60s linear infinite;

  @media screen and (max-width: 500px) {
    background-size: 160%;
  }

  @keyframes grow-bg {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
`

const Copyright = styled.section`
  font-size: 8px;
  color: #777;
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: bold;
  right: 0;
  line-height: 1.4;
  z-index: 100;
  padding: 15px 20px;
  background: black;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 0.5px;
`

const Main = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  display: grid;
  z-index: 2;
  background: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  color: black;
`

const Header = styled.div`
  align-self: center;
  justify-self: center;
  pointer-events: all;
`

const HeaderTitle = styled.h1`
  align-self: center;
  justify-self: center;
  text-align: center;
  text-transform: uppercase;
  color: white;
  font-size: 6vh;
  margin: 0;
  padding: 20px;
  line-height: 1.4;
`

const HeaderSubtitle = styled.h2`
  --color-1: transparent;
  --color-2: #00d4ff;
  font-size: 2.4vh;
  text-align: center;
  margin: 0 10px;
  font-weight: 400;
  font-style: italic;
  color: #fefefe;
  padding: 15px 20px;
  background: #000;
  text-transform: uppercase;
  animation: grow 20s ease infinite;
  transform: scale(1);

  @keyframes grow {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`

const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 40px;
  font-family: 'Roboto Mono', monospace;

  a {
    font-size: 2.2vh;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid white;
  }
`

const HeaderButtons = styled.div`
  text-align: center;
  margin: 40px 20px 0 20px;

  button {
    padding: 15px 12px;
    text-transform: uppercase;
    font-size: 1em;
    border: 3px solid;
    cursor: pointer;
    min-width: 200px;
    margin-top: 10px;
    font-weight: bold;

    &:hover {
      background: #eb12ff;
    }
  }
`

const CvButton = styled.button`
  background: transparent;
  color: white;
`

const HireMeButton = styled.button`
  background-color: #f268ff;
  color: black;
`

export class HomePage extends Component {
  render() {
    return (
      <HomePageWrapper>
        <BackgroudImageWrapper />

        <Copyright>
          <div>Adam John Campbell Murray</div>
          <div>© Copyright 2018</div>
        </Copyright>

        <Main>
          <Header>
            <HeaderTitle>Adam Murray</HeaderTitle>
            <HeaderSubtitle>Web Developer Extraordinaire</HeaderSubtitle>

            <HeaderLinks>
              <a
                href="https://github.com/AdamMurray"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/adam-murray-9405b44b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/AdamJCMurray"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </HeaderLinks>

            <HeaderButtons>
              <Link to="/cv">
                <CvButton>Check out my CV</CvButton>
              </Link>
              <a
                href="mailto:adam.john.campbell.murray@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HireMeButton>Hire me</HireMeButton>
              </a>
            </HeaderButtons>
          </Header>
        </Main>
      </HomePageWrapper>
    )
  }
}

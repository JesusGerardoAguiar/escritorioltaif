import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Header from './Header';
import Lograf from "../../content/assets/lografLogoBlack.svg";

import { rhythm, scale } from "../utils/typography"

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: MontserratL;
    src: url(${require("../../content/assets/fonts/Montserrat-Light.ttf")});
  }
  @font-face {
    font-family: MonteserratR;
    src: url(${require("../../content/assets/fonts/Montserrat-Regular.otf")});
  }
  @font-face {
    font-family: MonteserratB;
    src: url(${require("../../content/assets/fonts/Montserrat-Bold.otf")});
  }
`

class Layout extends React.Component {
  render() {
    const { children, location } = this.props
    let header = (<Header location={location} />)
    return (
      <Wrapper>
        <div>
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer backgroundImg={Lograf}>
          © {new Date().getFullYear()}, powered by
          {` `}
          <a href="https://www.lografdesign.com"><img src={Lograf} alt="f" style={{width: '5rem'}} /></a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;

  p {
    font-family: MonteserratR;
  }
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
  font-size: 18px;
  font-family: "MonteserratR";;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  a{
    display: flex;
    border-shadow: none;
    color: transparent;

  }
  img{
    width: 5rem;
    margin-bottom: 0px;
    margin-left: 0.5rem;
  }
  @media (max-width: 768px) {
    margin: 0px;
  }
`

export default Layout

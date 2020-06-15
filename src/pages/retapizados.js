import React, { useState } from "react"
import Layout from "../components/layout"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import prod1 from "../../content/antesdespues/1.jpg"
import prod2 from "../../content/antesdespues/2.jpg"
import prod3 from "../../content/antesdespues/3.jpg"
import prod4 from "../../content/antesdespues/4.jpg"
import prod5 from "../../content/antesdespues/5.jpg"
import prod6 from "../../content/antesdespues/6.jpg"
import prod7 from "../../content/antesdespues/7.jpg"
import prod8 from "../../content/antesdespues/8.jpg"
import prod9 from "../../content/antesdespues/9.jpg"
import prod10 from "../../content/antesdespues/10.jpg"
import prod11 from "../../content/antesdespues/11.jpg"
import prod12 from "../../content/antesdespues/12.jpg"
import prod13 from "../../content/antesdespues/13.jpg"
import prod14 from "../../content/antesdespues/14.jpg"
import prod15 from "../../content/antesdespues/15.jpg"
import prod16 from "../../content/antesdespues/16.jpg"
import prod17 from "../../content/antesdespues/17.jpg"
import prod18 from "../../content/antesdespues/18.jpg"
import prod19 from "../../content/antesdespues/19.jpg"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: MontserratL;
    src: url(${require("../../content/assets/fonts/Montserrat-Light.ttf")});
  }
  @font-face {
    font-family: MonteserratR;
    src: url(${require("../../content/assets/fonts/Montserrat-Medium.ttf")});
  }
  @font-face {
    font-family: MonteserratB;
    src: url(${require("../../content/assets/fonts/Montserrat-Bold.otf")});
  }
  @font-face {
    font-family: DinRegular;
    src: url(${require("../../content/assets/fonts/DIN-Regular.ttf")});
  }
`
const Retapizados = props => {
  return (
    <Layout location={props.location}>
      <GlobalStyles />
      <MainDiv>
        <h1>Retapizados</h1>
        <RowProductsDiv>
          <ProdCircle backgroundImg={prod1} />
          <ProdCircle backgroundImg={prod2} />
          <ProdCircle backgroundImg={prod3} />
          <ProdCircle backgroundImg={prod4} />
          <ProdCircle backgroundImg={prod5} />
          <ProdCircle backgroundImg={prod6} />
          <ProdCircle backgroundImg={prod7} />
          <ProdCircle backgroundImg={prod8} />
          <ProdCircle backgroundImg={prod9} />
          <ProdCircle backgroundImg={prod10} />
          <ProdCircle backgroundImg={prod11} />
          <ProdCircle backgroundImg={prod12} />
          <ProdCircle backgroundImg={prod13} />
          <ProdCircle backgroundImg={prod14} />
          <ProdCircle backgroundImg={prod15} />
          <ProdCircle backgroundImg={prod16} />
          <ProdCircle backgroundImg={prod17} />
          <ProdCircle backgroundImg={prod18} />
          <ProdCircle backgroundImg={prod19} />
        </RowProductsDiv>
      </MainDiv>
    </Layout>
  )
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    font-family: "MonteserratR";
    color: #aa5c3b;
    text-transform: uppercase;
  }

  div {
    padding: 1rem;
  }

  p {
    font-family: DinRegular;
    color: black;
    margin: 1rem;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    p {
      font-family: MonteserratR;
    }
  }
`

const RowProductsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  padding: 1rem;

  div {
    margin: 1rem;
  }
`

export const ProdCircle = styled.div`
  background-image: url(${props => props.backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 20rem;
  height: 20rem;
  border-radius: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

export default Retapizados

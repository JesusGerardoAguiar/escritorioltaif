import React, { useState } from "react"
import Layout from "../components/layout"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import Roller from '../../content/assets/img/roller.jpg';
import Barrote from '../../content/assets/img/barrote.jpg';
import Convencionales from '../../content/assets/img/convencionales.jpg';
import CortinasImg from '../../content/assets/img/cortinas.jpeg';
import Rieles from '../../content/assets/img/rieles.jpeg';
import Romana from '../../content/assets/img/romana.jpg';

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
const Cortinas = props => {
  return (
    <Layout location={props.location}>
      <GlobalStyles />
      <MainDiv>
        <h1>Cortinas</h1>
        <div>
        <p>
          Confección de cortinas de rollers, convencionales, barrotes, rieles,
          romanas. También contamos con una linea de rollers armados desde
          origen que se puede adaptar. Cambio de rieles.
        </p>

        </div>
        <RowProductsDiv>
            <ProdCircle backgroundImg={Roller} />
            <ProdCircle backgroundImg={Barrote} />
            <ProdCircle backgroundImg={Convencionales} />
            <ProdCircle backgroundImg={CortinasImg} />
            <ProdCircle backgroundImg={Rieles} style={{ backgroundSize: 'auto' }}/>
            <ProdCircle backgroundImg={Romana} />
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

  div{
    
    padding: 1rem;
  }

  p {
    font-family: DinRegular;
    color: black;
    margin: 1rem;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    p{
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

export default Cortinas

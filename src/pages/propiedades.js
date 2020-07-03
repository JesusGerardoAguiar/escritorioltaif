import React from "react"
import Layout from "../components/layout"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import SearchPropiedades from "../components/SearchTab/SearchPropiedades"
import CasaPrueba from "../../content/assets/img/casaprueba.jpg"
import PriceTagIcon from "../../content/assets/icons/pricetag.png"
import BathIcon from "../../content/assets/icons/bathtub.svg"
import BedIcon from "../../content/assets/icons/king_bed.svg"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: RobotoL;
    src: url(${require("../../content/assets/fonts/Roboto-Light.ttf")});
  }
  @font-face {
    font-family: RobotoM;
    src: url(${require("../../content/assets/fonts/Roboto-Medium.ttf")});
  }
  @font-face {
    font-family: RobotoB;
    src: url(${require("../../content/assets/fonts/Roboto-Bold.ttf")});
  }
  @font-face {
    font-family: RobotoR;
    src: url(${require("../../content/assets/fonts/Roboto-Regular.ttf")});
  }
  @font-face {
    font-family: RobotoBlack;
    src: url(${require("../../content/assets/fonts/Roboto-Black.ttf")});
  }
`

const Propiedades = ({ location }) => {
  const transformText = text => {
    return text[0].toUpperCase() + text.slice(1)
  }
  console.log(location.search.split("?"))
  // const title = `${transformText(
  //   location.search.split("?")[1]
  // )} - ${transformText(location.search.split("?")[2])}`
  return (
    <>
      <GlobalStyles />
      <Layout location={location}>
        <Container>
          <PresentationText>Casas - Ventas</PresentationText>
          <SearchPropiedades />
          <Properties>
            <PropertyContainer>
              <PropertyRow>
                <img src={CasaPrueba} />
                <TextColumn>
                  <h3>Venta de Casa Excelente Oportunidad</h3>
                  <h5
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "25rem",
                      alignItems: "center",
                    }}
                  >
                    4 Baños{" "}
                    <img
                      src={BathIcon}
                      style={{
                        width: "1.8rem",
                        marginBottom: "14.44444444px",
                        marginLeft: 5,
                        marginRight: 5,
                      }}
                    />{" "}
                    &#9679; 6 Dormitorios{" "}
                    <img
                      src={BedIcon}
                      style={{
                        width: "2rem",
                        marginBottom: "9.44444444px",
                        marginLeft: 5,
                        marginRight: 5,
                      }}
                    />{" "}
                    &#9679;{" "}
                    <>
                      200 mts<sup>2</sup>{" "}
                    </>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <h5 style={{ alignSelf: 'flex-end' }}>18 de Julio, Durazno</h5>
                  <PriceTag>
                    U$S 200.000
                    <img src={PriceTagIcon} />
                  </PriceTag>
                </TextColumn>
              </PropertyRow>
            </PropertyContainer>
          </Properties>
        </Container>
      </Layout>
    </>
  )
}

const PriceTag = styled.div`
  width: 8rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-self: flex-end;
  background-color: #2f358f;
  color: #fff;
  padding: 7px 5px;
  border-radius: 3px;
  cursor: pointer;
  clear: both;
  margin-top: 0px;
  font-size: 13px;
  font-family: RobotoL;

  img {
    width: 1rem !important;
  }
`

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-left: 1rem;
  h3 {
    margin: 0px;
    font-family: RobotoM;
    work-break: break-all;
    color: #2f358f;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-top: 0px;
  }
  h5 {
    margin: 0px;
    font-family: RobotoM;
    work-break: break-all;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    padding-top: 0px;
  }
  p{
    margin: 0px;
    font-family: RobotoL;
    work-break: break-all;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    padding-top: 0px;
    width: 42rem;
    text-align: justify;
  }
`

const PropertyContainer = styled.div`
padding: 1rem;
border: 1px solid #016699;
border-radius: 10px;
width: fit-content;
padding-top: 1rem;
padding-bottom: 1rem;
`

const Properties = styled.div`
  padding: 2rem;
  padding-top: 4rem;
  width: 100%;
`

const PropertyRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: start;
  align-items: end;
  img {
    margin-bottom: 0;
    width: 23.333333rem;
  }
`

const PresentationText = styled.h2`
  margin: 0px;
  font-family: RobotoB;
  work-break: break-all;
  color: #2f358f;
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 0.5rem;
  padding-top: 0px;
  padding-bottom: 2rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`

export default Propiedades

import React from "react"
import { graphql } from "gatsby"
import Carousel from "../components/Carousel"
import { CarouselProvider, Slide, Slider } from "pure-react-carousel"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout"
import Durazno1 from "../../content/assets/img/durazno1.jpg"
import Durazno2 from "../../content/assets/img/durazno2.jpg"
import Durazno3 from "../../content/assets/img/durazno3.jpg"
import Durazno4 from "../../content/assets/img/durazno4.jpg"
import Durazno5 from "../../content/assets/img/durazno5.jpg"
import HouseForSellImg from "../../content/assets/img/casaprueba.jpg"
import { createGlobalStyle } from "styled-components"
import SearchTab from "../components/SearchTab/SearchInit"
import SearchHouses from "../components/SearchTab/SearchHouses"
import { fadeIn, fadeInRight } from "react-animations"
import BackgroundSlider from "react-background-slider"

const fadeInAnimation = keyframes`${fadeIn}`
const fadeInRightAnimation = keyframes`${fadeInRight}`

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

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const renderCarouselContent = () => {
      return (
        <>
          <SearchContainer>
            <div
              style={{
                width: "40rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid lightgray",
                background: "lightgray",
                padding: "1rem",
                borderRadius: "10px",
                opacity: "0.9",
              }}
            >
              <PresentationColumn>
                <PresentationTextBox>
                  <PresentationText
                    id="deskltaif"
                    style={{ borderBotttom: "2px solid white" }}
                  >
                    La llave segura de su negocio{" "}
                  </PresentationText>
                  <PresentationText style={{ paddingTop: "0.2rem" }}>
                  Ventas, Alquileres, Remates y tasaciones
                  </PresentationText>
                </PresentationTextBox>
                <LtaifText>¡Comienza tu Búsqueda!</LtaifText>
              </PresentationColumn>
              <SearchTab />
            </div>
          </SearchContainer>
        </>
      )
    }
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <GlobalStyles />
        <BackgroundSlider
          images={[Durazno1, Durazno2, Durazno3, Durazno4, Durazno5]}
          duration={4}
          transition={2}
        />
        {renderCarouselContent()}
        <FeaturedHouses>
          <SearchColumn>
            <TitleContainer id="search">
              <h4>Busqueda de Propiedades</h4>
            </TitleContainer>
            <SearchHouses />
          </SearchColumn>
          <FeaturedColumn>
            <TitleContainer id="featured">
              <h4>Las propiedades destacadas</h4>
            </TitleContainer>
            <FeaturedStateRow>
              <StateContainer>
                <StateImage bg={HouseForSellImg}>
                  <StateInfo>
                    <StateLabel>Terreno en venta</StateLabel>
                    <StateAddress>Tres Cruces, Montevideo</StateAddress>
                    <StatePrice>USD 1.800.000</StatePrice>
                  </StateInfo>
                </StateImage>
              </StateContainer>
              <StateContainer>
                <StateImage bg={HouseForSellImg}>
                  <StateInfo>
                    <StateLabel>Terreno en venta</StateLabel>
                    <StateAddress>Tres Cruces, Montevideo</StateAddress>
                    <StatePrice>USD 1.800.000</StatePrice>
                  </StateInfo>
                </StateImage>
              </StateContainer>
              <StateContainer>
                <StateImage bg={HouseForSellImg}>
                  <StateInfo>
                    <StateLabel>Terreno en venta</StateLabel>
                    <StateAddress>Tres Cruces, Montevideo</StateAddress>
                    <StatePrice>USD 1.800.000</StatePrice>
                  </StateInfo>
                </StateImage>
              </StateContainer>
              <StateContainer>
                <StateImage bg={HouseForSellImg}>
                  <StateInfo>
                    <StateLabel>Terreno en venta</StateLabel>
                    <StateAddress>Tres Cruces, Montevideo</StateAddress>
                    <StatePrice>USD 1.800.000</StatePrice>
                  </StateInfo>
                </StateImage>
              </StateContainer>
              <StateContainer>
                <StateImage bg={HouseForSellImg}>
                  <StateInfo>
                    <StateLabel>Terreno en venta</StateLabel>
                    <StateAddress>Tres Cruces, Montevideo</StateAddress>
                    <StatePrice>USD 1.800.000</StatePrice>
                  </StateInfo>
                </StateImage>
              </StateContainer>
              <StateContainer>
                <StateImage bg={HouseForSellImg}>
                  <StateInfo>
                    <StateLabel>Terreno en venta</StateLabel>
                    <StateAddress>Tres Cruces, Montevideo</StateAddress>
                    <StatePrice>USD 1.800.000</StatePrice>
                  </StateInfo>
                </StateImage>
              </StateContainer>
              
            </FeaturedStateRow>
          </FeaturedColumn>
        </FeaturedHouses>
      </Layout>
    )
  }
}

const StateInfo = styled.div`
  display: none;
  background-color: #303f9f;
  opacity: 0.6;
  width: inherit;
  height: inherit;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

const StateImage = styled.div`
  background-image: url(${props => props.bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  h4,
  h5 {
    display: none;
  }

  :hover {
    cursor: pointer;
    h4,
    h5 {
      display: initial;
      color: white;
    }
    div {
      display: flex;
    }
  }
  width: 100%;
  height: 10rem;
`

const StateLabel = styled.h4`
  font-family: RobotoB;
  margin: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

const StateAddress = styled.h5`
  font-family: RobotoM;
  margin: 0;
`

const StatePrice = styled.h4`
  font-family: RobotoB;
  margin: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`

const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  width: 15rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`

const FeaturedStateRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 1rem;
  flex-wrap: wrap;
    justify-content: end;
`

const SearchColumn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 32%;
`

const FeaturedColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`

const TitleContainer = styled.div`
  width: 100%;
  background-color: lightgray;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h4 {
    margin: 0px;
    font-family: RobotoB;
    letter-spacing: 1px;
    text-transform: initial;
    color: #323785;
  }
`

const FeaturedHouses = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;

  padding: 2rem;
  padding-left: 7rem;
  padding-right: 7rem;

  #search{
    border-right: 1px solid #323785;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  #featured{
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  }
`

const PresentationTextBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid white;
  border-top: 0px;
  border-bottom: 0px;
  border-right: 0px;
  margin-top: 8px;
  #deskltaif {
    border-bottom: 4px solid white;
    padding-top: 0px;
    width: 28.22222222rem;
  }
`

const LtaifText = styled.h2`
  font-family: RobotoBlack;
  work-break: break-all;
  margin: 1rem;
  color: #2f358f;
  font-size: 2em;
  margin-left: 0px;
  margin-top: 30px;
  margin-bottom: 0px;
`

const PresentationText = styled.h4`
  margin: 0px;
  font-family: RobotoB;
  work-break: break-all;
  color: #2f358f;
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 0.5rem;
  padding-top: 0px;
  padding-bottom: 2px;
`

const PresentationColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const SearchContainer = styled.div`
  height: 80vh;
  margin: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  background-color: #94ced5;

  img {
    animation: 2s ${fadeInRightAnimation};
  }
`

const ImageHouse = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.backgroundImg});
  background-color: #94ced5;
  animation: 2s ${fadeInRightAnimation};
  width: 100%;
  height: inherit;
`
// const Banner = styled.div`
//   background-color: #aa5c3b;
//   width: 100%;
//   height: 25rem;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-evenly;
//   flex-wrap: wrap;
//   img {
//     width: 12rem;
//   }
//   h1 {
//     color: white;
//     font-family: RobotoB;
//     font-size: 3.5rem;
//     text-transform: uppercase;
//     margin-top: 0px;
//     margin-bottom: 0px;
//   }
//   h1 #tenpercent {
//     font-family: Museo;
//     font-size: 5.5rem;
//     margin-top: 0.5rem;
//     color: white;
//     text-transform: uppercase;
//     margin-top: 0px;
//     margin-bottom: 0px;
//   }
//   @media (max-width: 768px) {
//     text-align: center;
//     flex-direction: column;
//     h1 {
//       font-size: 1.5rem;
//     }
//     h1 #tenpercent {
//       font-size: 3.5rem;
//     }
//     img {
//       width: 8rem;
//     }
//   }
// `

export const StyledCarousel = styled(CarouselProvider)`
  display: flex;
  z-index: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .slideInner___2mfX9 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const StyledSlider = styled(Slider)`
  width: 100%;
  height: 40rem;
  justify-content: flex-start;
  padding-bottom: 40rem !important;
  display: flex;
  flex-direction: column;
`

export const StyledSlide = styled(Slide)`
  .carousel__slide-focus-ring {
    display: none;
  }
  padding-bottom: 40rem !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

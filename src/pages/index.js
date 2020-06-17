import React from "react"
import { graphql } from "gatsby"
import Carousel from "../components/Carousel"
import { CarouselProvider, Slide, Slider } from "pure-react-carousel"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout"
import BuildingEx03 from "../../content/assets/img/building-ex03-01.jpg"
import { createGlobalStyle } from "styled-components"
import SearchTab from "../components/SearchTab"
import { fadeInLeft, fadeInRight } from "react-animations"

const fadeInLeftAnimation = keyframes`${fadeInLeft}`
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

    const renderCarouselContent = bg => {
      return (
        <LogoContainer backgroundImg={bg}>
          <SearchContainer>
            <PresentationColumn>
              <PresentationTextBox>
                <PresentationText
                  id="deskltaif"
                  style={{ borderBotttom: "2px solid white" }}
                >
                  Escritorio Ltaif{" "}
                </PresentationText>
                <PresentationText style={{ paddingTop: "0.2rem" }}>
                  Venta de Inmuebles
                </PresentationText>
              </PresentationTextBox>
              <LtaifText>¡Comienza tu Búsqueda!</LtaifText>
            </PresentationColumn>
            <SearchTab />
          </SearchContainer>
          <ImageHouse backgroundImg={bg}></ImageHouse>
        </LogoContainer>
      )
    }
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <GlobalStyles />
        <Carousel
          totalSlides={`1`}
          StyledCarousel={StyledCarousel}
          StyledSlider={StyledSlider}
          StyledSlide={StyledSlide}
        >
          {renderCarouselContent(BuildingEx03)}
        </Carousel>
      </Layout>
    )
  }
}

const PresentationTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border: 4px solid white;
  border-top: 0px;
  border-bottom: 0px;
  border-right: 0px;

  #deskltaif {
    border-bottom: 4px solid white;
    padding-top: 0px;
    width: 19rem;
  }
`

const LtaifText = styled.h2`
  font-family: RobotoBlack;
  work-break: break-all;
  margin: 1rem;
  color: #2f358f;
  font-size: 2em;
  margin-left: 0px;
`

const PresentationText = styled.h2`
  font-size: 2em;
  margin: 0px;
  font-family: RobotoB;
  work-break: break-all;
  color: #2f358f;
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 0.5rem;
  padding-top: 0px;
  padding-bottom: 0px;
`

const PresentationColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const SearchContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 2s ${fadeInLeftAnimation};
  width: 100%;
  margin-bottom: 2rem;
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

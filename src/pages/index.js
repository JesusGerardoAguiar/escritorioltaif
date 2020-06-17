import React from "react"
import { graphql } from "gatsby"
import Carousel from "../components/Carousel"
import { CarouselProvider, Slide, Slider } from "pure-react-carousel"
import styled from "styled-components"
import Layout from "../components/layout"
import BuildingEx03 from "../../content/assets/img/building-ex03.jpg"
import { createGlobalStyle } from "styled-components"
import SearchTab from '../components/SearchTab';
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
  @font-face {
    font-family: Museo;
    src: url(${require("../../content/assets/fonts/Museo700-Regular.ttf")});
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
            <LtaifText>Escritorio Ltaif - Venta de Inmuebles</LtaifText>
            <LtaifText>¡Comienza tu busqueda!</LtaifText>
            <SearchTab />
          </SearchContainer>
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
          {/* {renderCarouselContent(BuildingEx03)}
            {renderCarouselContent(BuildingEx04)}
            {renderCarouselContent(BuildingEx05)} */}
        </Carousel>
      </Layout>
    )
  }
}



const LtaifText = styled.h3`
  font-family: MonteserratB;
  work-break: break-all;
  margin: 1rem;
  color: white;
`

const SearchContainer = styled.div`
position: absolute;
  top: 2rem;
  left: 10rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: start;
  align-items: baseline;
  width: 100%;
  height: 40rem;
  background-image: url(${props => props.backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
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
//     font-family: MonteserratB;
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
  opacity: 0.9;
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

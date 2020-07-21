import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

import { createGlobalStyle } from "styled-components"
import SearchTab from "../components/SearchTab/SearchInit"

import BackgroundSlider from "react-background-slider"


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

class Contacto extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <GlobalStyles />
        <Container>
            <h1>Contacto</h1>
            <p>
            Sergio Ltaif – Rematador y Tasador público Mat.4885

Manuel Oribe 633 – Durazno – Uruguay – Tel.fax: 43622225 – Celular 099 361 742 – Teléfono desde el exterior: 598 43622225 – sergioltaif@gmail.com
            </p>
        </Container>
      </Layout>
    )
  }
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem;
border-radius: 10px;
opacity: 0.9;
padding-right: 10rem;
padding-left: 10rem;
h1{
    color: #2F358F;
}
 @media (max-width: 768px) {
    width: inherit;
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

    @media (max-width: 768px) {
      width: inherit;
    }
  }
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

export default Contacto

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

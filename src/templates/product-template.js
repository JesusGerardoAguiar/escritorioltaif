import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import Modal from "../components/Modal"
import InfoDialog from "../components/InfoDialog"
import InfoSvg from "../../content/assets/icons/info.svg"

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

const ProductTemplate = props => {
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false)
  const [product, setProduct] = useState({
    images: [],
    description: "",
    title: "",
  })
  const { data, pageContext } = props
  const identifier = pageContext.identifier
  const products = data.allMdx.nodes
  const productsByIdentifier = products.filter(
    product => product.frontmatter.identifier === identifier
  )

  const handleOnClose = () => {
    setOpen(false)
  }

  const handleCloseInfo = () => {
    setOpenInfo(false);
  }

  const renderImage = () => {
    if(identifier === 'proyectos'){
      return <></>
    }
    return <img src={InfoSvg} style={{ width: "2.5rem", marginBottom: 0 }} onClick={() => setOpenInfo(true)}/>
  }
  return (
    <Layout location={props.location}>
      <GlobalStyles />
      <MainDiv>
        <Modal open={open} handleClose={handleOnClose} product={product} isProject={identifier === 'proyectos'} />
        <InfoDialog open={openInfo} handleClose={handleCloseInfo} />
        <div style={{ display: "flex", flexDirection: "row", alignItems: 'baseline' }}>
          <h1>{identifier === 'respaldos' ? 'Dormitorio' : identifier}</h1>
          {renderImage()}
        </div>
        <RowProductsDiv>
          {productsByIdentifier.map(product => (
            <ProdCircle
              backgroundImg={product.frontmatter.activityImages ? product.frontmatter.activityImages[0] : ''} 
              onClick={() => {
                setOpen(true)
                setProduct(product.frontmatter)
                return
              }}
            >
              <div style={{ display: "none" }} id="ProdCircle">
                <p>Ver más</p>
              </div>
            </ProdCircle>
          ))}
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
    margin-right: 1.5rem;
  }
  img{
    cursor: pointer;
    :hover{
      opacity: 0.5;
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

  :hover {
    transition: 1s;
    #ProdCircle {
      cursor: pointer;
      background-color: rgb(170, 92, 59, 0.5);
      justify-content: center;
      align-items: center;
      border-radius: 190px;
      display: flex !important;
      flex-direction: column;
      width: 100%;
      height: -webkit-fill-available;
      margin 0px!important;
      p {
        font-family: MonteserratR;
        color: white;
        font-size: 25px;
        margin-bottom: 0px;
        text-transform: uppercase;
      }
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

export default ProductTemplate

export const pageQuery = graphql`
  query BlogPostBySlug {
    allMdx {
      nodes {
        frontmatter {
          identifier
          description
          activityImages
          title
        }
      }
    }
  }
`

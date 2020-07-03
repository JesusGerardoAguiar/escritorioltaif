import React from "react"
import styled from "styled-components"
import HouseForSellImg from "../../../content/assets/img/casaprueba.jpg"
import SearchHouses from "../SearchTab/SearchHouses"
import Media from "react-media"

const FeaturedHousesComponent = () => {
  const renderHouses = () => {
    let ar = []
    for (let i = 0; i <= 8; i++) {
      ar.push(
        <StateContainer>
          <StateImage bg={HouseForSellImg}>
            <StateInfo>
              <StateLabel>Terreno en venta</StateLabel>
              <StateAddress>Tres Cruces, Montevideo</StateAddress>
              <StatePrice>USD 1.800.000</StatePrice>
            </StateInfo>
          </StateImage>
        </StateContainer>
      )
    }
    return ar
  }
  const renderFeaturedHouses = matches => {
    if (matches.small) {
      return (
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
            <FeaturedStateRow>{renderHouses()}</FeaturedStateRow>
          </FeaturedColumn>
        </FeaturedHouses>
      )
    } else if (matches.large) {
      return (
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
            <FeaturedStateRow>{renderHouses()}</FeaturedStateRow>
          </FeaturedColumn>
        </FeaturedHouses>
      )
    }
  }

  return (
    <>
      <Media queries={{ small: { maxWidth: 768 }, large: { minWidth: 769 } }}>
        {matches => renderFeaturedHouses(matches)}
      </Media>
    </>
  )
}

export default FeaturedHousesComponent

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
  @media (max-width: 768px) {
    justify-content: center;
   }
`

const SearchColumn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 32%;

  @media (max-width: 768px) {
    width: 100%!important;
   }
 

`

const FeaturedColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`

const TitleContainer = styled.div`
  width: 88.666666%;
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
  background-color: #fcfcfc;
  padding: 2rem;
  padding-left: 7rem;
  padding-right: 7rem;
  
  @media (max-width: 768px) {
   padding: 1rem;
   padding-top: 1rem;
  }
  #search{
    width: 100%;
    border-right: 1px solid #323785;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    @media (max-width: 768px) {
        border-right: 0px;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        flex-direction: column;
       }
   
  }

  #featured{
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    @media (max-width: 768px) {
      border-right: 0px;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
     }
  }
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
   }
  }
`

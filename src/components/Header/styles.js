import styled from "styled-components"

export const InsideLinkDiv = styled.div`
  display: flex;
  flexd-irection: row;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-left: 0rem;
  }
`

export const LinkDiv = styled.div`
width: 100%;
    // padding: 1rem;
  font-size: 12px;
  color: #016699;
  font-family: "MonteserratR";
  font-weight: 300;
  text-align: center;
  cursor: pointer;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  display: flex;
  text-transform: uppercase;
  a {
    text-decoration: none !important;
    color: white;
    box-shadow: none;
    margin-right: 2rem;
    text-transform: uppercase;
  }

  a:hover{
    color: #2E3192!important;
  }

  @media (max-width: 768px) {
    color: #016699;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    width: 100%;
    a {
      width: 100%;
      margin-right: 0px;
      text-decoration: none;
      color: #016699;
    }
  }
`
export const LogoDiv = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const LinksContainerDiv = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 16rem;
    margin-bottom: 10px;
  }
`

export const MainDiv = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: #9ED3D9;
  z-index: 1;
  justify-content: space-evenly;
    align-items: center;
}
  width: 100%;

  @media (max-width: 768px) {
    padding-right: 1rem;
    padding-left: 1rem;
    flex-direction: row;
    img {
      margin-bottom: 0px;
      width: 3rem !important;
    }
    justify-content: space-between;
    align-items: center;
    height: 5rem;
  }
`

export const ImageDiv = styled.div`
  width: 20rem;
  display: flex;
  justify-content: center;

  h1 {
    margin-top: 0px;
    letter-spacing: 9px;
  }

  @media (max-width: 768px) {
    width: 10rem;
  }
`

export const DivOptions = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`

export const LinkImg = styled.div`
  text-align: center;
  cursor: pointer;
  flex-direction: row;
  margin: 3rem;
  margin-right: 0rem;
  margin-top: 2.5rem;
  @media (max-width: 768px) {
    margin: 0px !important;
    margin-right: 0px !important;
    margin-top: 0px !important;
  }
`

export const IconCircule = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 18px;
  border: 5px solid #f4e1c1;
  width: 2rem;
  height: 2rem;
`

export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 5rem;
  justify-content: space-evenly;

  a{
    box-shadow: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 2rem;
    img {
      margin-right: 1rem;
    }
  }
`

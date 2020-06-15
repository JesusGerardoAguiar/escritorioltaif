import styled from "styled-components"
import InputBase from "@material-ui/core/InputBase"

export const Box = styled.div`
  width: 35rem;
  margin-top: 2rem;
  border: 3px solid #aa5c3b;
  padding: 2rem;
  padding-bottom: 0px;
  display: -webkit-flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 17rem;
  }
`

export const InputField = styled(InputBase)`
  color: white;
  height: 80px;
  border: 3px solid #AA5C3B;
  box-sizing: border-box;
  padding-left: 2rem !important;
  font-family: MontserratL!important;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  width: 100%;
  color: black;
  margin-bottom: 0.5rem;
`

export const TextArea = styled(InputBase)`
  overflow: scroll;
  height: 8rem;
  border: 3px solid #aa5c3b;
  padding-left: 2rem !important;
  padding-top: 2rem !important;
  padding-right: 2rem !important;
  font-family: MontserratL !important;
  font-style: normal !important;
  font-weight: 300 !important;
  font-size: 18px !important;
  text-align: center;
  width: 100%;
  margin-bottom: 15px;
  color: black;
  cursor: text;
  display: block !important;
  position: initial !important;
  box-sizing: border-box !important;
  align-items: normal !important;
  line-height: 1.1875em !important;
  letter-spacing: 0.00938em !important;
`

export const Button = styled.button`
  width: 13rem;
  height: 3rem;

  border: 3px solid #aa5c3b;
  font-family: MonteserratR;
  text-transform: uppercase;
  color: #aa5c3b;
  outline: none;
  cursor: pointer;
  background-color: white;
  :hover {
    opacity: 0.5;
  }
`

export const ButtonDiv = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 15px;
`

export const FormContainer = styled.form`
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  margin-bottom: 0px;
`

import React, { useState } from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"
import SearchIcon from "@material-ui/icons/Search"
import ClearAllIcon from "@material-ui/icons/ClearAll"
import SelectComponent from "./SelectComponent"
import Collapsible from "react-collapsible"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: "10rem",
  },
  button: {
    margin: theme.spacing(1),
  },
}))

const SearchTab = () => {
  const classes = useStyles()
  const [propertyType, setPropertyType] = useState("")
  const dummyMenuItems = [
    { value: 10, label: "Item 1" },
    { value: 20, label: "Item 2" },
  ]

  return (
    <Container>
      <Collapsible trigger="Buscar Propiedad">
        <SearchContainer>
          <SelectRow>
            <SelectComponent
              label="Tipo de Propiedad"
              menuItems={dummyMenuItems}
              property={propertyType}
              setPropertyValue={setPropertyType}
            />
            <SelectComponent
              label="Tipo de Listado"
              menuItems={dummyMenuItems}
              property={propertyType}
              setPropertyValue={setPropertyType}
            />
          </SelectRow>
          <SelectRow>
            <SelectComponent
              label="Moneda"
              menuItems={dummyMenuItems}
              property={propertyType}
              setPropertyValue={setPropertyType}
            />
            <SelectComponent
              label="Min Precio"
              menuItems={dummyMenuItems}
              property={propertyType}
              setPropertyValue={setPropertyType}
            />
          </SelectRow>
          <SelectRow id="maxprice">
            <SelectComponent
              style={{ width: "100%" }}
              label="Max Precio"
              menuItems={dummyMenuItems}
              property={propertyType}
              setPropertyValue={setPropertyType}
            />
          </SelectRow>
          <ButtonDiv>
            <Button
              variant="contained"
              color="secundary"
              size="large"
              className={classes.button}
              startIcon={<ClearAllIcon />}
            >
              Limpiar
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SearchIcon />}
            >
              Buscar
            </Button>
          </ButtonDiv>
        </SearchContainer>
      </Collapsible>
    </Container>
  )
}

const Container = styled.div`
  .Collapsible {
    text-align: center;
  }

  .Collapsible__trigger {
    font-family: RobotoBlack;
    work-break: break-all;
    margin: 1rem;
    color: #2f358f;
    font-size: 2em;
    margin-left: 0px;
    margin-top: 30px;
    margin-bottom: 0px;
    cursor: pointer;
    text-align: center;
    :hover{
      opacity: 0.8;
    }
    @media (max-width: 768px) {
      font-size: 1.5em;
    }
  }
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 30rem;

  @media (max-width: 768px) {
    width: inherit;
  }
  .MuiButton-containedPrimary {
    background-color: #2f358f;
  }
  .MuiFormControl-root {
    margin: 8px;
    min-width: 120px;
  }
  .MuiButtonBase-root {
    margin: 8px;
  }
  #maxprice {
    width: 100%;
    height: 4.5rem;
  }
`

const SelectRow = styled.div`
  display: flex;
  flex-direction: row;
  width: inherit;
`

const ButtonDiv = styled.div`
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
`
export default SearchTab

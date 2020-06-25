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

const SearchHouses = () => {
  const classes = useStyles()
  const [propertyType, setPropertyType] = useState("")
  const dummyMenuItems = [
    { value: 10, label: "Item 1" },
    { value: 20, label: "Item 2" },
  ]

  return (
    <SearchContainer>
      <SelectRow>
        <SelectComponent
          label="Tipo de Propiedad"
          menuItems={dummyMenuItems}
          property={propertyType}
          setPropertyValue={setPropertyType}
          labelColor="#2f358f"
        />
        <SelectComponent
          label="Tipo de Listado"
          menuItems={dummyMenuItems}
          property={propertyType}
          setPropertyValue={setPropertyType}
          labelColor="#2f358f"
        />
        <SelectComponent
          label="Moneda"
          menuItems={dummyMenuItems}
          property={propertyType}
          setPropertyValue={setPropertyType}
          labelColor="#2f358f"
        />
        <SelectComponent
          label="Min Precio"
          menuItems={dummyMenuItems}
          property={propertyType}
          setPropertyValue={setPropertyType}
          labelColor="#2f358f"
        />
        <SelectComponent
          label="Max Precio"
          menuItems={dummyMenuItems}
          property={propertyType}
          setPropertyValue={setPropertyType}
          labelColor="#2f358f"
        />
        <ButtonDiv>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            startIcon={<SearchIcon />}
          >
            Buscar
          </Button>
          <Button
            variant="contained"
            color="secundary"
            size="medium"
            className={classes.button}
            startIcon={<ClearAllIcon />}
          >
            Limpiar
          </Button>
        </ButtonDiv>
      </SelectRow>
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  flex-wrap: wrap;
  width: 97.777777777%;
  .MuiButton-containedPrimary {
    background-color: #2f358f;
    margin-bottom: 0.5rem;
    margin-left: 0px!important;
  }
  .MuiFormControl-root {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    min-width: 120px;
  }
  .MuiButtonBase-root {
    margin-left: 0px;
    margin-rigth: 0px;
    width: 100%;
    margin: 8px;
  }
  #maxprice {
    height: 4.5rem;
  }
`

const SelectRow = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
`

const ButtonDiv = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;

`
export default SearchHouses

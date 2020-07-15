import React, { useState } from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"
import ClearAllIcon from "@material-ui/icons/ClearAll"
import SelectComponent from "./SelectComponent"
import SnackbarComponent from '../Snackbar';
import {navigate} from 'gatsby';
import {
  PropertyType,
  ListType,
  Currency,
  MinPrice,
  MaxPrice,
} from "./MenuItems"

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

const SearchPropiedades = ({ filterValues }) => {
  const classes = useStyles()
  const [filterState, setFilterState] = useState(filterValues)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const changeFilter = payload => {
    const keyObject = payload.keyObject
    setFilterState({ ...filterState, [keyObject]: payload.value })
  }

  const clearFilter = () => {
    setFilterState({
      propertyType: "",
      listType: "",
      currency: "",
      minPrice: "",
      maxPrice: "",
    })
  }

  const fieldsNotEmpty = (
    propertyType,
    listType,
    currency,
    minPrice,
    maxPrice
  ) =>
    propertyType !== "" &&
    listType !== "" &&
    currency !== "" &&
    minPrice !== "" &&
    maxPrice !== ""

  const checkFields = () => {
    const { propertyType, listType, currency, minPrice, maxPrice } = filterState
    if (fieldsNotEmpty(propertyType, listType, currency, minPrice, maxPrice)) {
      navigate(
        `propiedades?propertyType=${propertyType}&listType=${listType}&currency=${currency}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      )
    } else {
      setOpenSnackbar(true)
    }
  }

  const closeSnakbar = (event, reason) => {
    setOpenSnackbar(false)
  }

  const dummyMenuItems = [
    { value: 10, label: "Item 1" },
    { value: 20, label: "Item 2" },
  ]

  return (
    <SearchContainer>
      <SnackbarComponent variant='error' open={openSnackbar} handleClose={closeSnakbar} msg={"Ninguno de los campos puede ser vacio"} />
      <SelectRow>
        <SelectComponent
         label="Tipo de Propiedad"
         keyObject="propertyType"
         menuItems={PropertyType}
         filter={filterState.propertyType}
         setFilterValue={changeFilter}
          labelColor="#2f358f"
        />
        <SelectComponent
          label="Tipo de Listado"
          keyObject="listType"
          menuItems={
            filterState.propertyType !== "terrenos" ? ListType : []
          }
          filter={filterState.listType}
          setFilterValue={changeFilter}
          labelColor="#2f358f"
        />
        <SelectComponent
          label="Moneda"
          keyObject="currency"
          menuItems={Currency}
          filter={filterState.currency}
          setFilterValue={changeFilter}
          labelColor="#2f358f"
        />
        <SelectComponent
          label="Min Precio"
          keyObject="minPrice"
          menuItems={MinPrice}
          filter={filterState.minPrice}
          setFilterValue={changeFilter}
          labelColor="#2f358f"
        />
        <SelectComponent
          label="Max Precio"
          keyObject="maxPrice"
          menuItems={MaxPrice}
          filter={filterState.maxPrice}
          setFilterValue={changeFilter}
          labelColor="#2f358f"
        />
         <ButtonDiv>
            <Button
              variant="contained"
              color="secundary"
              size="large"
              className={classes.button}
              startIcon={<ClearAllIcon />}
              onClick={() => clearFilter()}
            >
              Limpiar
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SearchIcon />}
              onClick={() => checkFields()}
            >
              Buscar
            </Button>
          </ButtonDiv>
      </SelectRow>
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  flex-wrap: wrap;
  width: 97.777777777%;
  .MuiButton-containedPrimary {
    background-color: #2f358f;
    margin-bottom: 0.5rem;
    margin-left: 0px !important;
  }
  .MuiFormControl-root {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
    margin-left: 0 !important;
    margin-right: 0.5rem;
    min-width: 120px;
  }
  .MuiSelect-root {
    background: white;
  }
  .MuiButtonBase-root {
    margin-left: 0px;
    width: 100%;
    margin: 8px;
    margin-right: 0.5rem;
  }
  #maxprice {
    height: 4.5rem;
  }

  @media (max-width: 768px) {
    width: 100% !important;
  }
`

const SelectRow = styled.div`
  display: flex;
  flex-direction: row;
  width: inherit;
  align-items: center;
`

const ButtonDiv = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;
`
export default SearchPropiedades

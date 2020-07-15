import React, { useState } from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"
import ClearAllIcon from "@material-ui/icons/ClearAll"
import SelectComponent from "./SelectComponent"
import Collapsible from "react-collapsible"
import SnackbarComponent from '../Snackbar';
import {
  PropertyType,
  ListType,
  Currency,
  MinPrice,
  MaxPrice,
} from "./MenuItems"
import {navigate} from 'gatsby';

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
  const [filterState, setFilterState] = useState({
    propertyType: "",
    listType: "",
    currency: "",
    minPrice: "",
    maxPrice: "",
  })
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

  const fieldsNotEmpty = (propertyType, listType, currency, minPrice, maxPrice) => propertyType !== '' && listType !== '' && currency !== '' && minPrice !== '' && maxPrice !== ''

  const checkFields = () => {
    const { propertyType, listType, currency, minPrice, maxPrice } = filterState;
    if(fieldsNotEmpty(propertyType, listType, currency, minPrice, maxPrice)){
      navigate(`propiedades?propertyType=${propertyType}&listType=${listType}&currency=${currency}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
    }else{

      setOpenSnackbar(true)
    }
  }

  const closeSnakbar = (event, reason) => {
    
      
          setOpenSnackbar(false);
  }

  return (
    <Container>
      <SnackbarComponent variant='error' open={openSnackbar} handleClose={closeSnakbar} msg={"Ninguno de los campos puede ser vacio"} />
      <Collapsible trigger="Buscar Propiedad">
        <SearchContainer>
          <SelectRow>
            <SelectComponent
              label="Tipo de Propiedad"
              keyObject="propertyType"
              menuItems={PropertyType}
              filter={filterState.propertyType}
              setFilterValue={changeFilter}
            />
            <SelectComponent
              label="Tipo de Listado"
              keyObject="listType"
              menuItems={
                filterState.propertyType !== "terrenos" ? ListType : []
              }
              filter={filterState.listType}
              setFilterValue={changeFilter}
            />
          </SelectRow>
          <SelectRow>
            <SelectComponent
              label="Moneda"
              keyObject="currency"
              menuItems={Currency}
              filter={filterState.currency}
              setFilterValue={changeFilter}
            />
            <SelectComponent
              label="Min Precio"
              keyObject="minPrice"
              menuItems={MinPrice}
              filter={filterState.minPrice}
              setFilterValue={changeFilter}
            />
          </SelectRow>
          <SelectRow id="maxprice">
            <SelectComponent
              style={{ width: "100%" }}
              label="Max Precio"
              keyObject="maxPrice"
              menuItems={MaxPrice}
              filter={filterState.maxPrice}
              setFilterValue={changeFilter}
            />
          </SelectRow>
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
    :hover {
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

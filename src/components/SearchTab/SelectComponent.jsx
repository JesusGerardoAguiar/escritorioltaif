import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import styled from "styled-components";


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

const SelectComponent = ({ menuItems, label, property, setPropertyValue, style,   labelColor }) => {
  const classes = useStyles()

  const renderMenuItems =() => {
      return menuItems && menuItems.map((item) => <MenuItem value={item.value}>{item.label}</MenuItem>)
  }
  const handleChange = event => {
    setPropertyValue(event.target.value)
  }

  return (
      <FormControlStyled style={style} variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label" style={{ color: (labelColor ? labelColor : 'white')}}>
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={property}
          onChange={handleChange}
        >
          {renderMenuItems()}
        </Select>
      </FormControlStyled>
  )
}

const FormControlStyled = styled(FormControl)`
width: inherit;
  .MuiSvgIcon-root{
    color: #2f358f;
  }
  .MuiFilledInput-underline:before{
    border-bottom: 1px solid #2f358f;
  }
`

export default SelectComponent

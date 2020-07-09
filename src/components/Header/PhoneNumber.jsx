import React, { useState } from "react"
import {
  MainDiv,
  LinksContainerDiv,
  LinkDiv,
  InsideLinkDiv,
  IconDiv,
  LinkBox,
} from "./styles"
import Facebook from "../../../content/assets/icons/facebook.svg"
import Instagram from "../../../content/assets/icons/instagram.svg"
import { Link } from "gatsby"
import Drawer from "@material-ui/core/Drawer"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Hamburguer from "../../../content/assets/icons/hamburguer.svg"
import Close from "../../../content/assets/icons/close.svg"
import LtaiftLogo from "../../../content/assets/icons/logoescritorio-01.svg"
// import LtaiftLogo from "../../../content/assets/img/logoltaif-01.jpg"
import Media from "react-media"
import Scroll from "react-scroll"
import Submenu from "./SubMenu"

const LinkScroll = Scroll.Link
const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

const PhoneNumber = ({ location }) => {
  console.log(location)
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const classes = useStyles()

  const renderHeader = matches => {
    if (matches.small) {
      return <></>
    } else if (matches.large) {
      return (
        <MainDiv
          pathname={location.pathname}
          style={{ height: "2rem", background: "#2f358f", justifyContent: 'flex-end', paddingRight: '2rem' }}
        >
          <p style={{ marginBottom: 0, color: 'white', fontFamily: 'RobotoL' }}>Teléfono +598 99819199</p>
        </MainDiv>
      )
    }
  }
  return (
    <>
      <Media queries={{ small: { maxWidth: 768 }, large: { minWidth: 769 } }}>
        {matches => renderHeader(matches)}
      </Media>
    </>
  )
}

export default PhoneNumber

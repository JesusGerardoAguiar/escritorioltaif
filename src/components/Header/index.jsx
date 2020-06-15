import React, { useState, useEffect } from "react"
import {
  MainDiv,
  LinksContainerDiv,
  LinkDiv,
  InsideLinkDiv,
  IconDiv,
} from "./styles"
import Facebook from "../../../content/assets/icons/facebook.svg"
import Instagram from "../../../content/assets/icons/instagram.svg"
import { Link } from "gatsby"
import Drawer from "@material-ui/core/Drawer"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Hamburguer from '../../../content/assets/icons/hamburguer.svg'
import Close from '../../../content/assets/icons/close.svg'
import DecorartLogo from '../../../content/assets/gatsby-icon.png'
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

const Header = ({ location }) => {
  console.log(location)
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const classes = useStyles()

  const renderHeader = matches => {
    if (matches.small) {
      return (
        <div>
          <MainDiv>
            <div onClick={() => setOpen(true)}><img src={Hamburguer} style={{width: '3rem'}}/></div>

            <div><img src={DecorartLogo} style={{ width: '3rem' }}/></div>
          </MainDiv>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={() => setOpen(false)}>
                <div><img src={Close}  style={{width: '1rem'}}/></div>
              </IconButton>
            </div>
            <LinkDiv onClick={() => setOpen(false)}>
              <Link>Inicio</Link>
            </LinkDiv>

            <LinkDiv onClick={() => setOpen(false)}>
              <LinkScroll
                onClick={() => setOpen(false)}
                activeClass="active"
                to="History"
                spy={true}
                smooth={true}
                duration={400}
              >
                <Link to="" style={{ marginRight: "0px" }}>
                  Historia
                </Link>
              </LinkScroll>
            </LinkDiv>
            <LinkDiv onClick={() => setOpen(false)}>
              <LinkScroll
                onClick={() => setOpen(false)}
                activeClass="active"
                to="products"
                spy={true}
                smooth={true}
                duration={400}
              >
                <Link to="" style={{ marginRight: "0px" }}>
                  Productos
                </Link>
              </LinkScroll>
            </LinkDiv>
            <LinkDiv onClick={() => setOpen(false)}>
              <LinkScroll
                onClick={() => setOpen(false)}
                activeClass="active"
                to="process"
                spy={true}
                smooth={true}
                duration={400}
              >
                <Link to="" style={{ marginRight: "0px" }}>
                  Proceso
                </Link>
              </LinkScroll>
            </LinkDiv>
            <LinkDiv onClick={() => setOpen(false)}>
              <LinkScroll
                onClick={() => setOpen(false)}
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                duration={400}
              >
                <Link to="" style={{ marginRight: "0px" }}>
                  Contacto
                </Link>
              </LinkScroll>
            </LinkDiv>
            <IconDiv>
              <img
                src={Facebook}
                style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
              />
              <img
                src={Instagram}
                style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
              />
            </IconDiv>
          </Drawer>
        </div>
      )
    } else if (matches.large) {
      console.log(anchorEl)
      return (
        <MainDiv pathname={location.pathname}>
          <LinksContainerDiv>
            <LinkDiv>
              <InsideLinkDiv>
                <Link>Inicio</Link>
                <LinkScroll
                  activeClass="active"
                  to="History"
                  spy={true}
                  smooth={true}
                  duration={400}
                >
                  <Link to="" style={{ marginRight: "0px" }}>
                    Historia
                  </Link>
                </LinkScroll>
                <Submenu />
                <LinkScroll
                  activeClass="active"
                  to="process"
                  spy={true}
                  smooth={true}
                  duration={400}
                >
                  <Link to="" style={{ marginRight: "0px" }}>
                    Proceso
                  </Link>
                </LinkScroll>
                <LinkScroll
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  duration={400}
                >
                  <Link to="" style={{ marginRight: "0px" }}>
                    Contacto
                  </Link>
                </LinkScroll>
              </InsideLinkDiv>
            </LinkDiv>
            <IconDiv>
            <a
                href="https://www.facebook.com/decorartamoblamientos/"
                target="_blank"
              >
                <img
                  src={Facebook}
                  style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
                />
              </a>
              <a
                href="https://www.instagram.com/decorartamoblamientos/"
                target="_blank"
              >
                <img
                  src={Instagram}
                  style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
                />
              </a>
            </IconDiv>
          </LinksContainerDiv>
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

export default Header

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

const Header = ({ location }) => {
  console.log(location)
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const classes = useStyles()

  const renderHeader = matches => {
    if (matches.small) {
      return (
        <div>
          <MainDiv>
            <div onClick={() => setOpen(true)}>
              <img alt="a" src={Hamburguer} style={{ width: "3rem" }} />
            </div>

            <div>
              <img alt="a" src={LtaiftLogo} style={{ width: "10rem" }} />
            </div>
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
                <div>
                  <img alt="a" src={Close} style={{ width: "2rem;" }} />
                </div>
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
                alt="a"
                src={Facebook}
                style={{ width: "4rem", marginBottom: 0, cursor: "pointer" }}
              />
              <img
                alt="a"
                src={Instagram}
                style={{ width: "4rem", marginBottom: 0, cursor: "pointer" }}
              />
            </IconDiv>
          </Drawer>
        </div>
      )
    } else if (matches.large) {
      console.log(anchorEl)
      return (
        <MainDiv pathname={location.pathname}>
          <img
            alt="a"
            src={LtaiftLogo}
            style={{ width: "20rem", marginBottom: 0 }}
          />
          <LinkDiv>
            <LinkBox>
              <Link>Inicio</Link>
            </LinkBox>
            <Submenu
              submenu={"Ventas"}
              submenuChilds={["casas", "apartamentos"]}
            />
            <Submenu
              submenu={"Alquileres"}
              submenuChilds={["casas", "apartamentos"]}
              />
              <LinkBox>
            <LinkScroll
              activeClass="active"
              to="process"
              spy={true}
              smooth={true}
              duration={400}
            >
                <Link to="" style={{ marginRight: "0px" }}>
                  Terrenos
                </Link>
            </LinkScroll>
              </LinkBox>
            <Submenu
              submenu={"Campos y Chacras"}
              submenuChilds={["venta", "alquiler"]}
            />
            <Submenu
              submenu={"Galpones y Locales Comerciales"}
              submenuChilds={["venta", "alquiler"]}
              />
              <LinkBox>
            <LinkScroll
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              duration={400}
            >
                <Link to="" style={{ marginRight: "0px" }}>
                  Remates
                </Link>
            </LinkScroll>
              </LinkBox>
              <LinkBox>
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
              </LinkBox>
          </LinkDiv>
          {/* <a
                href="_"
                target="_blank"
              >
                <img alt="a"
                  src={Facebook}
                  style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
                />
              </a>
              <a
                href="_"
                target="_blank"
              >
                <img
                alt="a"
                  src={Instagram}
                  style={{ width: "2rem", marginBottom: 0, cursor: "pointer" }}
                />
              </a> */}
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

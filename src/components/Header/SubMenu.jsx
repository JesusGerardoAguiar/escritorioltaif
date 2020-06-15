import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "gatsby"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
    backgroundColor: "white"
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
        <a
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Productos
        </a>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}><Link to="/butacas">Butacas</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/esquineros">Esquineros</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/comedor">Comedor</Link></MenuItem>

                    <MenuItem onClick={handleClose}><Link to='/fundas'>Fundas</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to='/banquetas'>Banquetas</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to='/almohadones'>Almohadones</Link></MenuItem>

                    <MenuItem onClick={handleClose}><Link to="/sofas">Sofas</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/sofacama">Sofacama</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/respaldos">Respaldos</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/sale">Sale</Link></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    </div>
  );
}
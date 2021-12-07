import * as React from "react"
import styled from "styled-components"
import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List as ListMUI,
  ListItem,
  Typography,
} from "@mui/material"

import {
  ChevronRight as ChevronRightIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  Menu as MenuIcon,
} from "@mui/icons-material"

import Link from "../../components/Link"

const DrawerHeader = styled.div`
  display: flex;
  align-items: "center";
  height: 70px;
`

const List = styled(ListMUI)`
  min-width: 50%;
`

const MobileNav = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false)
  const [isReservationOpened, setIsReservationOpened] = React.useState(false)

  const toggleMenu = () => setIsMenuOpened(prev => !prev)
  const closeMenu = () => setIsMenuOpened(false)

  const toggleReservation = () => setIsReservationOpened(prev => !prev)

  return (
    <>
      <IconButton
        size="medium"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleMenu}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <Drawer
        variant="persistent"
        anchor="right"
        open={isMenuOpened}
        onClose={closeMenu}
      >
        <DrawerHeader>
          <IconButton onClick={closeMenu} size="large">
            <ChevronRightIcon fontSize="medium" />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List style={{ minWidth: "50vw" }}>
          <Link to="/">
            <ListItem button>
              <Typography variant="h6">Home</Typography>
            </ListItem>
          </Link>
          <Link to="/about">
            <ListItem button>
              <Typography variant="h6">O nas</Typography>
            </ListItem>
          </Link>
          <Link to="/gallery">
            <ListItem button>
              <Typography variant="h6">Galeria</Typography>
            </ListItem>
          </Link>
          <ListItem button onClick={toggleReservation}>
            <Typography variant="h6">Rezerwacja</Typography>
            {isReservationOpened ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={isReservationOpened} timeout="auto" unmountOnExit>
            <Link to="https://www.moment.pl/barber-shotlimanowa">
              <ListItem button sx={{ pl: "32px" }}>
                <Typography variant="h6">Limanowa</Typography>
              </ListItem>
            </Link>
            <Link to="https://www.moment.pl/barber-shot-nowy-sacz">
              <ListItem button sx={{ pl: "32px" }}>
                <Typography variant="h6">Nowy Sącz</Typography>
              </ListItem>
            </Link>
          </Collapse>
          <Link to="/contact">
            <ListItem button>
              <Typography variant="h6">Kontakt</Typography>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  )
}

export default MobileNav

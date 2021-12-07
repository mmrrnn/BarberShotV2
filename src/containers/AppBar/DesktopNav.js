import * as React from "react"
import styled from "styled-components"
import {
  Button,
  List,
  ListItem,
  ListItemButton as ListItemButtonMUI,
  ListItemText,
  Popover,
} from "@mui/material"
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material"

import Link from "../../components/Link"

const LinkButton = styled(Button)`
  height: 70px;
  margin-left: 8px;
  margin-right: 8px;
`

const ListItemButton = styled(ListItemButtonMUI)`
  padding: 8px 64px;
`

const DesktopNav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const toggleOpen = event => {
    setAnchorEl(!!anchorEl ? null : event.currentTarget)
  }
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <Link to="/">
        <LinkButton color="inherit">Home</LinkButton>
      </Link>
      <Link to="/about">
        <LinkButton color="inherit">O nas</LinkButton>
      </Link>
      <Link to="/gallery">
        <LinkButton color="inherit">Galeria</LinkButton>
      </Link>
      <LinkButton color="inherit" onClick={toggleOpen}>
        Rezerwacja
        {!!anchorEl ? (
          <ExpandLessIcon fontSize="small" />
        ) : (
          <ExpandMoreIcon fontSize="small" />
        )}
      </LinkButton>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to="https://www.moment.pl/barber-shotlimanowa">
                <ListItemText primary="Limanowa" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to="https://www.moment.pl/barber-shot-nowy-sacz">
                <ListItemText primary="Nowy Sącz" />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
      <Link to="/contact">
        <LinkButton color="inherit">Kontakt</LinkButton>
      </Link>
    </>
  )
}

export default DesktopNav

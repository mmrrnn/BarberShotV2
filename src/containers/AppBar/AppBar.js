import * as React from "react"
import styled from "styled-components"
import {
  AppBar as AppBarMUI,
  Box,
  Hidden,
  Toolbar
} from "@mui/material"

import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import { Link } from '../../components'

import logoSrc from "../../images/logo.png"

const LogoImg = styled.img`
  height: 64px;
`

const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMUI position="fixed" color="inherit">
        <Toolbar>
          <Link to="/">
            <LogoImg src={logoSrc} alt="BarberShot logo" />
          </Link>
          <Box sx={{ flexGrow: 1 }} />

          <Hidden mdDown>
            <DesktopNav />
          </Hidden>

          <Hidden mdUp>
            <MobileNav />
          </Hidden>
        </Toolbar>
      </AppBarMUI>
    </Box>
  )
}

export default AppBar

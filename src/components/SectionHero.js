import React from "react"
import styled from "styled-components"
import { Grid, Typography, useTheme, useMediaQuery } from "@mui/material"

import mainHeroImage from "../images/4.jpeg"

const HeroContainer = styled(Grid)`
  height: 240px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("${mainHeroImage}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

function SmallHero({ title }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <HeroContainer
      container
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        style={{ color: "white" }}
        variant={isMobile ? "h4" : "h3"}
        // align="center"
      >
        {title}
      </Typography>
    </HeroContainer>
  )
}

export default SmallHero

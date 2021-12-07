import React from "react"
import styled from "styled-components"
import { Grid, Typography } from "@mui/material"

import GridWrapper from "../components/GridWrapper"
import imgSrc from "../images/4.jpeg"
import logoSrc from "../images/logo.png"

const CenteredGrid = styled(Grid)`
  text-align: center;
  padding: 2rem 1rem;

  > * {
    margin: 1rem 0;
  }
`

const DoubleContainer = () => {
  return (
    <GridWrapper container justifyContent="center" alignItems="center">
      <CenteredGrid item xs={12} md={6} lg={5}>
        <img src={logoSrc} alt="BarberShot logo" style={{ height: "8rem" }} />
        <Typography variant="h4">TO COŚ WIĘCEJ NIŻ FRYZJER..</Typography>
        <Typography variant="p">
          Barber Shot to ekipa ze wspólną pasją, która ceni sobie profesjonalizm
          i z zaangażowaniem podchodzi do każdego klienta. Ponadto jest to także
          strefa, w której mężczyzna może poczuć się swobodnie. Pogadać o
          męskich sprawach, na luzie, bez skrępowania. Wystrój lokalu, a także
          otwarta kadra wzbudzą w Tobie atmosferę miejsca, do którego chce się
          wracać.
        </Typography>
      </CenteredGrid>
      <Grid item xs={12} md={6} lg={5} style={{ padding: 0 }}>
        <img src={imgSrc} alt="BarberShot lokal" style={{ width: "100%" }} />
      </Grid>
    </GridWrapper>
  )
}

export default DoubleContainer

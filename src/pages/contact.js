import * as React from "react"
import styled from "styled-components"
import { Typography, Grid } from "@mui/material"
import {
  LocationOn as LocationOnIcon,
  PhoneIphone as PhoneIphoneIcon,
  Email as EmailIcon,
} from "@mui/icons-material"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { GridWrapper, SectionHero } from "../components"

const Container = styled(GridWrapper)`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

const AlignedGrid = styled(Grid)`
  margin: 1rem 0;
  display: flex;
  align-items: center;

  * {
    margin: 0 0.25rem;
  }
`

const MapFrame = styled.iframe`
  border: none;
  height: 640px;
  width: 100%;
  padding: 0;
  margin: 0;
`

const ContactPage = () => (
  <Layout>
    <Seo title="Kontakt" />
    <SectionHero title="KONTAKT" />
    <Container container justifyContent="space-around" spacing={3}>
      <Grid item xs={12} md={5} lg="auto">
        <Typography variant="h5">Limanowa</Typography>
        <AlignedGrid>
          <LocationOnIcon fontSize="large" />
          <Typography variant="h6">Lokalizacja: ul. Krótka 12</Typography>
        </AlignedGrid>
        <AlignedGrid>
          <PhoneIphoneIcon fontSize="large" />
          <Typography variant="h6">Telefon: 730-138-447</Typography>
        </AlignedGrid>
        <AlignedGrid>
          <EmailIcon fontSize="large" />
          <Typography variant="h6">E-mail: barbershotlim@gmail.com</Typography>
        </AlignedGrid>
      </Grid>
      <Grid item xs={12} md={5} lg="auto">
        <Typography variant="h5">Nowy Sącz</Typography>
        <AlignedGrid>
          <LocationOnIcon fontSize="large" />
          <Typography variant="h6">
            Lokalizacja: ul. Jagiellońska 29/3
          </Typography>
        </AlignedGrid>
        <AlignedGrid>
          <PhoneIphoneIcon fontSize="large" />
          <Typography variant="h6">Telefon: 885-455-000</Typography>
        </AlignedGrid>
        <AlignedGrid>
          <EmailIcon fontSize="large" />
          <Typography variant="h6">E-mail: barbershotlim@gmail.com</Typography>
        </AlignedGrid>
      </Grid>
      <Grid item xs={12} md="auto">
        <Typography variant="h5">Godziny otwarcia</Typography>
        <AlignedGrid>
          <Typography variant="h6">
            poniedziałek-piątek: 9:00 - 18:00
          </Typography>
        </AlignedGrid>
        <AlignedGrid>
          <Typography variant="h6">sobota: 8:00 - 14:00</Typography>
        </AlignedGrid>
        <AlignedGrid>
          <Typography variant="h6">niedziela: nieczynne</Typography>
        </AlignedGrid>
      </Grid>
    </Container>
    <MapFrame
      className="embed-responsive-item"
      src="https://maps.google.com/maps?q=BarberShot%20Limanowa%20pod%20golcowem,%Limanowa&t=&z=13&ie=UTF8&iwloc=&output=embed"
      allow="encrypted-media"
      allowfullscreen
    />
  </Layout>
)

export default ContactPage

import React from "react"
import styled from "styled-components"
import { Grid, Typography, IconButton } from "@mui/material"
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material"

import { GridWrapper, Link, ListUnstyled } from "../../components"

const FooterWrapper = styled(GridWrapper)`
  background-color: #212529;

  @media (max-width: 999px) {
    text-align: center;
  }
`

const AlignedGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Li = styled.li`
  color: rgb(170, 180, 190);
`

const SocialMediaButton = styled(IconButton)`
  color: white;
`

const Footer = () => {
  return (
    <FooterWrapper container justifyContent="space-around">
      <Grid item xs={12} sm={6} md="auto">
        <Typography variant="h5" color="white">
          INFORMACJE
        </Typography>
        <ListUnstyled>
          <Li>
            <Link to="/">Home</Link>
          </Li>
          <Li>
            <Link to="/about">O nas</Link>
          </Li>
          <Li>
            <Link to="/gallery">Galeria</Link>
          </Li>
          <Li>
            <Link to="/contact">Kontakt</Link>
          </Li>
        </ListUnstyled>
      </Grid>
      <Grid item xs={12} sm={6} md="auto">
        <Typography variant="h5" color="white">
          GODZINY OTWARCIA
        </Typography>
        <ListUnstyled>
          <Li>poniedziałek - piątek: 9:00 - 18:00</Li>
          <Li>sobota: 8:00 - 14:00</Li>
          <Li>niedziela: zamknięte</Li>
        </ListUnstyled>
      </Grid>
      <Grid item xs={12} sm={12} md="auto">
        <Typography variant="h5" color="white">
          DANE KONTAKTOWE
        </Typography>
        <ListUnstyled>
          <Li>e-mail: barbershotlim@gmail.com</Li>
          <Li>
            <Typography variant="h6" color="white">
              Limanowa
            </Typography>
          </Li>
          <Li>adres: ul. Krótka 12</Li>
          <Li>telefon Li: 730-138-447</Li>
          <Li>
            <Typography variant="h6" color="white">
              Nowy Sącz
            </Typography>
          </Li>
          <Li>adres: ul. Jagiellońska 29/3</Li>
          <Li>telefon: 885-455-000</Li>
        </ListUnstyled>
      </Grid>
      <AlignedGrid item xs={12}>
        <Link to="https://www.facebook.com/barbershotpl/about/?ref=page_internal">
          <SocialMediaButton size="large">
            <FacebookIcon fontSize="large" />
          </SocialMediaButton>
        </Link>
        <Link to="https://www.instagram.com/barber_shot_lim">
          <SocialMediaButton size="large">
            <InstagramIcon fontSize="large" />
          </SocialMediaButton>
        </Link>
      </AlignedGrid>
    </FooterWrapper>
  )
}

export default Footer

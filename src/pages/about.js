import * as React from "react"
import styled from "styled-components"
import { Button, Typography, Dialog, Grid } from "@mui/material"
import { Close as CloseIcon } from "@mui/icons-material"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {
  GridWrapper,
  CloseButton,
  SectionHero,
  Link,
  ThumbnailImage,
} from "../components"
import fullScreenImage from "../images/about.jpeg"
import imageSrc from "../images/4.jpeg"
import image2Src from "../images/about.jpeg"

const Container = styled(GridWrapper)`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

const GridImage = styled(Grid)`
  height: 90vh;
  background-image: url(${fullScreenImage});
  background-attachment: fixed;
  background-position: left;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
`

const CenteredGrid = styled(GridWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const LinkButton = styled(Button)`
  padding: 0.5rem 2rem;
  color: ${({ theme }) => theme.palette.gold};
  letter-spacing: 0.2rem;
  border: 1px solid ${({ theme }) => theme.palette.gold}!important;
  border-radius: 0px;
  background-color: white;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.palette.gold};
  }
`

const DialogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const AboutPage = () => {
  const [open, setOpen] = React.useState(false)
  const dialogImage = React.useRef(null)

  const getOnClick = image => () => {
    setOpen(true)
    dialogImage.current = image
  }

  const handleClose = () => {
    setOpen(false)
    dialogImage.current = null
  }

  return (
    <Layout>
      <Seo title="O nas" />
      <SectionHero title="O NAS" />
      <Container container alignItems="center" justifyContent="center">
        <GridWrapper item xs={12} sm={10} lg={8}>
          <Typography variant="h4" align="center">
            KIM JESTEŚMY?
          </Typography>
        </GridWrapper>
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="body2" align="justify">
            Jesteśmy młodą grupą osób, których połączyła pasja do fryzjerstwa.
            Specjalizujemy się w strzyżeniu męskim: głowy jak i zarostu. W pełni
            opanowaliśmy posługiwanie się brzytwą, doskonale rozumiemy potrzeby
            klienta, a także znamy najnowsze trendy fryzjerskie. Do każdego
            klienta podchodzimy indywidualnie, z chęcią dobierzemy fryzurę,
            zaproponujemy zmiany. Nasza kadra stale się rozwija uczestnicząc w
            szkoleniach i imprezach ściśle związanych z fryzjerstwem. Ponadto
            można u nas znaleźć szeroki wachlarz wysokiej jakości akcesoriów,
            kosmetyków do pielęgnacji włosów i zarostu.
          </Typography>
        </Grid>
        <CenteredGrid item xs={12} justifyContent="center">
          <Link to="/gallery">
            <LinkButton variant="outlined">ZOBACZ GALERIĘ</LinkButton>
          </Link>
        </CenteredGrid>
      </Container>
      <GridImage item xs={12} />
      <Container container alignItems="center" justifyContent="center">
        <GridWrapper item xs={12} sm={10} lg={8}>
          <Typography variant="h4" align="center">
            NASZA HISTORIA
          </Typography>
        </GridWrapper>
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="body2" align="justify">
            Otwarcie pierwszego salonu miało miejsce 21 października 2016 roku w
            Limanowej. Początkowo klientów obsługiwał tylko właściciel, obecnie
            jest nas piątka. Aby usprawnić pracę salonu, postanowiliśmy
            wprowadzić rezerwację online. Z czasem zainteresowanie naszą marką
            urosło do tego stopnia, że postanowiliśmy otworzyć drugi salon w
            Nowym Sączu. Oficjalne otwarcie odbyło się 17 czerwca 2019 roku.
            Zamierzamy stale się rozwijać i nie wykluczamy w przyszłości
            otwarcia nowych salonów.
          </Typography>
        </Grid>
      </Container>
      <GridWrapper container justifyContent="center" spacing={4}>
        {[0, 1, 2].map(id => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            onClick={getOnClick(imageSrc)}
            key={id}
          >
            <ThumbnailImage
              style={{ height: "100%" }}
              src={id % 2 ? imageSrc : image2Src}
              alt="gallery image"
            />
          </Grid>
        ))}
      </GridWrapper>
      {open && (
          <Dialog
            maxWidth="xl"
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: { height: "100%" },
            }}
          >
            <CloseButton onClick={handleClose}>
              <CloseIcon />
            </CloseButton>
            <DialogImage src={imageSrc} alt="gallery iamge" />
          </Dialog>
        )}
    </Layout>
  )
}

export default AboutPage

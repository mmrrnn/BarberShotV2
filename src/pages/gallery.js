import * as React from "react"
import styled from "styled-components"
import { Grid, Dialog } from "@mui/material"
import { Close as CloseIcon } from "@mui/icons-material"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { CloseButton, SectionHero, ThumbnailImage } from "../components"
import imageSrc from '../images/4.jpeg'
import image2Src from '../images/about.jpeg'

const GalleryContainer = styled(Grid)`
  padding: 4rem 2rem;
`

const DialogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const GalleryPage = () => {
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
      <Seo title="Galeria" />
      <SectionHero title="GALERIA" />
      <GalleryContainer container spacing={3} justify="center">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8 ,9].map((id) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
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
      </GalleryContainer>
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

export default GalleryPage

import * as React from "react"
import styled from "styled-components"
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material"

import { GridWrapper } from "../components"

const Container = styled(GridWrapper)`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

const PriceTypography = styled(Typography)`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.gold};
`

const PriceList = () => {
  return (
    <Container
      container
      alignItems="center"
      justifyContent="center"
      spacing={10}
    >
      <GridWrapper item xs={12} sm={10} lg={8}>
        <Typography variant="h4" align="center">
          OFERTA
        </Typography>
      </GridWrapper>
      <Grid item xs={12} md={6} lg={5}>
        <Typography variant="h5">LIMANOWA</Typography>
        <List>
          <ListItem
            secondaryAction={
              <PriceTypography variant="subtitle1">40,-</PriceTypography>
            }
          >
            <ListItemText primary="Strzyżenie męskie" />
          </ListItem>
          <Divider />
          <ListItem
            secondaryAction={
              <PriceTypography variant="subtitle1">40,-</PriceTypography>
            }
          >
            <ListItemText primary="Strzyżenie brody" />
          </ListItem>
          <Divider />
          <ListItem
            secondaryAction={
              <PriceTypography variant="subtitle1">40,-</PriceTypography>
            }
          >
            <ListItemText primary="Golenie brzytwą" />
          </ListItem>
          <Divider />
          <ListItem
            secondaryAction={
              <PriceTypography variant="subtitle1">40,-</PriceTypography>
            }
          >
            <ListItemText primary="Strzyżenie włosów i brody" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Akcesoria do pielęgnacji" />
          </ListItem>
          <Divider />
        </List>
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <Typography variant="h5">NOWY SĄCZ</Typography>
        <List>
          <ListItem
            secondaryAction={
              <PriceTypography variant="subtitle1">50,-</PriceTypography>
            }
          >
            <ListItemText primary="Strzyżenie męskie" />
          </ListItem>
          <Divider />
          <ListItem
            secondaryAction={
              <PriceTypography variant="subtitle1">45,-</PriceTypography>
            }
          >
            <ListItemText primary="Strzyżenie brody" />
          </ListItem>
          <Divider />
          <ListItem
            secondaryAction={
              <PriceTypography variant="subtitle1">50,-</PriceTypography>
            }
          >
            <ListItemText primary="Golenie brzytwą" />
          </ListItem>
          <Divider />
          <ListItem
            secondaryAction={
              <PriceTypography variant="subtitle1">85,-</PriceTypography>
            }
          >
            <ListItemText primary="Strzyżenie włosów i brody" />
          </ListItem>
          <Divider />
          <ListItem
            secondaryAction={
              <PriceTypography variant="subtitle1">30,-</PriceTypography>
            }
          >
            <ListItemText primary="Odsiwianie" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Akcesoria do pielęgnacji" />
          </ListItem>
          <Divider />
        </List>
      </Grid>
    </Container>
  )
}

export default PriceList

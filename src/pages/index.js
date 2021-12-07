import * as React from "react"
import styled from "styled-components";

import Layout from "../components/layout"
import Seo from "../components/seo"

import heroVideoSrc from '../images/barbershot_2019.mp4'
import { DoubleContainer, PriceList } from "../Home";

const HeroVideo = styled.header`
  video {
    width: 100%;
  }
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroVideo>
      <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
        <source src={heroVideoSrc} type="video/mp4" />
      </video>
    </HeroVideo>
    <DoubleContainer />
    <PriceList />
  </Layout>
)

export default IndexPage

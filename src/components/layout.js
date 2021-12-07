import * as React from "react"
import styled from 'styled-components'
import StyleProvider from "../providers/StyleProvider"

import AppBar from "../containers/AppBar";
import Footer from "../containers/Footer";

const BodyWrapper = styled.div`
  margin-top: 70px;
`;

const Layout = ({ children }) => {
  return (
    <StyleProvider>
      <AppBar />
      <BodyWrapper>
        {children}
        <Footer />
      </BodyWrapper>
    </StyleProvider>
  )
}

export default Layout

import * as React from 'react';
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider, CssBaseline } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import theme from './theme';


const StyleProvider = ({ children }) => {
  return (
    <StyledEngineProvider>
        <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  )
}

export default StyleProvider;


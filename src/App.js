import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './pages/Header';
//import Footer from './pages/Footer';
// A theme with custom primary and secondary color.
// It's optional.

import Main from './pages/Main';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700],
    },
    secondary: {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Main>{this.props.children}</Main>
      </MuiThemeProvider>
    );
  }
}

export default withWidth()(App);

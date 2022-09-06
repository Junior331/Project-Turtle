import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  palette: {
    text: {
      light: '#FFFFFF',
      regular: '',
      default: ''
    },
    title: {
      light: '',
      regular: '#262A2F',
      default: ''
    },

    button: {
      default: '#FFB620',
      disable: ''
    },
    background: {
      light: '#EFE6D5',
      yellow: '#FFB620',
      regular: '',
      default: ''
    },

    error: {
      main: '#d32f2f'
    },
    success: {
      main: '#6EBA19'
    },
    warning: {
      main: '#121A3D'
    }
  },
  typography: {
    fontSize: 1.6,
    htmlFontSize: '10px',
    fontSizeRegular: 1.8,
    fontSizeMedium: 3.2,
    fontSizeLarge: 4.2,
    fontSizeHuge: 5.2,
    fontWeightBold: 700,
    fontWeightThin: 300,
    fontWeightLight: 400,
    fontWeightBolder: 900,
    fontWeightRegular: 500,
    fontWeightMedium: 600
  }
};

export default Theme;

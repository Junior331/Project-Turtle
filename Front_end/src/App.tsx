import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components/modules';
import { AppRoutes } from './routes';
import Theme from './styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
};
export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import main from './themes/main';


import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/Router';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={main}>
        <Routes />
      </ThemeProvider>
    </Router>
  )
}

export default App

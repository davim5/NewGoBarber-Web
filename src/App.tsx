import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

// Routes
import Routes from './routes';

// Context
import { AppProviders } from './hooks';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProviders>
      <Routes />
    </AppProviders>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;

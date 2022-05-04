import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import UserProfile from './pages/UserProfile';
import FavorStatus from './pages/FavorStatus';
import FavorDescription from './pages/FavorDescription';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/inter/500.css';

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
});

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

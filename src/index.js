import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import FavorRequest from './pages/FavorRequest';
import Demand from './pages/Demand';
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import "@fontsource/inter"

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
})

ReactDOM.render(
  <StrictMode>
    <ChakraProvider  theme={theme}>
      <ColorModeScript />
      {/* <Login /> */}
      <Demand />
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

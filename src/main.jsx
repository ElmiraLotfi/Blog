import React from 'react'
import ReactDOM from 'react-dom/client'

import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import theme from './mui/theme.js'
import App from './App.jsx'

import './styles/index.css'
import './styles/fonts.css'

const client = new ApolloClient({
  uri:import.meta.env.VITE_GRAPHCMS_URI,
  cache:new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
)

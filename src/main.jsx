import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import theme from './mui/theme.js'

import { ThemeProvider } from '@emotion/react'
import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri:"https://api-us-west-2.hygraph.com/v2/clxzu3lpg03h907w8uqed6dsn/master",
  cache:new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
       <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
)

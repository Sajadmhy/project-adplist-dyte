import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
    <Auth0Provider
      domain= {process.env.REACT_APP_AUTH0_DOMAIN}
      clientId= {process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      useRefreshTokens={true}
      cacheLocation="localstorage"
      >
      <App />
    </Auth0Provider>
  </CookiesProvider>,
  document.getElementById('root')
)

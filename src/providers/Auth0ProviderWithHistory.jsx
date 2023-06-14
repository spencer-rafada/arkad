import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'

export default function Auth0ProviderWithHistory({ children }) {
  const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN
  const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID

  console.log(domain)
  console.log(clientId)

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      {children}
    </Auth0Provider>
  )
}

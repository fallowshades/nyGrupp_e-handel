import { createAuth0Client, Auth0Client } from '@auth0/auth0-spa-js'

let auth0Client: Auth0Client | null = null

export const initializeAuth0Client = async () => {
  if (!auth0Client) {
    auth0Client = await createAuth0Client({
      domain: 'your-domain',
      clientId: 'your-clientId',
    })
  }
  return auth0Client
}

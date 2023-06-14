import { withAuthenticationRequired } from '@auth0/auth0-react'

export default function AuthenticatedGuard({ component }) {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <p>Loading! Refactor my component later</p>,
  })
  return <Component />
}

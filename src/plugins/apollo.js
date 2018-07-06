import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import VueApollo from 'vue-apollo'
// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: 'https://elsolo-api.herokuapp.com/api'
  })
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = 'token'
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })
  const defaultOptions = {
    watchQuery: {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore'
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all'
    }
  }
  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
    connectToDevTools: true
  })
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient
  })
  Vue.use(VueApollo)
  Vue.use(apolloClient)
  app.provide = apolloProvider.provide()
  console.log(app)
}

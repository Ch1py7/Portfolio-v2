import {
  ApolloClient,
  ApolloQueryResult,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { createApolloProvider } from '@vue/apollo-option'
import gql from 'graphql-tag'
import { Data } from '../types/Graphql.types'

export const getApiData = async () => {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
      },
    }
  })

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
  })

  const { data, loading, error }: ApolloQueryResult<Data> =
    await apolloClient.query({
      query: gql`
        {
          viewer {
            login
          }
          user(login: "Ch1py7") {
            pinnedItems(first: 6) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    id
                    name
                    url
                    languages(first: 10) {
                      edges {
                        node {
                          id
                          name
                          color
                        }
                      }
                    }
                    description
                    homepageUrl
                  }
                }
              }
            }
          }
        }
      `,
    })

  return { apolloProvider, data, loading, error }
}

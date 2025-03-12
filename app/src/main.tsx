import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import './index.css'
import App from './App.tsx'

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)

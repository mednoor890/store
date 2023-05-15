import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './انداكس.css'
import { ApolloProvider } from '@apollo/client'
import { client } from './api/client.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<ApolloProvider client={client} >  
  <App />
  </ApolloProvider>  
)

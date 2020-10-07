import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router , Route } from "react-router-dom";

import logo from './assets/SpaceX-Logo.png';
import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client} >
      <Router>
        <div className="container">
            <img src={logo} alt="logo" style={{width:300, display: "block", margin:"0 auto"}} />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />

        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;

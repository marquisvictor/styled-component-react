import React from 'react';
import {Calender} from './Calendar';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';

function App() {
  return (

    <Router>
      <Security issuer = 'https://dev-3947334.okta.com/oauth2/default'
                clientId = '0oad94ieyufRBYAO45d5'
                redirectUri={window.location.origin + '/callback'}
                pkce={true}
      >
          <SecureRoute path='/' exact={true} component={Calender} />
          <Route path='/callback' component={LoginCallback} />
      </Security>
    </Router>
  );
}

export default App;

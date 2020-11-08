import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './home';
import About from './about';
import Classes from './classes';
import Contact from './contact'
import Admin from './admin';
import AuthContextProvider from './authcontext';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default function App() {
  return (
    <Router>
      <Switch>
        <AuthContextProvider>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/team">
            <Classes />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/admin">
              <Admin />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </AuthContextProvider>
      </Switch>
    </Router>
  )
}
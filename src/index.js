import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Home from './home';
import About from './about';
import Classes from './classes';
import Contact from './contact'
import Admin from './admin';
import AuthContextProvider, { AuthContext } from './authcontext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

export default function App() {
  const { state } = useContext(AuthContext);
  const { isAuth, data } = state;
  return (
    <Router>
      <nav className="nav">
        <Link to="/">Domov</Link>
        <Link to="/about">O muzikáli</Link>
        <Link to="/classes">Zapojené triedy</Link>
        <Link to="/admin" style={{float: "right"}}>{isAuth ? `${data.fname} ${data.lname}` : "Admin"}</Link>
        <Link to="/contact" style={{float: "right"}}>Kontakt</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/classes">
          <Classes />
        </Route>
        <Route path="/admin">
            <Admin />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  )
}
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Box from './pages/Box';
import Button from './pages/Button';
import Checkbox from './pages/Checkbox';
import Icon from './pages/Icon';
import Loader from './pages/Loader';
import Radio from './pages/Radio';
import Select from './pages/Select';
import Text from './pages/Text';

import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <nav className="app__nav">
        <Link className="app__link" to="/">
          Home
        </Link>
        <Link className="app__link" to="/box">
          Box
        </Link>
        <Link className="app__link" to="/button">
          Button
        </Link>
        <Link className="app__link" to="/checkbox">
          Checkbox
        </Link>
        <Link className="app__link" to="/icon">
          Icon
        </Link>
        <Link className="app__link" to="/loader">
          Loader
        </Link>
        <Link className="app__link" to="/radio">
          Radio
        </Link>
        <Link className="app__link" to="/select">
          Select
        </Link>
        <Link className="app__link" to="/text">
          Text
        </Link>
      </nav>

      <div className="container">
        <Switch>
          <Route path="/box" component={Box} />
          <Route path="/button" component={Button} />
          <Route path="/checkbox" component={Checkbox} />
          <Route path="/icon" component={Icon} />
          <Route path="/loader" component={Loader} />
          <Route path="/radio" component={Radio} />
          <Route path="/select" component={Select} />
          <Route path="/text" component={Text} />
        </Switch>
      </div>
    </div>
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import Home from './Home';
import Contact from './Contact';
import Producers from './Producers';
import Touring from './Touring';
import './App.css'

const History = createHashHistory();

ReactDOM.render(
  <div className="App">
    <Router history={History}>
      <div>
        <App />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/producers" component={Producers} />
          <Route path="/touring" component={Touring} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  </div>, 

  document.getElementById('root'));
registerServiceWorker();
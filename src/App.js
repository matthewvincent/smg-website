import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Producers from './Producers';
import Touring from './Touring';
import MenuLink from './MenuLink';
import logo1 from './logo1.svg';


const routes = {
  HOME: "HOME",
  CONTACT: "CONTACT",
  PRODUCERS: "PRODUCERS",
  TOURING: "TOURING",
};

class App extends Component {
  constructor() {
    super();
    this.state = { route: routes.HOME };
  }

  getCurrentPage = () => {
    const { 
      HOME, 
      CONTACT, 
      PRODUCERS, 
      TOURING 
    } = routes;

    switch (this.state.route) {
      case HOME:
        return <Home />;

      case CONTACT:
        return <Contact />;

      case PRODUCERS:
        return <Producers />;

      case TOURING:
        return <Touring />;

      default:
        return <Home />;
    }
  };

  setRoute = (route) => {
    this.setState(() => ({ route }));
  };

  getMenuLinks = () => 
    Object.keys(routes).map(route =>
      <MenuLink 
        key={route}
        setRoute={this.setRoute} 
        route={route}
        selected={this.state.route === route}
      />
    );


  render() {

    const {
      HOME,
      CONTACT,
      PRODUCERS,
      TOURING,
    } = routes;

    return (
      <div className="App">
        <header className="header">
          {this.getMenuLinks()}
        </header>
        <header className="bottom-header">
          {this.state.route !== HOME && 
            <img 
              class="header-logo"
              src={logo1} 
              style={{marginTop: '10px'}}
            />
          }
        </header>
        {this.getCurrentPage()}
      </div>
    );
  }
}

export default App;

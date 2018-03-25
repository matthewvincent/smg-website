import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Producers from './Producers';
import Touring from './Touring';
import MenuLink from './MenuLink';
import Menu from './Menu';
import logo1 from './logo1.svg';
import cn from 'classnames';


const routes = {
  HOME: "HOME",
  TOURING: "TOURING",
  PRODUCERS: "PRODUCERS",
  CONTACT: "CONTACT",
};

class App extends Component {
  constructor() {
    super();
    this.state = { 
      route: routes.HOME,
      mobileMenuOpen: false
    };
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

  toggleMobileMenu = () => 
    this.setState((state) => ({
      mobileMenuOpen: !state.mobileMenuOpen
    }));


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
          <button 
            className={cn({
              "menu-toggle": true,
              "menu-toggle-active": this.state.mobileMenuOpen
            })}
            onClick={this.toggleMobileMenu}
          >
            <span className="toggle-line" />
            <span className="toggle-line" />
            <span className="toggle-line" />
          </button>
          <Menu menuActive={this.state.mobileMenuOpen}>
            {this.getMenuLinks()}
          </Menu>
        </header>
        {this.state.route !== HOME &&
          <header className="bottom-header">
            <img 
              className="header-logo"
              src={logo1} 
              style={{marginTop: '10px'}}
            />
          </header>
        }
        {this.getCurrentPage()}
      </div>
    );
  }
}

export default App;

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


const routes = [
  "home",
  "touring",
  "producers",
  "contact",
];

class App extends Component {
  constructor() {
    super();
    this.state = { 
      mobileMenuOpen: false
    };
  }

  getMenuLinks = () =>  {
    return routes.map(route => 
      <MenuLink 
        key={route}
        route={route}
        closeMobileMenu={this.closeMobileMenu}
      />
    );
  };


  closeMobileMenu = () => {    
    if (this.state.mobileMenuOpen) {
      this.toggleMobileMenu();
    }
  };

  toggleMobileMenu = () => {    
    this.setState((state) => ({
      mobileMenuOpen: !state.mobileMenuOpen
    }));
  };

  renderBottomHeader = () => {
    const url = window.location.href;
    const route = url.substr(url.lastIndexOf('/') + 1);
    return (route !== "home" && routes.includes(route));
  };

  render() {
    return (
      <div>
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
        {this.renderBottomHeader() && 
          <header className="bottom-header">
            <img 
              className="header-logo"
              src={logo1} 
              style={{marginTop: '10px'}}
            />
          </header>
        }
      </div>
    );
  }
}

export default App;

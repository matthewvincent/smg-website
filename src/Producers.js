import React from 'react';
import Script from 'react-load-script';
import './touring.css';

class Producers extends React.Component {
  constructor(){
    super()
    this.state = { loading: true };
  }

  toggleLoading() {
    this.setState(() => ({ loading: false }));
  }

  componentDidMount() {
    (function(e,t,n){var r,a,c="script";e.GigwellIFrame=e.GigwellIFrame||{},r=t.createElement(c),a=t.getElementsByTagName(c)[0],r.async = 1,r.src=n,a.parentNode.insertBefore(r,a)})(window,document,'https://connect.gigwell.com/roster/legacy-gigwell-iframe.js');
    window.GigwellIFrame.callback='https://api.gigwell.com';
    window.GigwellIFrame.tags='producers';
    window.GigwellIFrame.agency='162101';

    setTimeout(() => this.toggleLoading(), 1000);
  }

  render() {  
    return (
      <div className="page globe-background">
        <div id="gigwell-iframe-container"></div>
      </div>
    );
  }
}

export default Producers;
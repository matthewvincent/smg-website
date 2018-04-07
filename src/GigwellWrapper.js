import React from 'react';
import Spinner from './Spinner';
import './gigwellWrapper.css';

class GigwellWrapper extends React.Component {
  constructor(){
    super()
    this.state = { showSpinner: true }
  }

  componentDidMount() {
    const { 
      page, 
      agency, 
      tags 
    } = this.props;

    this.observer = new window.MutationObserver(this.toggleSpinner);
    this.observer.observe(
      document.getElementById('gigwell-iframe-container'), 
      { childList: true }
    );

    (function(e,t,n) {
      var r,a,c="script";
      e.GigwellIFrame=e.GigwellIFrame||{},
      r=t.createElement(c),
      a=t.getElementsByTagName(c)[0],
      r.async = 1,
      r.src=n,
      a.parentNode.insertBefore(r,a)
    })(window,document,`https://connect.gigwell.com/${page}/legacy-gigwell-iframe.js`);

    window.GigwellIFrame.callback='https://api.gigwell.com';
    window.GigwellIFrame.tags=tags;
    window.GigwellIFrame.agency=agency;
  }

  toggleSpinner = () => {
    setTimeout(() => {
      this.setState(() => ({ showSpinner: false }));
      this.observer.disconnect(); 
    }, 1000);
  };

  render() {  

    return [
      <Spinner 
        visible={this.state.showSpinner}
      />,
      <div className="page globe-background">
        <div id="gigwell-iframe-container"></div>
      </div>
    ];
  }
}

export default GigwellWrapper;
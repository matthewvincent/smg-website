import React from 'react';
import Spinner from './Spinner';
import './gigwellWrapper.css';

class GigwellWrapper extends React.Component {
  constructor(){
    super()
    this.state = { showSpinner: true }
  }

  componentDidMount() {
      const fileref = document.createElement('script');
      fileref.setAttribute("type","text/javascript");
      fileref.setAttribute("src", "//connect.gigwell.com/roster/loader.js");
      document.body.appendChild(fileref);

      this.observer = new window.MutationObserver(this.toggleSpinner);
      this.observer.observe(
        document.getElementById('gigwell-iframe-container'), 
        { childList: true }
      );
  }

  toggleSpinner = () => {
    this.setState(() => ({ showSpinner: false }));
  }

  render() {  
    return [
      <Spinner visible={this.state.showSpinner} />,
      <gigwell-embedded-roster
        id="gigwell-iframe-container"
        agency="162101"
        button-text-color="#fff"
        hide-past-events="true"
        hide-upcoming-events="true"
        highlight-color="#e2502c"
        labels="{'backToRoster':'Back to Roster','bioHideReadMore':'Hide Full Bio','bioReadMore':'Read Full Bio','bookNow':'Book Now','downloads':'Downloads','genres':'Genres','labels':'Label','loading':'Loading...','loadingEvents':'Loading Events...','location':'Location','noPastEvents':'No past Events.','noUpcomingEvents':'No upcoming gigs.','pastEvents':'Past Events','pressKit':'Press Kit','rsvp':'RSVP','techRider':'Tech Rider','tickets':'Tickets','upcomingEvents':'Upcoming gigs'}"
        profile-box-shadow-color="#ccc"
        profile-text-color="#333"
        roster-text-color="#333"
        roster-views="[{'borderRadius':3,'enabled':true,'imageHeight':100,'size':300,'style':'none','type':'list'}]"
        tags={this.props.tags}
      ></gigwell-embedded-roster>
    ];
  }
}

export default GigwellWrapper;
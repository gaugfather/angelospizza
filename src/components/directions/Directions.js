import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';

const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

class Directions extends Component {

  render() {
    return (
      <div id="directions">
        <Container>
          <Segment className="mainSegment">
            <div className="atmosphereHeader">1206 6th Street <br />Wausau, WI 54403</div>
            <div className="atmosphere">
                Stop in today or call <a href="tel:715-845-6225">715-845-6225</a> for fast delivery throughout the Wausau Area!
            </div>
          </Segment>
          <div style={{marginBottom: '100px'}}>
            <iframe width="450" height="50"  loading="lazy" allowfullscreen 
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJD06KnSwnAIgRcTCIPNE-dRg&zoom=17&key=${googleMapApiKey}`}></iframe>
          </div>
        </Container>
      </div>
    );
  }
}

export default Directions;

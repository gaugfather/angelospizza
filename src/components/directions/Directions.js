import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import AngelosGoogleMap from './AngelosGoogleMap';

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
            <AngelosGoogleMap />
          </div>
        </Container>
      </div>
    );
  }
}

export default Directions;

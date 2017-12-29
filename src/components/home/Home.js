import React, { Component } from 'react';
import './home.css';
import { Container, Segment } from 'semantic-ui-react';
import HomeCarousel from './carousel/HomeCarousel';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Container>
          <div className="welcomeContainer">
            <Segment className="mainSegment">
              <div className="welcome">Welcome to Angelo's!</div>
              <div className="welcome1">Where great Italian dining meets a fun, family atmosphere</div>
              <div className="welcome2">Our specialty pizza has been a Wausau favorite for 49 years!</div>
              <div className="welcome1">Stop in today or call <span style={{fontWeight: 'bold'}}>715-845-6225</span> for fast, free delivery!</div>
              <br />
            </Segment>
            <HomeCarousel />
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;

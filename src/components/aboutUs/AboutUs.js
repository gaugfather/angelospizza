import React, { Component } from 'react';
import Hours from './hours/Hours';
import canoe from './canoe.jpg';
import './aboutUs.css';
import { Container, Segment, List } from 'semantic-ui-react';

class AboutUs extends Component {
  render() {
    return (
      <div id="aboutUs">
        <Hours />
        <Container>
          <Segment className="mainSegment">
            <div className="atmosphereHeader">During your meal...</div>
            <div className="atmosphere">
              <List>
                <List.Item>
                  Let the kids play in our video arcade while you relax to garlic-bread and the jukebox.
                </List.Item>
                <List.Item>
                  Dine in the adjacent Tuesday's Bar, for some pizza fries and beer.
                </List.Item>
                <List.Item>
                  Our party room can also be reserved for any get together of 15-40 people.
                </List.Item>
              </List>
            </div>
          </Segment>
          <div>
            <img src={canoe} alt="Canoe" style={{'width': '100%'}}/>
          </div>
          <Segment className="mainSegment">
            <div className="atmosphere">
              Angelo and Janet Volpe opened up their restaurant in 1968. Over the past 49 years of serving the Wausau community, the family-operated business has become a local favorite. In 1982, they moved from the Jackson Street location to its current home on North Sixth Street.
            </div>
          </Segment>
        </Container>

      </div>
    );
  }
}

export default AboutUs;

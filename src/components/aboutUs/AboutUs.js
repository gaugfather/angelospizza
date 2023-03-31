import React, { Component } from 'react';
import Hours from './hours/Hours';
import canoe from './canoe.jpg';
import './aboutUs.css';
import { Container, Segment } from 'semantic-ui-react';

class AboutUs extends Component {
  render() {
    return (
      <div id="aboutUs">
        <Hours />
        <Container>
         <Segment className="mainSegment">
             <div className="atmosphereHeader">Find Our Frozen Pizzas!</div>
             <div className="atmosphere">
              Thanks to our partners below for serving up our frozen pizzas!  They can be found at:
              <ul>
                <li>- Lamb's Fresh Market  in Wausau and Rib Mountain</li>
                <li>- Timekeeper Distillery in Wausau</li>
                <li>- The Glass Hat in Wausau</li>
                <li>- The Office Bar in Wausau</li>
                <li>- Lil' Ole Winemaker Shoppe in Wausau</li>
                <li>- Pregame Pub Wausau in Wausau</li>
                <li>- Wausau Elks Lodge #248 in Wausau</li>
                <li>- The Garage Wausau in Rib Mountain</li>
                <li>- Crafties in Weston</li>
                <li>- Day Break Bar & Grill in Weston</li>
                <li>- Dave's County Market in Merrill</li>
                <li>- The Water's Pub and Pier in Stevens Point</li>
                <li>- Half Moon Hill Farm and Winery in Hamburg</li>
                <li>- Trig's in Tomahawk</li>
                <li>- Both Quality Foods - Wisconsin Rapids in Wisconsin Rapids</li>
                <li>- Lakeside Market in Antigo</li>
                <li>- Abby County Market in Abbotsford</li>
                <li>- Charlie's County Market in Shawano</li>
                <li>- The Local Goat Company in Amherst</li>
                <li>- Crossroads County Market in Wausau</li>
                <li>- Festival Foods in Wausau AND Rothschild</li>
                <li>- Sunset Country Store in Wausau</li>
                <li>- Speakeasy LLC in Weston</li>
                <li>- Trailside Sports Bar & Grill in Weston</li>
                <li>- Edgar Foods in Edgar</li>
                <li>- Tomahawk Foods in Tomahawk</li>
                <li>- Mosinee Brewing Company in Mosinee</li>
              </ul>
             </div>
           </Segment>
          <div>
            <img src={canoe} alt="Canoe" style={{'width': '100%'}}/>
          </div>
          <Segment className="mainSegment">
            <div className="atmosphereHeader">Our Family History</div>
            <div className="atmosphere">
              Angelo and Janet Volpe opened up their restaurant in 1968. Over the past 50+ years of serving the Wausau community, the family-operated business has become a local favorite. In 1982, they moved from the Jackson Street location to its current home on North Sixth Street.
            </div>
          </Segment>
        </Container>

      </div>
    );
  }
}

export default AboutUs;

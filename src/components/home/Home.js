import React, { Component } from 'react';
import './home.css';
import { Container, Segment, Icon } from 'semantic-ui-react';
import HomeCarousel from './carousel/HomeCarousel';
import {Redirect} from "react-router-dom";

const AVAILABLE_MENUS = ["home", "menu", "coupons", "directions", "aboutUs", "order"];

class Home extends Component {

  constructor(props) {
    super(props);

    this.redirectToSubmenu = this.redirectToSubmenu.bind(this);
  }

  redirectToSubmenu(submenu) {
    return (
      <Redirect to={submenu} />
    );
  }

  render() {        
    let path = this.props.location.search.substring(1)
    if (path) {
      path = path.substring(0,path.indexOf('&'))
    }
    if(path && AVAILABLE_MENUS.includes(path)) {
        return this.redirectToSubmenu(path);
    } else {
      return (
        <div id="home">
          <Container>
            <div className="welcomeContainer">
              <Segment className="mainSegment">
                <div className="welcome">Welcome to Angelo's!</div>
                <div className="welcome1">Where great Italian dining meets a fun, family atmosphere</div>
                <div className="welcome2">Our specialty pizza has been a Wausau favorite for 49 years!</div>
                <div className="welcome1">Stop in today or call <span style={{fontWeight: 'bold'}}><a href="tel:715-845-6225">715-845-6225</a></span> for fast delivery!</div>
                <br />
              </Segment>
              <HomeCarousel />
              <Segment className="mainSegment">
                <div className="welcome1"><Icon name='newspaper' />News Archive</div>
                <div className="welcome2"><Icon name='money'/>Personal Checks</div>
                <div className="welcome3">Sorry for any inconvenience, we can no longer accept personal checks</div>
                <div className="welcome2"><Icon name='wifi'/>Free Wi-Fi!</div>
                <div className="welcome3">Stay connected, with our free wireless internet!</div>
                <div className="welcome2"><Icon name='car' />Take 'N' Bake Pizza!</div>
                <div className="welcome3">For your convenience, try a bake at home pizza!</div>
                <div className="welcome2"><Icon name='users' />We're hiring!</div>
                <div className="welcome3">Stop by and apply within</div>
                <br />
              </Segment>
            </div>
          </Container>
        </div>
      );
    }
  }
}

export default Home;

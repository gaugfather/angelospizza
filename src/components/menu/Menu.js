import React, { Component } from 'react';
import { Container, Segment, List} from 'semantic-ui-react';
import './menu.css';
import Appetizers from './appetizers/Appetizers';
import SpecialtyPizzas from './specialtyPizzas/SpecialtyPizzas';
import Salads from './salads/Salads';
import Pastas from './pastas/Pastas';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.goToSection = this.goToSection.bind(this);
  }

  goToSection(e, obj) {
    window.location.hash = obj.section;
  }

  render() {
    return (
      <div id="menu">
        <Container>
          <Segment className="mainSegment">
            <div className="menuHeader">Our Menu</div>
            <div className="menu">
              <div className="contents">
                <List bulleted horizontal link>
                  <List.Item as='a' onClick={this.goToSection} section="appetizers">Appetizers</List.Item>
                  <List.Item as='a' onClick={this.goToSection} section="specialtyPizzas">Specialty Pizzas</List.Item>
                  <List.Item as='a' onClick={this.goToSection} section="salads">Salads</List.Item>
                  <List.Item as='a' onClick={this.goToSection} section="pastas">Pastas</List.Item>
                </List>
              </div>
              <Appetizers/>
              <SpecialtyPizzas/>
              <Salads/>
              <Pastas/>
            </div>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default Menu;

import React, { Component } from 'react';
import { Container, Segment, List, Button} from 'semantic-ui-react';
import './menu.css';
import Appetizers from './appetizers/Appetizers';
import SpecialtyPizzas from './specialtyPizzas/SpecialtyPizzas';
import Salads from './salads/Salads';
import Pastas from './pastas/Pastas';
import Calzones from './calzones/Calzones';
import ByoPizzas from './byoPizzas/ByoPizzas';
import Sandwiches from './sandwiches/Sandwiches';
import Desserts from './desserts/Desserts';
import Beverages from './beverages/Beverages';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.goToSection = this.goToSection.bind(this);
    this.downloadMenu = this.downloadMenu.bind(this);
  }

  goToSection(e, obj) {
    window.location.hash = obj.section;
  }

  downloadMenu() {
    window.open('./menu-2022.pdf', '_blank');
  }

  render() {
    return (
      <div id="menu">
        <Container>
          <Segment className="mainSegment">
            <div className="menuHeader">Our Menu
              <div className="downloadMenu"><Button secondary onClick={this.downloadMenu}>Download PDF</Button></div>
            </div>
            <div>* Prices are subject to change *</div>
            <div className="menu">
              <div className="contents">
                <List bulleted horizontal link>
                  <List.Item as='a' onClick={this.goToSection} section="appetizers">Appetizers</List.Item>
                  <List.Item as='a' onClick={this.goToSection} section="specialtyPizzas">Specialty Pizzas</List.Item>
                  <List.Item as='a' onClick={this.goToSection} section="salads">Salads</List.Item>
                  <List.Item as='a' onClick={this.goToSection} section="pastas">Pastas</List.Item>
                  <List.Item as='a' onClick={this.goToSection} section="calzones">Calzones</List.Item>
                  <List.Item as='a' onClick={this.goToSection} section="pizzas">Pizzas</List.Item>
                  <List.Item as='a' onClick={this.goToSection} section="sandwiches">Sandwiches</List.Item>
                  <List.Item as='a' onClick={this.goToSection} section="desserts">Desserts</List.Item>
                  <List.Item as='a' onClick={this.goToSection} section="beverages">Beverages</List.Item>
                </List>
              </div>
              <Appetizers/>
              <SpecialtyPizzas/>
              <Salads/>
              <Pastas/>
              <Calzones/>
              <ByoPizzas/>
              <Sandwiches/>
              <Desserts/>
              <Beverages/>
              <div className="categoryDescription">
                <br /><br />**Notice:** <br />
                Consuming raw or undercooked meats, seafood, shellfish, or eggs may increase your risk of food borne illness, especially the elderly, very young, pregnant women or if you have an on going medical condition
              </div>
            </div>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default Menu;

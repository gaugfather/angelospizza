import React, { Component } from 'react';
import { List} from 'semantic-ui-react';
import {beveragesDto} from './beveragesDto';

class Beverages extends Component {
  render() {
    let beverages = [];
    beveragesDto.beverages.forEach((beverage, index) => {
      beverages.push(
        <List.Item key={index}>
          <List.Header>{beverage.name}......{beverage.price}</List.Header>
        </List.Item>
      );
    });
    let tapBeers = [];
    beveragesDto.beers.forEach((beer, index) => {
      tapBeers.push(
        <List.Item key={index}>
          <List.Header>{beer.name}</List.Header>
          Glass......{beer.glassPrice}<br />
          Pitcher......{beer.pitcherPrice}
        </List.Item>
      );
    });

    return (
      <section>
        <div id="beverages" className="menuCategory">Beverages</div>
        <List className="menuList">{beverages}</List>
        <div className="menuCategory">Tap Beers</div>
        <List className="menuList">{tapBeers}</List>
        <div className="menuCategory">Wine</div>
        <div className="categoryDescription">
          Rose, Lambrusco, Chablis, Merlot, White Zinfandel, Chainti, Chardonnay, Rhine, Pino Grigio and Cabernet Sauvignon
        </div>
        <div className="menuCategory">Mixers</div>
        <div className="categoryDescription">
          We have Full Bar Services!
        </div>
      </section>
    );
  }
}

export default Beverages;

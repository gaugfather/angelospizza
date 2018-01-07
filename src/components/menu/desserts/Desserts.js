import React, { Component } from 'react';
import { List} from 'semantic-ui-react';
import {dessertsDto} from './dessertsDto';

class Desserts extends Component {
  render() {
    let desserts = [];
    dessertsDto.desserts.forEach((dessert, index) => {
      desserts.push(
        <List.Item key={index}>
          <List.Header>{dessert.name}......{dessert.price}</List.Header>
        </List.Item>
      );
    });

    return (
      <section>
        <div id="desserts" className="menuCategory">Desserts</div>
        <List className="menuList">{desserts}</List>
      </section>
    );
  }
}

export default Desserts;

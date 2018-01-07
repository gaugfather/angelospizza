import React, { Component } from 'react';
import { List} from 'semantic-ui-react';
import {appetizersDto} from './appetizersDto';

class Appetizers extends Component {
  render() {
    let appetizers = [];
    appetizersDto.forEach((appetizer, index) => {
      appetizers.push(
        <List.Item key={index}>
          <List.Header>{appetizer.name}......{appetizer.price}</List.Header>
            {appetizer.description}
        </List.Item>
      );
    });

    return (
      <section>
        <div id="appetizers" className="menuCategory">Appetizers</div>
        <List className="menuList">{appetizers}</List>
      </section>
    );
  }
}

export default Appetizers;

import React, { Component } from 'react';
import { List} from 'semantic-ui-react';
import {sandwichesDto} from './sandwichesDto';

class Sandwiches extends Component {
  render() {
    let sandwiches = [];
    sandwichesDto.sandwiches.forEach((sandwich, index) => {
      sandwiches.push(
        <List.Item key={index}>
          <List.Header>{sandwich.name}......{sandwich.price}</List.Header>
            {sandwich.description}
        </List.Item>
      );
    });

    return (
      <section>
        <div id="sandwiches" className="menuCategory">Sandwiches</div>
        <div className="categoryDescription">
          Sandwiches are served with our potato wedges or sweet potato fries, lettuce, tomato, onion and pickles on the side.
          <br />
          (Split plate add $1.00)
        </div>
        <List className="menuList">{sandwiches}</List>
      </section>
    );
  }
}

export default Sandwiches;

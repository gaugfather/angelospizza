import React, { Component } from 'react';
import { List} from 'semantic-ui-react';
import {saladsDto} from './saladsDto';

class Salads extends Component {
  render() {
    let salads = [];
    saladsDto.forEach((salad, index) => {
      salads.push(
        <List.Item key={index}>
          <List.Header>{salad.name}......{salad.price}</List.Header>
            {salad.description}
        </List.Item>
      );
    });

    return (
      <section>
        <div id="salads" className="menuCategory">Salads</div>
        <List className="menuList">{salads}</List>
      </section>
    );
  }
}

export default Salads;

import React, { Component } from 'react';
import { List} from 'semantic-ui-react';
import {pastasDto} from './pastasDto';

class Pastas extends Component {
  render() {
    let pastas = [];
    pastasDto.dinners.forEach((pasta, index) => {
      pastas.push(
        <List.Item key={index}>
          <List.Header>{pasta.name}</List.Header>
            Small Order......{pasta.smallPrice} <br />
            Large Order......{pasta.largePrice}
        </List.Item>
      );
    });

    return (
      <section>
        <div id="pastas" className="menuCategory">Pasta Dinners</div>
        <div className="categoryDescription">{pastasDto.description}</div>
        <List className="menuList">{pastas}</List>
      </section>
    );
  }
}

export default Pastas;

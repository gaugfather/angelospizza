import React, { Component } from 'react';
import { List} from 'semantic-ui-react';
import {specialtyPizzasDto} from './specialtyPizzasDto';

class SpecialtyPizzas extends Component {
  render() {
    let specialtyPizzas = [];
    specialtyPizzasDto.forEach((specialtyPizza, index) => {
      specialtyPizzas.push(
        <List.Item key={index}>
          <List.Header>{specialtyPizza.name}</List.Header>
            {specialtyPizza.description}
            <List.Item>
              <i>Small (12"")</i>......{specialtyPizza.smallPrice} <br />
              <i>Medium (14"")</i>......{specialtyPizza.mediumPrice} <br />
              <i>Large (16"")</i>......{specialtyPizza.largePrice}
            </List.Item>
        </List.Item>
      );
    });

    return (
      <section>
        <div id="specialtyPizzas" className="menuCategory">Specialty Pizzas</div>
        <List className="menuList">{specialtyPizzas}</List>
      </section>
    );
  }
}

export default SpecialtyPizzas;

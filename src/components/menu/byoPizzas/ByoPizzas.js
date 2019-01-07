import React, { Component } from 'react';
import { List} from 'semantic-ui-react';
import {byoPizzasDto} from './byoPizzasDto';

class ByoPizzas extends Component {
  render() {
    let pizzas = [];
    byoPizzasDto.pizzas.forEach((pizza, index) => {
      pizzas.push(
        <List.Item key={index}>
          <List.Header>{pizza.name}</List.Header>
            Small......{pizza.smallPrice} <br />
            Medium......{pizza.mediumPrice} <br />
            Large......{pizza.largePrice}
        </List.Item>
      );
    });

    return (
      <section>
        <div id="pizzas" className="menuCategory">Build Your Own Pizza</div>
        <div className="categoryDescription">
          Toppings: Anchovies, black olives, Canadian bacon, diced white chicken, green olives, green peppers, pineapple, mushrooms,
          onions, seasoned beef, bacon, Italian sausage, pepperoni, shrimp, jalapeno slices and tomatoes
          <br /><br />
          Thin Crust: Available in Small (12"), Medium (14") and Large (16")
          <br />
          Deep Dish: Available in Small (10"), Medium (12") and Large (14")
          <br /><br />
          Extra Cheese: Small......$4.00, Medium......$4.25, Large......$4.50
        </div>
        <List className="menuList">{pizzas}</List>
      </section>
    );
  }
}

export default ByoPizzas;

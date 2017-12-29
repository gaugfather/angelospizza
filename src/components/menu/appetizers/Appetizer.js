import React, { Component } from 'react';
import PropTypes from "prop-types";
import { List} from 'semantic-ui-react';

class Appetizer extends Component {
  render() {
    return (
      <List.Item>
        <List.Header>{this.props.appetizer.name}......{this.props.appetizer.price}</List.Header>
          {this.props.appetizer.description}
      </List.Item>
    );
  }
}


Appetizer.propTypes = {
    appetizer: PropTypes.object.isRequired
};

export default Appetizer;

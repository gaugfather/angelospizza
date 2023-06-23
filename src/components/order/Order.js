import React, { Component } from 'react';
// import { Container, Segment, Dimmer, Loader } from 'semantic-ui-react';

const ORDERING_URL = 'https://online.skytab.com/789c37830c3aa8dbe4757176b3643641'

class Order extends Component {

  componentDidMount(){
    // window.location.replace(ORDERING_URL)
  }

  render() {
    return (
      <div id="order">
        <iframe title='order' src={ORDERING_URL}/>
      </div>
    );
  }
}

export default Order;

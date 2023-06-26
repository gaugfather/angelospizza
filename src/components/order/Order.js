import React, { Component } from 'react';
const ORDERING_URL = 'https://online.skytab.com/789c37830c3aa8dbe4757176b3643641'

class Order extends Component {

  componentDidMount(){
    window.location.href=ORDERING_URL
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

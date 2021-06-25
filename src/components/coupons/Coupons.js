import React, { Component } from 'react';
import coupons from "../coupons/coupons0721.png";
import './coupons.css';

class Coupons extends Component {

  constructor(props) {
    super(props);

    this.viewCoupons = this.viewCoupons.bind(this);
  }

  viewCoupons() {
    window.open({coupons}.coupons, "_blank");
  }


  render() {

    return (
      <div id="coupons">
        <div className="couponsLink"
          onClick={this.viewCoupons}>Click here to view our current coupons
        </div>
      </div>
    );
  }
}

export default Coupons;

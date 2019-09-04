import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="footerTitle">Angelo's Family Pizzeria</div>
        <div className="footerSubtitle"><a href="tel:715-845-6225">715-845-6225</a></div>
      </div>
    );
  }
}

export default Footer;

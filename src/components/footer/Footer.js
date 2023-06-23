import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './footer.css';

class Footer extends Component {
  render() {
    const isOrdering = window.location.pathname && window.location.pathname === '/order'
    return (
      <div id="footer">
        <div className="footerTitle">Angelo's Family Pizzeria
          <Link to={'/home'} className={isOrdering ? 'showHome' : 'hideHome'}>| Home</Link>
        </div>
        <div className="footerSubtitle"><a href="tel:715-845-6225">715-845-6225</a></div>
      </div>
    );
  }
}

export default Footer;

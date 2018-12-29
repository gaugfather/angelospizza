import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import './header.css';
import facebookIcon from "./facebook_icon.png";
import OpeningModal from './openingModal/OpeningModal';

class Header extends Component {

  constructor(props) {
          super(props);

          let pathname = window.location.pathname;
          if(pathname && pathname.length > 1) {
            pathname = pathname.substring(1);
          } else {
            pathname = 'home';
          }

          this.state = {
            activeItem: pathname
          };

          this.handleItemClick = this.handleItemClick.bind(this);
          this.facebookClick = this.facebookClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let pathname = window.location.pathname;
    if(pathname && pathname.length > 1 && prevState.activeItem !== pathname.substring(1)) {
      this.setState({activeItem: pathname.substring(1)});
    }

  }
  handleItemClick(event, item) {
    this.setState({activeItem: item.name});
  }

  facebookClick() {
    window.open('https://www.facebook.com/Angelos-Family-Pizzeria-140523912649155/', '_blank');
  }

  render() {
    return (
      <div id="header">
        <div>
          <div className="title">Angelo's Family Pizzeria</div>
          <div className="facebook" onClick={this.facebookClick}>
            <img src={facebookIcon} alt="facebookIcon"/>
          </div>
          <div className="subtitle">715-845-6225</div>
          <div className="subtitle">1206 6th Street, Wausau, WI 54403</div>
        </div>
        <OpeningModal />
        <Menu id="main-menu" pointing secondary fluid widths={5}>
          <Menu.Item name='home' as={Link} to='/' active={this.state.activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='menu' as={Link} to='menu' active={this.state.activeItem === 'menu'} onClick={this.handleItemClick} />
          <Menu.Item name='coupons' as={Link} to='coupons' active={this.state.activeItem === 'coupons'} onClick={this.handleItemClick} />
          <Menu.Item name='directions' as={Link} to='directions' active={this.state.activeItem === 'directions'} onClick={this.handleItemClick} />
          <Menu.Item name='aboutUs' as={Link} to='aboutUs' active={this.state.activeItem === 'aboutUs'} onClick={this.handleItemClick} />
        </Menu>
      </div>
    );
  }
}

export default Header;

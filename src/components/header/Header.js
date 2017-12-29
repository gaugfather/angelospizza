import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import './header.css';

class Header extends Component {

  constructor(props) {
          super(props);
          this.state = {
            activeItem: 'home'
          };
          this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(event, item) {
    this.setState({activeItem: item.name});
  }

  render() {
    return (
      <div id="header">
        <div>
          <div className="title">Angelo's Family Pizzeria</div>
          <div className="subtitle">715-845-6225</div>
            <div className="subtitle">1206 6th Street, Wausau, WI 54403</div>
        </div>
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

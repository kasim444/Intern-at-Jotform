import { Nav, NavItem, NavLink } from "reactstrap";
import React, { Component } from 'react'
import logo from "./../assets/img/logo-orange.png";
import avatar from "./../assets/img/podo.png";
import './../assets/css/style.css';

export default class Header extends Component {
  render() {
    return <div className="navbar clearfix">
        <Nav>
          <NavItem className="float-left">
            <NavLink href="http://jotform.com">
              <img src={logo} alt="JotForm Logo" width="144px" height="50px" />
            </NavLink>
          </NavItem>
          <NavItem className="float-right">
            <NavLink href="https://www.jotform.com/myaccount/">
              <img src={avatar} alt="Avatar at JotForm" className="rounded-circle border" width="44px" height="44px" />
            </NavLink>
          </NavItem>
        </Nav>
      </div>;
  }
}

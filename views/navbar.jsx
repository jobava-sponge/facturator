"use strict";
let React = require('react');

let Navbar = React.createClass({
  render: function() {
    return (
            <nav className="top-bar" data-topbar role="navigation">
              <ul className="title-area">
                <li className="name">
                  <h1><a href="#">{this.props.title}</a></h1>
                </li>
                <li className="toggle-topbar menu-icon">
                  <a href="#"><span>Menu</span></a>
                </li>
              </ul>

              <section className="top-bar-section">
                <ul className="right">
                  <li className="has-dropdown">
                    <a href="#">Menu</a>
                    <ul className="dropdown">
                      <li><a href="/account">Account</a></li>
                      <li><a href="/logout">Logout</a></li>
                    </ul>
                  </li>
                </ul>
              </section>
            </nav>
           );
  }
});

module.exports = Navbar;

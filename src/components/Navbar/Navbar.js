// new2
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="item1">Memory Game</li>
          <li className="item2"></li>
          <li className="item3">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
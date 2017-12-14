// new2
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
     <div> 
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="item1">Memory Game</li>
          <li className="item2"></li>
          <li className="item3">Score: {this.props.score}</li>
        </ul>
      </nav>

      <div className="jumbotron">
        <h1>Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on the same picture more than once.</h2>
      </div>

      </div>
    );
  }
}

export default Navbar;
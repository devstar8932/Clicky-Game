import React from "react";
// import "../styles/Navbar.css";

const styles = {
	navbar: {
		background: "green",
  		height: 60
	},
	welcome: {
	  color: "white",
	  margin: 5,
	  float: "right"
	}	
}

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = () => (
  <nav className="navbar" style={styles.navbar}>
    <a style={styles.welcome} href="/">Welcome</a>
  </nav>
);

export default Navbar;

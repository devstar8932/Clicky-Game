import React from "react";
// import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads


const styles = {
	header: {
  		background: "red"
	},

	hede: {
  		margin: 0,
  		paddingTop: 75,
  		textAlign: "center",
  		color: "white",
  		fontSize: 100
	}
}

const Header = () => (
  <header className="header" style={styles.header}>
    <h1 style={styles.hede}>Welcome</h1>
  </header>
);

export default Header;

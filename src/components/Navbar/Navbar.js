import React from "react";
import "./Navbar.css";

const Navbar = () => (
	<nav ClassName = "navbar">
		<ul>
			<li className="brand"><a href="/">Clicky Game</a>
			</li>
			<li className="guess">Click an image to begin!</li>
			<li className="score">Score: | Top score:</li>
		</ul>	
	</nav>
	);

export default Navbar;

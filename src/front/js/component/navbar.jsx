import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-light">
			<div className="container-fluid">
				<Link className="brand-link" to="/">
					<h1 className="brand">Ninja Station</h1>
				</Link>

				<div className="center-links">
					<Link className="center-link" to="/platforms">
						<h4>PLATFORMS</h4>
					</Link>
					<Link className="center-link" to="/creators">
						<h4>CREATORS</h4>
					</Link>
					<Link className="center-link" to="/stores">
						<h4>STORES</h4>
					</Link>
				</div>


				<div className="ml-auto">
					<Link className="signup-link" to="/signup">
						<button className="signup-btn">Get Started</button>
					</Link>
					<Link className="signup-link" to="/login">
						<button className="login-btn">Log In</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

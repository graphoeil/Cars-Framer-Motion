// Imports
import React from "react";
import logo from "../assets/images/logocoloured.png";

// Component
const Navigation = () => {

	// Return
	return(
		<div className="navigationBar">
			<div className="logo">
				<img className="logoImage" src={ logo } alt="Company logo"/>
			</div>
			<div className="dropdownMenu">
				<div className="dropdownIcon">
				{/* <div className="bar first"></div> */}
				<div className="bar second"></div>
				<div className="bar third"></div>
				</div>
			</div>
		</div>
	);

};

// Export
export default Navigation;
// Imports
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Cars from "./components/Cars";
import Car from "./components/Car";
import { AnimatePresence } from "framer-motion";

// Component
const App = () => {

	// Pathname for unique key in AnimatePresence
	const location = useLocation();

	// Return
	return(
		<React.Fragment>
			<Navigation/>
			{/* AnimatePresence allows components to animate out when they're removed 
			from the React tree. https://www.framer.com/docs/animate-presence/ */}
			{/* Sans exitBeforeEnter l'animation de la voiture seule dans la page
			/car/:id ne fonctionne pas à l'arrivée mais au démarrage, car le composant 
			Car n'est pas considéré comme "sorti" ,-) */}
			<AnimatePresence exitBeforeEnter>
				<Routes location={ location } key={ location.pathname }>
					<Route path="/" element={ <Cars/> }/>
					<Route path="/car/:id" element={ <Car/> }/>
				</Routes>
			</AnimatePresence>
		</React.Fragment>
	);

};

// Export
export default App;
// Imports
import React from "react";
import { Link } from "react-router-dom";
import carsData from "../assets/data/data";
import { motion } from "framer-motion";
import { gridAnimation, cardAnimation, h3Animation } from "./Animations";

/* GSAP est beaucoup plus fluide, ici le truc c'est d'avoir 
un gestionnaire d'événements onClick sur un bouton par exemple, 
la fonction associée joue l'animation de sortie puis nous utilisons 
useNavigate pour nous rendre sur la page choisie.
Sur cette page un useEffect onDidMount servira à lire l'animation prévue 
pour l'entrée (on peut faire de même ici bien sûr).
!!!! Surtout penser à définir les valeurs d'origine soit dans le css 
(opacity, transform...) pour ne pas avoir d'effet de clipping lors 
de l'arrivée sur la page ,-)*/

// Component
const Cars = () => {

	// Return
	return(
		<div className="carsContainer">
			<motion.h3 variants={ h3Animation } animate="show" exit="hide">
				Choose your car
			</motion.h3>
			{/* Voir les animations dans Animations.js => show & hide */}
			<motion.div className="cars" variants={ gridAnimation } animate="show" exit="hide">
				{
					carsData.map((carItem) => {
						const { id, car, image } = carItem;
						return(
							<Link key={ id } to={ `/car/${ id }` }>
								{/* Inutile de spécifié animate et exit qui est géré 
								par le conteneur parent */}
								<motion.div className="card" variants={ cardAnimation }>
									<img src={ image } alt={ car } />
								</motion.div>
							</Link>
						);
					})
				}
			</motion.div>
		</div>
	);

};

// Export
export default Cars;
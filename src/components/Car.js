// Imports
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import carsData from "../assets/data/data";
import { carAnimation } from "./Animations";

// Component
const Car = () => {

	// Car id
	const { id } = useParams();

	// Navigate
	const navigate = useNavigate();

	// Car info
	const singleCar = carsData.find((car) => {
		return car.id === Number(id);
	});

	// Return
	return(
		<div className="carcontainer">
			<motion.div className="car" variants={ carAnimation } animate="show" exit="hide">
				<div className="navigateBack" onClick={ () => { navigate('/'); } }>
					<MdKeyboardBackspace/>
				</div>
				<div className="imageAndText">
					<img src={ singleCar.image } alt={ singleCar.car } />
					<div className="carText">
						<h3>{ singleCar.car }</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
							delectus ea dolore suscipit. Facilis harum dolorem, pariatur ipsa
							in adipisci!
						</p>
					</div>
				</div>
			</motion.div>
		</div>
	);

};

// Export
export default Car;
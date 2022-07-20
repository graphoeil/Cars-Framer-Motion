// Animation de la grille
export const gridAnimation = {
	show: { transition: { staggerChildren: 0.1 } },
	hide: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
};

// Animation de chaque card (dans Cars.js)
export const cardAnimation = {
	show: { y: [200, 0], opacity: [0, 1], scale: [0.95, 1] },
	hide: { y: [0, 200], opacity: [1, 0], scale: [1, 0.95] }
};

// Animation du titre "Choose your car"
export const h3Animation = {
	show: { y: [-100, 0], opacity: [0, 1], scale: [0.9, 1] },
	hide: { y: [0, -100], opacity: [1, 0], scale: [1, 0.9] }
};

// Animation de la page voiture spécifique
export const carAnimation = {
	show: { width: ["200vw", "100vw"], opacity: [0, 1] },
	hide: { width: ["100vw", "200vw"], opacity: [1, 0] }
};
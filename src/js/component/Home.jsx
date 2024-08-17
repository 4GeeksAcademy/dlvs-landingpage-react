import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import {Footer} from "./Footer.jsx"
import {Jumbotron} from "./Jumbotron.jsx"
import {Cards} from "./Cards.jsx"

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
				<div className="container flex-grow-1">
					<Jumbotron />
					<Cards />
				</div>
			< Footer />
		</div>
	);
};

export default Home;
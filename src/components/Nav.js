import React from "react";
import piggy from "../assets/porco.png";
import Filter from './Filter'
import Sort from "./Sort"

const Nav = ({filtering, setFiltering, sort, setSort}) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<br />

			<Filter filtering={filtering} setFiltering={setFiltering}/>
			<Sort sort={sort} setSort={setSort}/>
		</div>
	);
};

export default Nav;

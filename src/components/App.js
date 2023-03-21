import React, {useState} from "react";
import Nav from "./Nav";
import TileContainer from "./TileContainer";
import hogs from "../porkers_data";
/*
Add a sort by weight
*/
function App() {
	const [filtering, setFiltering] = useState(false)
	const [sort, setSort] = useState(false)

	const filteredHogs = hogs.filter(el => (el.greased))
	
	return (
		<div className="App">
			<Nav filtering={filtering} setFiltering={setFiltering} sort={sort} setSort={setSort}/>
			<TileContainer sort={sort} hogs={filtering ? filteredHogs : hogs}/>
		</div>
	);
}

export default App;

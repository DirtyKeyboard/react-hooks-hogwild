import React, {useState} from 'react'
import Tile from "./Tile"
import {v4 as uuid} from 'uuid'

const TileContainer = (props) => { //props.sort = true/false
  const [showing, setShowing] = useState({})


    //This always will sort by weight
    const sorted = props.hogs.slice().sort((a, b) => {
      if (a.weight === b.weight)
        return 0;
      else if (a.weight > b.weight)
        return 1;
      else
        return -1
      
    })
    
    
  return (
    <div className="ui grid container">
        {props.hogs.map(el => (<Tile key={uuid()} hog={el} showing={showing} setShowing={setShowing}/>))}
    </div>
  )
}

export default TileContainer
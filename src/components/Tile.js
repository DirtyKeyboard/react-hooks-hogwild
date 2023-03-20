import React, {useState} from 'react'
//Each hog has: 
//name, specialty, greased, weight, ["highest medal achieved"], image
const Tile = ({hog, showing, setShowing}) => {

  return (
    <div className="ui eight wide column" style={{border: "1px dotted black"}} onClick={() => {
      if (hog === showing)
        setShowing({})
      else
        setShowing(hog)
    }}>
        <img src={hog.image} alt="Hog Image" style={{width: '200px'}}/>
        <h3>{hog.name}</h3>
        {showing===hog ? <>
        <p>Specialty: {hog.specialty}</p>
        <p>Weight: {hog.weight}lbs</p>
        <p>Is Greased?: {hog.greased ? 'Yes' : 'No'}</p>
        <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
        </>
         : null}
    </div>
  )
}

export default Tile
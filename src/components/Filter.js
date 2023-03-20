import React from 'react'

const Filter = ({setFiltering, filtering}) => {
  return (
    <button onClick={() => setFiltering(!filtering)}>Filter Greased: {filtering ? 'ON' : 'OFF'} </button>
  )
}

export default Filter
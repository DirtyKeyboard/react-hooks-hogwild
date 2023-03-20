import React from 'react'

const Sort = ({sort, setSort}) => {
  return (
    <>
        <br />
        <button onClick={() => setSort(!sort)}>Sort By Weight: {sort ? 'ON' : 'OFF'}</button>
    </>
  )
}

export default Sort
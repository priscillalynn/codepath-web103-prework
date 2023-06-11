import React from 'react'

const CreatorCard = ({ creator }) => {
  return (
    <div className='creator-card'>
      <h3>{creator.name}</h3>
      <p>{creator.description}</p>
      <p>{creator.url}</p>
      <p>{creator.imageURL}</p>
      </div>
  )
}

export default CreatorCard
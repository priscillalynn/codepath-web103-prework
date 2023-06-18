import React from 'react'
import '../../../src/client'
import './CreatorCard.css'
import { BsInfoCircle } from 'react-icons/bs'
import { MdModeEditOutline } from 'react-icons/md'

const CreatorCard = ({ creator }) => {

  return (
    <>
    <div className='creator-card-container'>
    <div className="bg-card-image" style={{ backgroundImage: `url(${creator.imageURL})`, backgroundSize: 'cover',
    backgroundPosition: 'center' }}>
    <div className='creator-card'>
      <h3 className='creator-name'>{creator.name}</h3>
      <div className='icons'>
        <BsInfoCircle />
        <MdModeEditOutline />
        </div>
      <p>{creator.description}</p>
      <p>{creator.url}</p>
      <p>{creator.imageURL}</p>
      </div>
      </div>
      </div>
    </>
    
  )
}

export default CreatorCard
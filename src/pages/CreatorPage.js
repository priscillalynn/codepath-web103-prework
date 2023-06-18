import React from 'react'
import { useParams } from 'react-router-dom';
import ViewCreator from './ViewCreator';


const CreatorPage = () => {

const { id } = useParams();

// Use the ID to fetch the creator details or retrieve them from your data source
const creator = ViewCreator(id);

  return (
    <>
    <h1>{creator.name}</h1>
    <p>{creator.description}</p>
    {/* Other creator details */}
  </>
  )
}

export default CreatorPage
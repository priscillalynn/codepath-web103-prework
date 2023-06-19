import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/content-creator/CreatorCard";
import '../components/content-creator/CreatorCard.css'

const ViewCreator = () => {

  const [error, setError] = useState(null);
  const [creatorverse, setCreatorverse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const { data, error } = await supabase
          .from('creatorverse')
          .select();
        
        if (error) {
          setError('Error fetching data:', error.message);
          setCreatorverse(null);
          console.log(error);
        }
        if (data) {
          setCreatorverse(data);
          setError(null);
        }
      }

    fetchData(); 
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
    {error && (<p>{error}</p>)}
      {creatorverse && (
        <div className="creators">
          {creatorverse.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </>
  );
};

export default ViewCreator;

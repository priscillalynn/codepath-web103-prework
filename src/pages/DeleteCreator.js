import React, { useState } from 'react';
import '../client'
import { supabase } from '../client';
import '../components/page-hero/PageHero.css';

const DeleteCreator = ({ creatorId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const { error } = await supabase.from('creatorverse').delete().eq('id', creatorId);
      if (error) {
        console.error('Error deleting data:', error);
      } else {
        console.log('Data deleted successfully');
        onDelete(); // Notify the parent component about the deletion
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <button className="delete-creator-btn" onClick={handleDelete}>
      Delete Creator
    </button>
  );
};

export default DeleteCreator
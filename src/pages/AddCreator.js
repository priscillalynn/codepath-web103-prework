import React, { useState } from 'react';
import '../client'
import { supabase } from '../client';

const AddCreator = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from('creatorverse').insert([
        { name, url, description, imageURL },
      ]);

      if (error) {
        console.error('Error adding data:', error);
      } else {
        console.log('Data added successfully:', data);
        // Reset form inputs
        setName('');
        setUrl('');
        setDescription('');
        setImageURL('');
      }
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        url:
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        imageURL:
        <input
          type="imageURL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Creator</button>
    </form>
  );
};

export default AddCreator;

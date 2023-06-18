import React, { useState } from 'react';
import '../client'
import { supabase } from '../client';
import '../components/page-hero/PageHero.css'

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
      <h3 className='form-titles'>CREATOR NAME</h3>
      <label>
        <input
          type="text"
          value={name}
          required={true}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <h3 className='form-titles'>IMAGE URL</h3>
      <label>
      Provide a link to an image of your creator. Be sure to include the http://
      <br />
        <input
          type="imageURL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </label>
      <br />
      <h3 className='form-titles'>DESCRIPTION</h3>
      <label>
      Provide a description of the creator. Who are they? What makes them interesting?
      <br />
        <input
          type="description"
          textarea name='description'
          rows='3'
          cols='50'
          value={description}
          required={true}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <h3 className='form-titles'>SOCIAL MEDIA</h3>
      <label>
      Provide at least one of the creator's social media links.
      <br />
        <input
          type="url"
          value={url}
          required={true}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Creator</button>
    </form>
  );
};

export default AddCreator;

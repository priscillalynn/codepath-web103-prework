import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { supabase } from "../client";

const TestCard = (props) => {
  const creator = props.creator;

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(creator.name);
  const [description, setDescription] = useState(creator.description);

  // UPDATE FUNCTIONALITY
  async function updateCreator() {
    try {
        const { data, error } = await supabase
        .from('creatorverse')
        .update({
            name: name,
            description: description
        })
        .eq('id', creator.id)
    if(error) throw error;
    window.location.reload();
    } catch(error) {
        alert(error.message)
    }
  }

  // DELETE FUNCTIONALITY
  async function deleteCreator() {
    try {
        const { data, error } = await supabase
        .from('creatorverse')
        .delete()
        .eq('id', creator.id)

    if(error) throw error;
    window.location.reload();
    } catch(error) {
        alert(error.message)
    }
  }
  


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        {editing === false ? (
          <>
            <Card.Title>{creator.name}</Card.Title>
            <Card.Text>{creator.description}</Card.Text>
            <Button variant="secondary" onClick={() => setEditing(true)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => deleteCreator()}>Delete</Button>
          </>
        ) : (
          <>
            <h4>Editing Creator</h4>
            <Button
              variant="danger"
              size="sm"
              onClick={() => setEditing(false)}
            >
              Cancel
            </Button>
            <br></br>
            <Form.Label>Creator Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              defaultValue={creator.name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Creator Description</Form.Label>
            <Form.Control
              type="text"
              id="description"
              defaultValue={creator.description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <Button onClick={() => updateCreator()}>Update Creator to Supabase</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default TestCard;

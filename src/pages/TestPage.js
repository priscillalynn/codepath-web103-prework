import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import TestCard from "./TestCard";
import { supabase } from "../client";

// create the user interface (Navbar, form to add a creator, creator cards)
// setup supabase, create a table for our creators)
// implement the CRUD logic for the creators

const TestPage = () => {
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ creators, setCreators ] = useState([]);

    console.log(name);
    console.log(description);

    useEffect(() => {
        getCreators();
    }, []);

    async function getCreators() {
        try {
            const { data, error } = await supabase
            .from('creatorverse')
            .select('*')
            .limit(10)
        if(error) throw error;
        if(data != null) {
            setCreators(data);
        }
        } catch(error) {
            alert(error.message)
        }
    }

    async function addCreator() {
        try {
            const { data, error } = await supabase
            .from('creatorverse')
            .insert({
                name: name,
                description: description
            })
            .single()
        if(error) throw error;
        window.location.reload();
        } catch(error) {
            alert(error.message)
        }
    }

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Creator Cards</Navbar.Brand>
          <Nav>
            <Nav.Item>Created by Priscilla Colon</Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h3>CREATORVERSE</h3>
            <Form.Label>Creator Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Creator Description</Form.Label>
            <Form.Control
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <Button onClick={() => addCreator()}>Add Creator to Supabase</Button>
          </Col>
        </Row>
        <hr></hr>
        <h3>Current Cards</h3>
        <Row xs={1} lg={3} className="g-4">
            {creators.map((creator) => (
                <Col>
                <TestCard creator={creator}/>
                </Col>
                ))}
        </Row>
      </Container>
    </>
  );
};

export default TestPage;

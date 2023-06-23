import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import TestCard from "./TestCard";
import { supabase } from "../client";
import { Link } from "react-router-dom";
import { BiHomeHeart } from "react-icons/bi";
import { AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const AddCreatorTest = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [creators, setCreators] = useState([]);
  const [imageUrl, setImageUrl] = useState("");


  // CREATE FUNCTIONALITY
  async function addCreator() {
    try {
      const { data, error } = await supabase
        .from("creatorverse")
        .insert({
          name: name,
          description: description,
        })
        .single();
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <Container fluid className="p-0">
        {" "}
        {/* Add fluid class and p-0 class */}
        <Row>
          <div className="page-hero">
            <h1 className="page-hero-title">CREATORVERSE</h1>
            <div className="button-container">
              <div className="main-btns">
              <Link to="/TestPage">
                <Button>Return to Home</Button>
              </Link>
              </div>
              <div className="main-btns">
              <Link to="/AddCreatorTest">
                <Button>Add Creator</Button>
              </Link>
              </div>
            </div>
          </div>
          <Col className="form-col" xs={12} md={8} lg={6}>
            <Form.Label>Creator Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Creator Description</Form.Label>
            <Form.Control
              type="textarea"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Label>Creator Image</Form.Label>
            <h6>Provide a link to an image of your creator. Be sure to include the http://</h6>
            <Form.Control
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <br></br>
            <h5>Social Media Links</h5>
            <h6>Provide at least one of the creator's social media links.</h6>
            <Form.Label><AiFillYoutube/>YouTube</Form.Label>
            <h6>The creator's YouTube handle (without the @)</h6>
            <Form.Control
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label><AiFillInstagram/>Instagram</Form.Label>
            <h6>The creator's Instagram handle (without the @)</h6>
            <Form.Control
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label><AiOutlineTwitter/>Twitter</Form.Label>
            <h6>The creator's Twitter handle (without the @)</h6>
            <Form.Control
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <Button onClick={() => addCreator()}>
              Add Creator to Supabase
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddCreatorTest;

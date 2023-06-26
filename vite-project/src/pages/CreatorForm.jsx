import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";
import { AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const CreatorForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");


  // CREATE FUNCTIONALITY
  async function addCreator() {
    try {
      const { data, error } = await supabase
        .from("creatorverse")
        .insert({
          name: name,
          description: description,
          url: imageURL,
          youtubeLink: youtubeLink,
          instagramLink: instagramLink,
          twitterLink: twitterLink,
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
        <Row>
          <div className="page-hero">
            <h1 className="page-hero-title">CREATORVERSE</h1>
            <div className="button-container">
              <div className="main-btns">
              <Link to="/">
                <Button>Return to Home</Button>
              </Link>
              </div>
              <div className="main-btns">
              <Link to="/CreatorForm">
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
              type="url"
              id="imageURL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
            <br></br>
            <h5>Social Media Links</h5>
            <h6>Provide at least one of the creator's social media links.</h6>
            <Form.Label><AiFillYoutube/>YouTube</Form.Label>
            <h6>The creator's YouTube channel (without the @)</h6>
            <Form.Control
              type="text"
              id="youtubeLink"
              onChange={(e) => setYoutubeLink(e.target.value)}
            />
            <Form.Label><AiFillInstagram/>Instagram</Form.Label>
            <h6>The creator's Instagram handle (without the @)</h6>
            <Form.Control
              type="text"
              id="instagramLink"
              onChange={(e) => setInstagramLink(e.target.value)}
            />
            <Form.Label><AiOutlineTwitter/>Twitter</Form.Label>
            <h6>The creator's Twitter handle (without the @)</h6>
            <Form.Control
              type="text"
              id="twitterLink"
              onChange={(e) => setTwitterLink(e.target.value)}
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

export default CreatorForm;

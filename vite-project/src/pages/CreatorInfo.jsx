import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";
import "../App.css";
import Footer from "../components/Footer";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import CreatorForm from "./CreatorForm";


const CreatorInfo = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState([]);
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    getCreator();
  }, []);

  // GET FUNCTIONALITY
  async function getCreator() {
    try {
      const { data, error } = await supabase
        .from("creatorverse")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      if (data) {
        setCreator(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  // DELETE FUNCTIONALITY
  async function deleteCreator() {
    try {
      const { data, error } = await supabase
        .from("creatorverse")
        .delete()
        .eq("id", creator.id);

      if (error) throw error;
      navigate("/"); // navigate to home page
    } catch (error) {
      alert(error.message);
    }
  }

  //WIP FUNCTIONS
  function enterEditingMode() {
    setEditing(true);
  }

  function exitEditingMode() {
    setEditing(false);
  }
  
  async function handleFormSubmit(updatedCreator) {
    try {
      const { data, error } = await supabase
        .from("creatorverse")
        .update(updatedCreator)
        .eq("id", creator.id);

      if (error) throw error;

      setCreator(updatedCreator);
      setEditing(false); // Exit editing mode

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
        </Row>
        <h3 className="current-cards">Creator Card</h3>
        <Row>
          {creator && (
            <div className="creator-details">
              <img
                className="creator-image"
                src={creator.imageURL}
                alt="creator"
              />
              <h3 className="creator-name">{creator.name}</h3>
              <div className="creator-socials">
                {creator.youtubeLink && (
                  <a
                    href={`https://www.youtube.com/${creator.youtubeLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillYoutube style={{ fontSize: "30px", margin: "5px" }} />
                  </a>
                )}

                {creator.instagramLink && (
                  <a
                    href={`https://www.instagram.com/${creator.instagramLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram style={{ fontSize: "30px", margin: "5px" }}  />
                  </a>
                )}

                {creator.twitterLink && (
                  <a
                    href={`https://www.twitter.com/${creator.twitterLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineTwitter  style={{ fontSize: "30px", margin: "5px" }} />
                  </a>
                )}
              </div>

              <p className="creator-description">{creator.description}</p>
              <div className="info-buttons">
              <Button className="info-page-edit-button" variant="warning" onClick={() => setEditing(true)}>Edit Creator</Button>
              <Button className="info-page-delete-button" variant="danger" onClick={() => deleteCreator()}>Delete Creator</Button>
              </div>
              
            </div>
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CreatorInfo;

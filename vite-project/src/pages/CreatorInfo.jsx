import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../client";
import "../App.css";
import Footer from "../components/Footer";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const CreatorInfo = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState([]);

  useEffect(() => {
    getCreator();
  }, []);

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
            </div>
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CreatorInfo;

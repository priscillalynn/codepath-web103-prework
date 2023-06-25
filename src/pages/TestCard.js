import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { supabase } from "../client";
import "../App.css";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import Footer from "./Footer";

const TestCard = (props) => {
  const creator = props.creator;

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(creator.name);
  const [description, setDescription] = useState(creator.description);
  const [imageURL, setImageURL] = useState(creator.imageURL);
  const [youtubeLink, setYoutubeLink] = useState(creator.youtubeLink);
  const [instagramLink, setInstagramLink] = useState(creator.instagramLink);
  const [twitterLink, setTwitterLink] = useState(creator.twitterLink);

  // UPDATE FUNCTIONALITY
  async function updateCreator() {
    try {
      const { data, error } = await supabase
        .from("creatorverse")
        .update({
          name: name,
          description: description,
          imageURL: imageURL,
          youtubeLink: youtubeLink,
          instagramLink: instagramLink,
          twitterLink: twitterLink,
        })
        .eq("id", creator.id);
      if (error) throw error;
      window.location.reload();
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
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  // CARD COMPONENT
  return (
    <>
      <Card
        style={{
          width: "80%",
          height: "100%",
          minHeight: "200px",
          margin: "20px",
          background: `linear-gradient(rgba(67, 65, 65, 0.8), rgba(67, 65, 65, 0.6)), url(${creator.imageURL})`,
          color: "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Card.Body>
          {editing === false ? (
            <>
              <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
                {creator.name}
                <FiEdit
                  style={{
                    cursor: "pointer",
                    margin: "10px",
                    fontSize: "15px",
                  }}
                  onClick={() => setEditing(true)}
                />
                <AiOutlineDelete
                  style={{ cursor: "pointer", fontSize: "18px" }}
                  onClick={() => deleteCreator()}
                />
              </Card.Title>

              <Card.Text style={{ textAlign: "center" }}>
                {creator.description}
              </Card.Text>

              {creator.youtubeLink && (
                <a
                  href={creator.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillYoutube
                    style={{
                      color: "#c4302b",
                      cursor: "pointer",
                      margin: "10px",
                      fontSize: "35px",
                    }}
                  />
                </a>
              )}

              {creator.instagramLink && (
                <a
                  href={creator.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram
                    style={{
                      color: "#9F2B68",
                      cursor: "pointer",
                      margin: "10px",
                      fontSize: "35px",
                    }}
                  />
                </a>
              )}

              {creator.twitterLink && (
                <a
                  href={creator.twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter
                    style={{
                      color: "#1DA1F2",
                      cursor: "pointer",
                      margin: "10px",
                      fontSize: "35px",
                    }}
                  />
                </a>
              )}
            </>
          ) : (
            <>
              <h4>
                Editing Creator{" "}
                <GiCancel
                  style={{
                    cursor: "pointer",
                    marginRight: "10px",
                    fontSize: "18px",
                    color: "red",
                  }}
                  onClick={() => setEditing(false)}
                />
              </h4>
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
              <Form.Label>Creator Image URL</Form.Label>
              <Form.Control
                type="text"
                id="imageURL"
                defaultValue={creator.imageURL}
                onChange={(e) => setImageURL(e.target.value)}
              />
              <Form.Label>Youtube</Form.Label>
              <Form.Control
                type="text"
                id="youtubeLink"
                defaultValue={creator.youtubeLink}
                onChange={(e) => setYoutubeLink(e.target.value)}
              />
              <Form.Label>Instagram</Form.Label>
              <Form.Control
                type="text"
                id="instagramLink"
                defaultValue={creator.instagramLink}
                onChange={(e) => setInstagramLink(e.target.value)}
              />
              <Form.Label>Twitter</Form.Label>
              <Form.Control
                type="text"
                id="twitterLink"
                defaultValue={creator.twitterLink}
                onChange={(e) => setTwitterLink(e.target.value)}
              />
              <br></br>
              <div className="update-button">
                <Button onClick={() => updateCreator()}>Update</Button>
              </div>
              
            </>
          )}
        </Card.Body>
      </Card>
      <Footer />
    </>
  );
};

export default TestCard;

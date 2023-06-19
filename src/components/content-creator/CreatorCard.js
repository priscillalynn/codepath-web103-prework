import React from "react";
import "../../../src/client";
import "./CreatorCard.css";
import { BsInfoCircle } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const CreatorCard = ({ creator, onDelete }) => {
  const handleDelete = () => {
    onDelete(creator.id);
    window.location.reload();
  };
  
  return (
    <>
      <div className="all-cards-container">
        <div className="creator-card-container">
          <div
            className="bg-card-image"
            style={{
              backgroundImage: `url(${creator.imageURL})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="creator-card">
              <h3 className="creator-name">{creator.name}</h3>
              <div className="top-icons">
                <Link to={`/creatorpage/${creator.id}`}>
                  <BsInfoCircle className="info-icon" />
                </Link>
                <MdModeEditOutline className="edit-icon"/>
                <AiOutlineDelete className="delete-icon" onDelete={handleDelete}/>
              </div>
              <p className="desc">{creator.description}</p>
              <div className="bottom-icons">
              <a href={creator.url} target="_blank" rel="noopener noreferrer">
                <AiFillYoutube className="youtube-icon" />
                <AiFillInstagram className="youtube-icon" />
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorCard;

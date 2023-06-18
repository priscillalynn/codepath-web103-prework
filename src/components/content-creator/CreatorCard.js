import React from "react";
import "../../../src/client";
import "./CreatorCard.css";
import { BsInfoCircle } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

const CreatorCard = ({ creator }) => {
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
              <div className="icons">
                <Link to={`/creatorpage/${creator.id}`}>
                  <BsInfoCircle className="info-icon" />
                </Link>
                <MdModeEditOutline className="edit-icon"/>
              </div>
              <p className="desc">{creator.description}</p>
              <a href={creator.url} target="_blank" rel="noopener noreferrer">
                <AiFillYoutube className="youtube-icon" />
                <AiFillYoutube className="youtube-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorCard;

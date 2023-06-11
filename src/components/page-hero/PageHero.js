import React from "react";
import "./PageHero.css";
import Button from "../buttons/Button";

const PageHero = () => {
  return (
    <div className="hero-container">
      <img
        src="https://i.pinimg.com/originals/82/f3/3c/82f33c83e658969547fbce1afda7c1b5.gif"
        alt="Creatorverse"
        className="hero-image"
      />
      <h1>CREATORVERSE</h1>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='button--outline' buttonSize='btn--large'>View all Creators</Button>
        <Button className='btns' buttonStyle='button--primary' buttonSize='btn--large'>Add a Creator</Button>
      </div>
    </div>
  );
};

export default PageHero;

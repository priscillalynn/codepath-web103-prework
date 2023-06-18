import React from "react";
import "./PageHero.css";
import '../../../src/client'

const PageHero = () => {
  return (
    <>
    <div className="hero-container">
      <img
        src="https://i.pinimg.com/originals/82/f3/3c/82f33c83e658969547fbce1afda7c1b5.gif"
        alt="Creatorverse"
        className="hero-image"
      />
      <h1>CREATORVERSE</h1>
      <div className="hero-btns">
        <a href='/viewcreator' className='btns'>View all Creators</a>
        <a href='/addcreator' className='btns'>Add a Creator</a>
      </div>
    </div>

     <div className='cards'>
     <div className='cards-container'></div>
     <div className='cards-wrapper'></div>
 </div>
 </>
  );
};

export default PageHero;

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";
import CreatorCard from "../components/CreatorCard";

// create the user interface (form to add a creator, creator cards)
// setup supabase, create a table for our creators)
// implement the CRUD logic for the creators

const MainPage = () => {
  const [creators, setCreators] = useState([]);

  // Create a ref for the creator cards container
  const creatorCardsRef = useRef(null);

  // Scroll to the creator cards section
  const scrollToCreatorCards = () => {
    creatorCardsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    getCreators();
  }, []);

  // GET/READ FUNCTIONALITY
  async function getCreators() {
    try {
      const { data, error } = await supabase
        .from("creatorverse")
        .select("*");
      if (error) throw error;
      if (data != null) {
        setCreators(data);
      }
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
              <Button onClick={scrollToCreatorCards}>View Creators</Button>
              </div>
              <div className="main-btns">
              <Link to="/CreatorForm">
                <Button>Add Creator</Button>
              </Link>
              </div>
            </div>
          </div>
        </Row>
        <div ref={creatorCardsRef}>
          <h3 className="current-cards">Current Cards</h3>
          <Row xs={1} lg={3} className="g-4">
            {creators.map((creator) => (
              <Col>
                <CreatorCard creator={creator} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default MainPage;

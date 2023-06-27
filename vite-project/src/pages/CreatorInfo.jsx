import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../client';
import '../App.css';

const CreatorInfo = ({ creator }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchCreator();
  }, []);

  const fetchCreator = async () => {
    try {
      const { data, error } = await supabase
        .from('creatorverse')
        .select('*')
        .eq('id', id)
        .single();
      if (error) throw error;
      setCreator(data);
    } catch (error) {
      console.error(error);
    }
  };

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
            <div>
              <h4 style={{color: "green"}}>{creator.name}</h4>
              <p>{creator.description}</p>
              {/* Render additional creator information */}
              {/* ... */}
            </div>
          )}
        </Row>
      </Container>
    </>
  );
};

export default CreatorInfo;

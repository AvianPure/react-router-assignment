import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import { AccordionItem } from 'react-bootstrap';

const Blogs = () => {
  return (
    <>
      <h1>Blog Articles</h1>
      <Card>
        <Card.Body>
          <Card.Title>Welcome!</Card.Title>
          <Card.Text>
            You have arrived at the blog page.
          </Card.Text>
        </Card.Body>
      </Card>
      <Accordion>
        <Accordion.Item eventKey  ="1">
          <Accordion.Header>
            Accordion item 1
          </Accordion.Header>
          <Accordion.Body >
            <Card>
              <Card.Header>card header 1</Card.Header>
              <Card.Body>card body 1</Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item >
        
          <Accordion.Item eventKey="2">
          <Accordion.Header>
          Accordion item 2
          </Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Header>card header 2</Card.Header>
              <Card.Body>card card 2</Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
          Accordion item 3
          </Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Header>card header 3</Card.Header>
              <Card.Body>card card 3</Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Blogs;

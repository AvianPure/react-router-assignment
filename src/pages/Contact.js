import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Contact = () => {
    return <><h1>Contact Me</h1>
            <Card>
        <Card.Body>
          <Card.Title>information card!</Card.Title>
          <Card.Text>
            here are contacts
          </Card.Text>
        </Card.Body>
      </Card>
        <Card>
        <Card.Body>
          <Card.Title>Contacts!</Card.Title>
          <Card.Text>
            You have arrived at the contact card. Contact to our mail!
          </Card.Text>
            <Button variant="primary" type="submit">
              yeet@yeet.com
            </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Complains!</Card.Title>
          <Card.Text>
            You have arrived at the Complains card. Contact to our mail!
          </Card.Text>
            <Button variant="danger" type="submit">
              yeet@yeet.com
            </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Info!</Card.Title>
          <Card.Text>
            You have arrived at the information card. Contact to our mail!
          </Card.Text>
            <Button variant="warning" type="submit">
              yeet@yeet.com
            </Button>
        </Card.Body>
      </Card>
    </>;
  };
  
  export default Contact;
  
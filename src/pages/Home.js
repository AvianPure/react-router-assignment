import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Home = () => {
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === '') {
      setShowAlert(true);
      setEmailSent(true);
    } else {
      setShowAlert(false);
      setEmailSent(true);
    }
  };

  return (
    <>
      <h1 onClick={() => alert('alert')}>Home</h1>
      <Card>
        <Card.Body>
          <Card.Title>Welcome!</Card.Title>
          <Card.Text>
            You have arrived at the home page. Subscribe to our newsletter!
          </Card.Text>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
              Subscribe to our newsletter for updates.  
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </Form>
        </Card.Body>
      </Card>
      {showAlert && emailSent &&
        <Alert variant='danger'>
          Please enter a valid email address.
        </Alert>}
        {!showAlert && emailSent &&
        <Alert variant='info'>
          You have succesfully subscribed
        </Alert>}
    </>
  );
};

export default Home;

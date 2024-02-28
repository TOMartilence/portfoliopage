import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios"

function Contact({ setResult }) {
  const [firstname, setFristname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

 

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const response = await axios.post("/api/send", { firstname, lastname, email, message });
      setResult(response.data);
      setFristname("");
      setLastname("");
      setEmail("");
      setMessage("");
      setResult("Message Sent")
    } catch (error) {
      console.log(`error in the frontend ${error}`);
    }
  }
  return (
    <>
      <Container className='contactSection'>
        <form onSubmit={handleSubmit}>
          <h2 className='contactmeheading'> Send A Message ........</h2>
          <Row>
            <Col>
              <input type="text" placeholder="First Name" onChange={(e) => { setFristname(e.target.value) }} required style={{ textTransform: "capitalize" }} />
            </Col>

            <Col>
              <input type="text" placeholder="Last Name" onChange={(e) => { setLastname(e.target.value) }} required style={{ textTransform: "capitalize" }} />
            </Col>
          </Row>

          <Row>
            <Col>
              <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} required style={{ textTransform: "lowercase" }} />
            </Col>
          </Row>

          <Row>
            <Col>
              <textarea rows={3} cols={50} placeholder="Your message" onChange={(e) => { setMessage(e.target.value) }} required style={{ textTransform: "capitalize" }}></textarea>
            </Col>
          </Row>

          <Row className="sentbutton-container">
            <button className='vvd' type='submit'>Send</button>
          </Row>

        </form>
      </Container>
    </>
  );
}

export default Contact;

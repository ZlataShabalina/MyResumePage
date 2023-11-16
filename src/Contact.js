import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Contact.css';

const cardData = [
  {
    title: "Email address",
    text: "Contact me, and I'll answer quickly.",
    onClickLink: "mailto:atalz2004@gmail.com",
  },
  {
    title: "GitHub",
    text: "Here is my GitHub account, check it out.",
    onClickLink: "https://github.com/ZlataShabalina?tab=repositories",
  },
  {
    title: "LinkedIn",
    text: "Connect with me via LinkedIn network.",
    onClickLink: "https://www.linkedin.com/in/zlatashabalina/",
  },
];

function CardContainer({ data }) {
  return (
    <Row className="card-row">
      {data.map((item, index) => (
        <Col className="card-col" key={index} xs={12} md={4}>
          <Card className="card">
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
              <Button className="button" href={item.onClickLink} target="_blank" variant="primary">
                Click me
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <div className='contact'>
        <h1>Get in touch</h1>
        <div className="cards">
          <Container>
            <CardContainer data={cardData} />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Contact;

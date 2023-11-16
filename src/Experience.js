import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Experience.css';

const Experience = ({ experiences }) => {
  return (
    <div className="container">
      <div className='experience'>
      <h2 className="mt-4 mb-3">My recent IT experience</h2></div>
      <div className="row">
        {experiences.map((experience, index) => (
          <div key={index} className="col-md-6 mb-4">
            <Card className="experience-card">
              <Card.Body>
                <Card.Title>{experience.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{experience.company}</Card.Subtitle>
                <Card.Text style={{ fontSize: '24px', color: '#6c757d' }}>{experience.duration}</Card.Text>
                <Card.Text style={{ fontSize: '18px', color: '#495057', marginTop: '10px'}}>{experience.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

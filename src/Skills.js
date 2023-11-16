import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css';

const Skills = ({ technicalSkills, softSkills, expandedTechnicalIndex, expandedSoftIndex, handleToggleTechnicalSkill, handleToggleSoftSkill }) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className='tech-skills'>
            <h1>TECHNICAL SKILLS</h1>
          </div>
          {technicalSkills.map((skill, index) => (
            <div key={index} className="row skill-container">
              <div className="col-md-12">
                <div className="skill-header">
                  <h3>{skill.title}</h3>
                  <button
                    className="more-button"
                    onClick={() => handleToggleTechnicalSkill(index)}
                  >
                    {expandedTechnicalIndex === index ? 'Less' : 'More'}
                  </button>
                </div>
                {expandedTechnicalIndex === index && (
                  <div className="skill-details">
                    {skill.items.map((item, itemIndex) => (
                      <p key={itemIndex}>{item}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </Col>
        <Col>
          <div className='soft-skills'>
            <h1>SOFT SKILLS</h1>
          </div>
          {softSkills.map((skill, index) => (
            <div key={index} className="row skill-container">
              <div className="col-md-12">
                <div className="skill-header">
                  <h3>{skill.title}</h3>
                  <button
                    className="more-button"
                    onClick={() => handleToggleSoftSkill(index)}
                  >
                    {expandedSoftIndex === index ? 'Less' : 'More'}
                  </button>
                </div>
                {expandedSoftIndex === index && (
                  <div className="skill-details">
                    {skill.items.map((item, itemIndex) => (
                      <p key={itemIndex}>{item}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;

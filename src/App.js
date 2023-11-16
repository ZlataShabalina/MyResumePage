import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Profile from './Profile';
import Facts from './Facts';
import Skills from './Skills';
import Experience from './Experience';
import Copyright from './Copyright';
import './Copyright.css';
import CvDoc from './resources/ZlataShabalinaCV.pdf';
import './Header.css';
import './Contact.css'; 

const App = () => {
  const [key, setKey] = useState('profile');
  const [expandedSkillIndex, setExpandedSkillIndex] = useState({
    technical: null,
    soft: null,
  });

  const experiencesData = [
    {
        title: 'Horror game "The Nun"',
        company: 'VAMK',
        duration: 'October-November 2023',
        description:
          'Coded the 2D horror game in Java.',
      },
    {
      title: 'Game "Treasure Island"',
      company: 'LUT University/VAMK',
      duration: 'June-July 2023',
      description:
        'Worked in Unreal Engine on creating 3D game.',
    },
    {
      title: 'Capture The Flag Project',
      company: 'Wärtsilä/VAMK',
      duration: 'May 2023',
      description:
        'Collaborated with other teammates in cybersecurity area.',
    },
    {
      title: 'Smart Light Application',
      company: 'High School',
      duration: 'January - March 2021',
      description:
        'Assisted in developing and maintaining application for Smart Light system.',
    }
  ];

  const technicalSkills = [
    {
      title: "Game Development/C#",
      items: ["3D game 'Treasure Island' created using UE5", "3D game 'Spaceship race' created using Unity"],
    },
    {
      title: "JavaScript",
      items: ["Course 'Introduction to Programming (PHP + jQuery)'", "Course 'Front-end development (+ React)'"],
    },
    {
      title: "Python",
      items: ["Smart Light application", "Alternative version of the game DoodleJump"],
    },
    {
      title: "Java",
      items: ["2D horror game", "Course 'Object Oriented Programming'"],
    },
  ];

  const softSkills = [
    {
      title: "Teamwork",
      items: [
        "Collaborating effectively with team members on various projects.",
        "Contributing ideas and solutions in group discussions.",
        "Being receptive to feedback and providing constructive input.",
      ],
    },
    {
      title: "Time Management",
      items: [
        "Prioritizing tasks efficiently to meet deadlines.",
        "Organizing work schedules and planning daily activities.",
        "Adapting to changes in project timelines while maintaining quality.",
      ],
    },
    {
      title: "Problem Solving",
      items: [
        "Developing creative solutions to overcome challenges.",
        "Implementing effective problem-solving strategies.",
      ],
    },
    {
      title: "Communication",
      items: [
        "Expressing ideas clearly and concisely in written and verbal communication.",
        "Listening actively to understand others' perspectives.",
        "Adapting communication style to different audiences.",
      ],
    },
  ];
  

  const handleToggleSkill = (index, skillType) => {
    setExpandedSkillIndex((prevIndexes) => {
      const newIndexes = { ...prevIndexes };
      newIndexes[skillType] = newIndexes[skillType] === index ? null : index;
      return newIndexes;
    });
  };

  const handleDownloadCvClick = () => {
    window.open(CvDoc, '_blank');
  };

  const handleContactInfoClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      contactElement.classList.add('animate'); 
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        const rect = contactElement.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          contactElement.classList.add('animate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderTabContent = () => {
    switch (key) {
      case 'profile':
        return (
          <Profile
            onDownloadCvClick={handleDownloadCvClick}
            onContactInfoClick={handleContactInfoClick}
          />
        );
      case 'facts':
        return <Facts />;
      case 'skills':
        return (
          <Skills
            technicalSkills={technicalSkills}
            softSkills={softSkills}
            expandedTechnicalIndex={expandedSkillIndex.technical}
            expandedSoftIndex={expandedSkillIndex.soft}
            handleToggleTechnicalSkill={(index) => handleToggleSkill(index, 'technical')}
            handleToggleSoftSkill={(index) => handleToggleSkill(index, 'soft')}
          />
        );
      case 'experience':
        return <Experience experiences={experiencesData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Tabs id="tabs" activeKey={key} onSelect={(k) => setKey(k)} className="tabs">
        <Tab eventKey="profile" title="PROFILE">
          {renderTabContent()}
        </Tab>
        <Tab eventKey="skills" title="SKILLS">
          {renderTabContent()}
        </Tab>
        <Tab eventKey="experience" title="EXPERIENCE">
          {renderTabContent()}
        </Tab>
        <Tab eventKey="facts" title="FACTS">
          {renderTabContent()}
        </Tab>
      </Tabs>
      
      <Copyright />
    </div>
  );
};

export default App;

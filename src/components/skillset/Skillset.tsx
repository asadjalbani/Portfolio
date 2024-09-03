import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from './components/Particle';
import Techstack from './components/Techstack';
import Toolstack from './components/Toolstack';
import Leetcode from './components/Leetcode';
import Github from './components/Github';

const Skillset: React.FC = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset</strong>
        </h1>

        <Techstack />
        
        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I Use
        </h1>
        <Toolstack />
        
        <Leetcode />
        <Github />
      </Container>
    </Container>
  );
}

export default Skillset;

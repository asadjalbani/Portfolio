import { Container } from "./styles";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGit } from 'react-icons/fa';
import {  SkillsContainer, SkillRow, SkillItem, SkillName } from './styles'

export function Skillset(){

    return(
        <Container id="skillset">
      
      <SkillsContainer>
      <h2>Professional Skillset</h2>
        <SkillRow>
          <SkillItem>
            <FaHtml5 size={90} color="#E34F26" />
            <SkillName>HTML5</SkillName>
          </SkillItem>
          <SkillItem>
            <FaCss3Alt size={90} color="#1572B6" />
            <SkillName>CSS3</SkillName>
          </SkillItem>
          <SkillItem>
            <FaJs size={90} color="#F7DF1E" />
            <SkillName>JavaScript</SkillName>
          </SkillItem>
        </SkillRow>

        <SkillRow>
          <SkillItem>
            <FaReact size={90} color="#61DAFB" />
            <SkillName>React</SkillName>
          </SkillItem>
          <SkillItem>
            <FaNodeJs size={90} color="#339933" />
            <SkillName>Node.js</SkillName>
          </SkillItem>
          <SkillItem>
            <FaPython size={90} color="#3776AB" />
            <SkillName>Python</SkillName>
          </SkillItem>
        </SkillRow>
        <h2>Tools I use</h2>

        <SkillRow>
          <SkillItem>
            <FaGit size={90} color="#F05032" />
            <SkillName>Git</SkillName>
          </SkillItem>
        </SkillRow>
      </SkillsContainer>

        </Container>
    )
}
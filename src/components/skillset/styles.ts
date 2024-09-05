import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color: var(--green);
      font-weight: 500;
    }
  }
  h2{
  text-align = center;
  color : inherit;
  
  }




  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        
      }
    }
  }
  
`
export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align : center;
  color : inherit;
`;

export const SkillRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6px;
  border: 2px solid #ddd; /* Adds a border around each icon */
  border-radius: 8px; /* Rounds the corners of the box */
  background-color: inherit; /* Adds a light background color */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effects */

  &:hover {
    transform: scale(1.1); /* Slightly increases the size of the box on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adds a subtle shadow to give a lift effect */
    border-color: #aaa; /* Changes the border color on hover */
  }
`;



export const SkillName = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: inherit;
`;
/* old one - 2/1/2023 - 
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/

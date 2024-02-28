import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
background-color:#EDF4F2;


`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
background-color:#EDF4F2;

@media (max-width: 960px) {
    flex-direction: column;


}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: black;
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    padding: 18px 36px;
    max-width: 600px;
    color: black;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  background-color:#EDF4F2;
  
  
 
`;

const Skill = styled.div`
  margin-top:20px;
  margin-bottom:30px;
  width: 100%;
  max-width: 500px;
  background: #31473A;
  //background-color:black;
  border: 0.1px solid #854CE6;
  //box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  

  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }

`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
  
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: black;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
  background-color:white;
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;




const Skills = () => {
  return (
    
    
      <>    
          <Container id='skills'><Wrapper></Wrapper><Title>Skills</Title><Desc></Desc></Container>
          <SkillsContainer>
              {skills.map((skill, index) => (
                  <Skill key={index}>
                      <SkillTitle>{skill.title}</SkillTitle>
                      <SkillList>
                          {skill.skills.map((item) => (
                              <SkillItem key={item.name}>
                                  <SkillImage src={item.image} />
                                  {item.name}
                              </SkillItem>
                          ))}
                      </SkillList>
                  </Skill>
              ))}

          </SkillsContainer></>

    

  )
    
  
}


export default Skills
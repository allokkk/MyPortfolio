import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
  gap: 20px;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

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
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 20px; /* Adjusted font size for consistency */
  text-align: center;
  max-width: 600px;
  color: black; /* Adjusted color for better contrast */
  margin-bottom: 70px;

  @media (max-width: 768px) {
    font-size: 14px; /* Adjusted font size for smaller screens */
  }
`;


const ProjectCard = styled.div`
  margin-top: 5px;
  background-color: #31473A; /* Light blue background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(50% - 10px); /* Set width to occupy half of the container */
  box-sizing: border-box;
  border: 0.1px solid #854CE6;
  box-shadow:  20px 20px 60px #1F2634,
  -20px -20px 60px #1F2634;
  transition: all 0.3s ease-in-out; /* Add transition for smooth hover effect */

  &:hover {
    transform: translateY(-5px); /* Move the card up slightly on hover */
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); /* Adjust box shadow on hover */
  }
`;

const ProjectTitle = styled.h3`
 
  margin-bottom: 10px;

  font-size: 22px;
    font-weight: 600;
    color: white;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`;

const ProjectDescription = styled.p`
  font-size: 15px; /* Adjusted font size for consistency */
  color: white; /* Dark black text */
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Title>Projects</Title>
      <Desc>
        I have actively contributed to numerous projects, a selection of which
        I have outlined below with plans to incorporate additional projects
        shortly.
      </Desc>
      <Wrapper>
        <ProjectCard>
          <ProjectTitle>
            Heart Disease Prediction, Deep Learning | April 2023
          </ProjectTitle>
          <ProjectDescription>
            Implemented an ANN with multiple layers, including input, hidden,
            and output layers, to learn patterns from the data and make
            accurate predictions. Achieved a remarkable accuracy rate of 98%,
            demonstrating the model's ability to accurately predict the
            occurrence of heart disease. Demonstrated strong data analysis,
            model building, and machine learning skills in the healthcare
            domain, showcasing the ability to leverage technology for impactful
            solutions.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>
            ATS Tracker Google's Generative AI, LLM, Streamlit| Aug 2023
          </ProjectTitle>
          <ProjectDescription>
            Utilize the ATS Tracker to automatically evaluate candidate resumes
            against job descriptions. Leverage Google's Generative AI
            technology to analyze alignment with job requirements and provide
            detailed feedback. Quickly assess candidate suitability with a
            percentage match score indicating how well a resume aligns with a
            given job description.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>
            Loan Disbursement Analysis, Power BI | Dec 2023
          </ProjectTitle>
          <ProjectDescription>
            Enhanced decision-making by providing executive stakeholders with
            a dynamic tool to assess disbursement trends. Improved operational
            efficiency by automating data extraction, transformation, and
            dashboard updates in Power BI.
          </ProjectDescription>
        </ProjectCard>
      </Wrapper>
    </Container>
  );
};

export default Projects;

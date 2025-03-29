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

// const Projects = () => {
//   return (
//     <Container id="projects">
//       <Title>Projects</Title>
//       <Desc>
//         I have actively contributed to numerous projects, a selection of which
//         I have outlined below with plans to incorporate additional projects
//         shortly.
//       </Desc>
//       <Wrapper>
//         <ProjectCard>
//           <ProjectTitle>
//             Heart Disease Prediction, Deep Learning | April 2023
//           </ProjectTitle>
//           <ProjectDescription>
//             Implemented an ANN with multiple layers, including input, hidden,
//             and output layers, to learn patterns from the data and make
//             accurate predictions. Achieved a remarkable accuracy rate of 98%,
//             demonstrating the model's ability to accurately predict the
//             occurrence of heart disease. Demonstrated strong data analysis,
//             model building, and machine learning skills in the healthcare
//             domain, showcasing the ability to leverage technology for impactful
//             solutions.
//           </ProjectDescription>
//         </ProjectCard>
//         <ProjectCard>
//           <ProjectTitle>
//             ATS Tracker Google's Generative AI, LLM, Streamlit| Aug 2023
//           </ProjectTitle>
//           <ProjectDescription>
//             Utilize the ATS Tracker to automatically evaluate candidate resumes
//             against job descriptions. Leverage Google's Generative AI
//             technology to analyze alignment with job requirements and provide
//             detailed feedback. Quickly assess candidate suitability with a
//             percentage match score indicating how well a resume aligns with a
//             given job description.
//           </ProjectDescription>
//         </ProjectCard>
//         <ProjectCard>
//           <ProjectTitle>
//             Loan Disbursement Analysis, Power BI | Dec 2023
//           </ProjectTitle>
//           <ProjectDescription>
//             Enhanced decision-making by providing executive stakeholders with
//             a dynamic tool to assess disbursement trends. Improved operational
//             efficiency by automating data extraction, transformation, and
//             dashboard updates in Power BI.
//           </ProjectDescription>
//         </ProjectCard>
//       </Wrapper>
//     </Container>
//   );
// };


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
            Optimized Customer Recommendation Engine with Advanced Neural Networks | Edward Jones
          </ProjectTitle>
          <ProjectDescription>
            Engineered and fine-tuned predictive statistical models using deep neural networks and classification techniques to enhance customer recommendations. Achieved an 89% accuracy rate, preventing approximately $15 million in potential revenue decline.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>
            Deep Learning for Portfolio Performance and Risk Assessment | Edward Jones
          </ProjectTitle>
          <ProjectDescription>
            Developed sophisticated predictive models using TensorFlow and Keras to forecast portfolio performance and assess investment risks. Resulted in a 15% improvement in portfolio returns.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>
            Enhanced Market Trend Prediction with NLP and Retrieval-Augmented Generation (RAG) | Edward Jones
          </ProjectTitle>
          <ProjectDescription>
            Implemented Natural Language Processing (NLP) techniques, leveraging Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG), to analyze financial news and social media sentiment. Improved market trend predictions.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>
            Automated ETL Pipelines for Financial Data Warehousing | Edward Jones
          </ProjectTitle>
          <ProjectDescription>
            Designed and implemented robust ETL pipelines to automate the extraction, transformation, and loading of financial data from diverse sources into data warehouses. Ensured data accuracy and consistency.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>
            Reduction of Operational Expenses Using Unsupervised Learning for Patient LOS Analysis | DXC Technology
          </ProjectTitle>
          <ProjectDescription>
            Implemented unsupervised machine learning techniques in Python to analyze patient length of stay data, resulting in a reduction of 300 hours of annual manual work and saving approximately $7 million in operational expenses.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>
            Comprehensive Data Integration into Snowflake for Healthcare Data | DXC Technology
          </ProjectTitle>
          <ProjectDescription>
            Designed an ETL pipeline to seamlessly integrate and process data from various sources into Snowflake, using SQL and Python. Ensured data integrity and regulatory compliance.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>
            Optimized ML Model Deployment on AWS SageMaker with Bayesian Optimization | DXC Technology
          </ProjectTitle>
          <ProjectDescription>
            Designed and deployed advanced machine learning models on AWS SageMaker, optimizing hyperparameters using Bayesian Optimization. Significantly improved predictive accuracy and robustness.
          </ProjectDescription>
        </ProjectCard>
          <ProjectCard>
          <ProjectTitle>
            Enhanced Operational Efficiency Through Anomaly Detection and KPI Dashboards | Magna Info Tech
          </ProjectTitle>
          <ProjectDescription>
            Leveraged large datasets for anomaly detection and developed interactive dashboards for KPI monitoring, increasing efficiency by 10%.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>
            Data Visualization and KPI Monitoring for Business Stakeholders | Magna Info Tech
          </ProjectTitle>
          <ProjectDescription>
            Developed dashboards and visualizations, Tableau and Power BI, to provide actionable insights and KPI monitoring to business stakeholders, leading to a 15% increase in efficiency.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>
            Improved Customer Retention Through Advanced Predictive Modeling | Magna Info Tech
          </ProjectTitle>
          <ProjectDescription>
            Collaborated with senior data scientists to develop predictive models using regression, decision trees, and random forests. Achieved a 20% improvement in accuracy through feature engineering, and presented actionable insights to stakeholders using Seaborn and Power BI.
          </ProjectDescription>
        </ProjectCard>
      </Wrapper>
    </Container>
  );
};
export default Projects;


import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/HesroSection'
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';



import { BrowserRouter as Router } from 'react-router-dom';

import Projects from "./components/Projects";

const Body = styled.div`
  background-color: #EDF4F2;
  width: 100%;
  height:100%;

  overflow-x: hidden;
`;

// const Wrapper = styled.div`
//   background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
//   linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
//   width: 100%;
//   clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
// `;

const Wrapper = styled.div`
  background: radial-gradient(circle at top center, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
              radial-gradient(circle at bottom center, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 10% 100%, 0 90%);
`;



function App() {
  return (
    
      <ThemeProvider theme={darkTheme}>
        <Router>

        <Navbar/>
      <Body>
        <Hero/>
        
        <Wrapper>


        
          <Skills/>
          <Experience/>
          <Education/>

          
          <Projects  />
          
       
          <ContactPage/>
          
        

  
        </Wrapper>
            
        <Footer/>

      </Body>

      
        </Router>
        
      </ThemeProvider>
      
    
  );
}

export default App;

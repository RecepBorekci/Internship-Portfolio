import React from "react";
import MyNavbar from './components/Navbar/MyNavbar';
import './app.css';
import { Col, Container } from "react-bootstrap";
import Title from './sections/Title/Title';
import Divider from '@mui/material/Divider';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import MyWork from './sections/MyWork/MyWork';
import ContactMe from './sections/ContactMe/ContactMe';
import ThankYou from './sections/ThankYou/ThankYou';
import { styled } from '@mui/material/styles';

const StyledDivider = styled(Divider)({
  "border-color": "#FFFFFF !important",
  "border-width": "5px",
  opacity: "1",
});

function App() {
  return (
    <div>
      <MyNavbar />
      <Col >
        <div id="home">
          <Title />
        </div>
        <StyledDivider />
        <div id="about">
          <About />
        </div>
        <StyledDivider />
        <div id="skills">
          <Skills />
        </div>
        <StyledDivider />
        <div id="experience">
          <Experience />
        </div>
        <StyledDivider />
        <div id="work">
          <MyWork />
        </div>
        <StyledDivider />
        <div id="contact">
          <ContactMe />
        </div>
        <StyledDivider />
        <ThankYou />
      </Col>



    </div>
  );
}

export default App;

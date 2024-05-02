import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import './about.css';
import { Container, Box, Typography } from "@mui/material";

import { useMediaQuery } from 'react-responsive';

import { styled } from '@mui/material/styles';
import BodyText from "../../components/BodyText/BodyText";


const StyledImage = styled('img')(({ screenSize }) => ({
  maxWidth: '100%',
  height: 'auto',
  width: screenSize === 'small' ? '10rem' : screenSize === 'medium' ? '15rem' : screenSize === 'large' ? '20rem' : '30rem',
}));

function About() {

  const isSmallScreen = useMediaQuery({ maxWidth: 576 });
  const isMediumScreen = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLargeScreen = useMediaQuery({ minWidth: 769, maxWidth: 992 });
  const isXLargeScreen = useMediaQuery({ minWidth: 993 });

  return (
    <Container sx={{ padding: "2rem" }}>
      <Row className="align-items-center">
        {
          isSmallScreen && (<>
            <Row className="justify-content-center">
              <StyledImage id="about-image" src="/aboutImage.png" />
            </Row>
            <Col>
              <SectionTitle name="About Me" />
              <BodyText text="Hi, I'm an aspiring web developer who is interested in many fields of computer engineering. " fontSize="15px" />
              <br />
              <BodyText text="Currently, I'm working as a front-end developer in Butiko. And looking forward to learn about AI and ML." fontSize="15px" />

            </Col>
          </>)
        }
        {
          isMediumScreen && (<>
            <Row className="justify-content-center">
              <StyledImage id="about-image" src="/aboutImage.png" />
            </Row>
            <Col>
              <SectionTitle name="About Me" />
              <BodyText text="Hi, I'm an aspiring web developer who is interested in many fields of computer engineering. " fontSize="20px" />
              <br />
              <BodyText text="Currently, I'm working as a front-end developer in Butiko. And looking forward to learn about AI and ML." fontSize="20px" />

            </Col>
          </>)
        }
        {
          isLargeScreen && (<>
            <Col>
              <StyledImage id="about-image" src="/aboutImage.png" />
            </Col>
            <Col>
              <SectionTitle name="About Me" />
              <BodyText text="Hi, I'm an aspiring web developer who is interested in many fields of computer engineering. " fontSize="25px" />
              <br />
              <BodyText text="Currently, I'm working as a front-end developer in Butiko. And looking forward to learn about AI and ML." fontSize="25px" />

            </Col>
          </>)
        }
        {
          isXLargeScreen && (<>
            <Col>
              <StyledImage id="about-image" src="/aboutImage.png" />
            </Col>
            <Col>
              <SectionTitle name="About Me" />
              <BodyText text="Hi, I'm an aspiring web developer who is interested in many fields of computer engineering. " fontSize="30px" />
              <br />
              <BodyText text="Currently, I'm working as a front-end developer in Butiko. And looking forward to learn about AI and ML." fontSize="30px" />

            </Col>
          </>)
        }

      </Row>
    </Container>
  );
}

export default About;

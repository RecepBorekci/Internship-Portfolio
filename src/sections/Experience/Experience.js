import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box, Container } from "@mui/material";
import './experience.css';
import ExperienceText from "../../components/ExperienceText";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


import { useMediaQuery } from 'react-responsive';
import ExperienceYear from "../../components/ExperienceYear";

function Experience() {

  const isSmallScreen = useMediaQuery({ maxWidth: 576 });
  const isMediumScreen = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLargeScreen = useMediaQuery({ minWidth: 769, maxWidth: 992 });
  const isXLargeScreen = useMediaQuery({ minWidth: 993 });

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Container display="flex" justifyContent="center" alignItems="center" sx={{ padding: "2rem 0", margin: "0 2rem" }}>
        <SectionTitle name="Experience" />
        {
          isSmallScreen && (<>
            <Row >
              <Col className="margin">
                <ExperienceText />
              </Col>
            </Row>
          </>)
        }

        {
          isMediumScreen && (<>
            <Row>
              <Col xs sm md="6" className="margin">
                <ExperienceText />
              </Col>
            </Row>
          </>)
        }

        {
          isLargeScreen && (<>
            <Row >
              <Col xs sm md="6">
                <ExperienceYear year="2023" />
              </Col>
              <Col xs sm md="6" className="margin">
                <ExperienceText />
              </Col>
            </Row>
          </>)
        }

        {
          isXLargeScreen && (<>
            <Row>
              <Col xs sm md="6">
                <ExperienceYear year="2023" />
              </Col>
              <Col xs sm md="6" className="margin">
                <ExperienceText />
              </Col>
            </Row>
          </>)
        }
      </Container>
    </Box>

  );
}

export default Experience;

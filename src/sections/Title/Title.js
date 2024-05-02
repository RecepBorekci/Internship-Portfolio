import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

import { styled } from '@mui/material/styles';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './title.css';

import { useMediaQuery } from 'react-responsive';

const TitleButton = styled(Button)({
  backgroundColor: "#088395",
  '&:hover': {
    backgroundColor: "#2996A6",
  },
});

const StyledImage = styled('img')(({ screenSize }) => ({
  maxWidth: '100%',
  height: 'auto',
  width: screenSize === 'small' ? '10rem' : screenSize === 'medium' ? '15rem' : screenSize === 'large' ? '20rem' : '30rem',
}));

function Title() {

  const isSmallScreen = useMediaQuery({ maxWidth: 576 });
  const isMediumScreen = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLargeScreen = useMediaQuery({ minWidth: 769, maxWidth: 992 });
  const isXLargeScreen = useMediaQuery({ minWidth: 993 });

  return (
    <Container sx={{ padding: "2rem" }}>
      <Row className="align-items-center">
        {isSmallScreen && (<>
          <Row className="justify-content-center">
            <StyledImage id="title-image" src="/titleImage.png" />
          </Row>
          <Col>
            <Typography variant="h1" fontSize={30} sx={{ padding: "1rem 0" }}>
              I'M <Typography display="inline" variant="h1" fontSize={30} sx={{ paddingBottom: "1rem", color: "#00FFCA !important" }}>RECEP BÖREKCİ</Typography>
            </Typography>
            <Typography variant="h4" fontSize={20}>
              COMPUTER ENGINEERING STUDENT
            </Typography>
            <Box sx={{ margin: "0 0 1rem 0" }}>
              <Row>
                <Col xs="auto">
                  <TitleButton className="mt-3" variant="contained" >
                    <a href="/myCV.pdf" download>
                      Download CV
                    </a>
                  </TitleButton>
                </Col>
              </Row>
            </Box>
          </Col>

        </>)}
        {isMediumScreen && (<>
          <Row className="justify-content-center">
            <StyledImage id="title-image" src="/titleImage.png" />
          </Row>
          <Col>

            <Typography variant="h1" fontSize={30} sx={{ paddingBottom: "1rem" }}>
              I'M <Typography display="inline" variant="h1" fontSize={30} sx={{ paddingBottom: "1rem", color: "#00FFCA !important" }}>RECEP BÖREKCİ</Typography>
            </Typography>
            <Typography variant="h4" fontSize={20}>
              COMPUTER ENGINEERING STUDENT
            </Typography>
            <Box sx={{ margin: "2rem 1rem 1rem 0" }}>
              <Row>
                <Col xs="auto">
                  <TitleButton variant="contained" size="large">
                    <a href="/myCV.pdf" download>
                      Download CV
                    </a>
                  </TitleButton>
                </Col>
              </Row>
            </Box>
          </Col>
        </>)}
        {isLargeScreen && (<>
          <Col>
            <Typography variant="h1" fontSize={45} sx={{ paddingBottom: "1rem" }}>
              I'M <Typography display="inline" variant="h1" fontSize={45} sx={{ paddingBottom: "1rem", color: "#00FFCA !important" }}>RECEP BÖREKCİ</Typography>
            </Typography>
            <Typography variant="h4" fontSize={25}>
              COMPUTER ENGINEERING STUDENT
            </Typography>
            <Box sx={{ margin: "2rem 1rem 1rem 0" }}>
              <Row>
                <Col xs="auto">
                  <TitleButton variant="contained" size="large">
                    <a href="/myCV.pdf" download>
                      Download CV
                    </a>
                  </TitleButton>
                </Col>
              </Row>
            </Box>
          </Col>
          <Col>
            <StyledImage id="title-image" src="/titleImage.png" />
          </Col>
        </>)}
        {isXLargeScreen && (<>
          <Col>
            <Typography variant="h1" fontSize={60} sx={{ paddingBottom: "1rem" }}>
              I'M <Typography display="inline" variant="h1" fontSize={60} sx={{ paddingBottom: "1rem", color: "#00FFCA !important" }}>RECEP BÖREKCİ</Typography>
            </Typography>
            <Typography variant="h4" fontSize={30}>
              COMPUTER ENGINEERING STUDENT
            </Typography>
            <Box sx={{ margin: "2rem 1rem 1rem 0" }}>
              <Row>
                <Col xs="auto">
                  <TitleButton variant="contained" size="large">
                    <a href="/myCV.pdf" download>
                      Download CV
                    </a>
                  </TitleButton>
                </Col>
              </Row>
            </Box>
          </Col>
          <Col>
            <StyledImage id="title-image" src="/titleImage.png" />
          </Col>
        </>)}

      </Row>
    </Container>
  );
}

export default Title;

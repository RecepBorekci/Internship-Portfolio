import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box, Typography } from "@mui/material";
import './experienceText.css';
import { useMediaQuery } from 'react-responsive';
import BodyText from "./BodyText/BodyText";

function ExperienceText() {

    const isSmallScreen = useMediaQuery({ maxWidth: 576 });
    const isMediumScreen = useMediaQuery({ minWidth: 577, maxWidth: 768 });
    const isLargeScreen = useMediaQuery({ minWidth: 769, maxWidth: 992 });
    const isXLargeScreen = useMediaQuery({ minWidth: 993 });

    return (
        <div>
            {isSmallScreen && (<>
                <Box sx={{
                    padding: "10px 0"
                }}>
                    <Col className="mx-1">
                        <Row>
                            <Typography variant="h4" fontSize="2.8rem">
                                IT Intern
                            </Typography>
                        </Row>
                        <Row>
                            <Typography variant="h5" fontSize="1.2rem" color="#F2F1F1">
                                Orta Anadolu, Kayseri
                            </Typography>

                        </Row>
                        <Row >
                            <BodyText
                                text="This is where I did my first internship. Here I improved myself on front-end development and wrote my first ever project in React, this portfolio."
                                fontSize="15px"
                            ></BodyText>
                        </Row>
                    </Col>
                </Box>
            </>)}
            {isMediumScreen && (<>
                <Box sx={{
                    padding: "10px 0"
                }}>
                    <Col className="mx-1">
                        <Row>

                            <Typography variant="h4" fontSize="3.2rem">
                                IT Intern
                            </Typography>
                        </Row>
                        <Row>
                            <Typography variant="h5" fontSize="1.5rem" color="#F2F1F1">
                                Orta Anadolu, Kayseri
                            </Typography>

                        </Row>
                        <Row >
                            <BodyText
                                text="This is where I did my first internship. Here I improved myself on front-end development and wrote my first ever project in React, this portfolio."
                                fontSize="20px"
                            ></BodyText>
                        </Row>
                    </Col>
                </Box>
            </>)}
            {isLargeScreen && (<>
                <Box sx={{
                    padding: "10px 0"
                }}>
                    <Col>
                        <Row>

                            <Typography variant="h4" fontSize="3.5rem">
                                IT Intern
                            </Typography>
                        </Row>
                        <Row>
                            <Typography variant="h5" fontSize="1.8rem" color="#F2F1F1">
                                Orta Anadolu, Kayseri
                            </Typography>

                        </Row>
                        <Row >
                            <BodyText
                                text="This is where I did my first internship. Here I improved myself on front-end development and wrote my first ever project in React, this portfolio."
                                fontSize="25px"
                            ></BodyText>
                        </Row>
                    </Col>
                </Box>
            </>)}
            {isXLargeScreen && (<>
                <Box sx={{
                    padding: "10px 0"
                }}>
                    <Col>
                        <Row>

                            <Typography variant="h4" fontSize="4rem">
                                IT Intern
                            </Typography>
                        </Row>
                        <Row>
                            <Typography variant="h5" fontSize="2rem" color="#F2F1F1">
                                Orta Anadolu, Kayseri
                            </Typography>

                        </Row>
                        <Row >
                            <BodyText
                                text="This is where I did my first internship. Here I improved myself on front-end development and wrote my first ever project in React, this portfolio."
                                fontSize="30px"
                            ></BodyText>
                        </Row>
                    </Col>
                </Box>
            </>)}
        </div>


    );
}

export default ExperienceText;
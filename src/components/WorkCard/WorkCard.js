import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from 'react-responsive';
import BodyText from "../BodyText/BodyText";

function WorkCard(props) {
    const isSmallScreen = useMediaQuery({ maxWidth: 576 });
    const isMediumScreen = useMediaQuery({ minWidth: 577, maxWidth: 768 });
    const isLargeScreen = useMediaQuery({ minWidth: 769, maxWidth: 992 });
    const isXLargeScreen = useMediaQuery({ minWidth: 993 });

    return (
        <Box sx={{ margin: "1rem" }}>
            <Row className="align-items-center">
                {isSmallScreen && (
                    <>
                        <Col xs={12}>
                            <img
                                className="small-image d-block w-100 "
                                src={props.img}
                                alt="First slide"
                            />
                        </Col>
                        <Col xs={12}>
                            <Row>
                                <Typography variant="h4" fontSize="2rem">
                                    {props.name}
                                </Typography>
                            </Row>
                        </Col>
                    </>
                )}
                {isMediumScreen && (
                    <>
                        <Col xs={12} sm={6}>
                            <img
                                className="small-image d-block w-100 "
                                src={props.img}
                                alt="First slide"
                            />
                        </Col>
                        <Col xs={12} sm={6}>
                            <Row>
                                <Typography variant="h4" fontSize="3rem">
                                    {props.name}
                                </Typography>
                            </Row>
                            <Row>
                                <BodyText
                                    text={props.desc}
                                    fontSize="2rem"
                                ></BodyText>
                            </Row>
                        </Col>
                    </>
                )}
                {isLargeScreen && (
                    <>
                        <Col xs={12} sm={6}>
                            <img
                                className="small-image d-block w-100 "
                                src={props.img}
                                alt="First slide"
                            />
                        </Col>
                        <Col xs={12} sm={6} className="">
                            <Row>
                                <Typography variant="h4" fontSize="3.75rem">
                                    {props.name}
                                </Typography>
                            </Row>
                            <Row>
                                <BodyText
                                    text={props.desc}
                                    fontSize="2.5rem"
                                ></BodyText>
                            </Row>
                        </Col>
                    </>
                )}
                {isXLargeScreen && (
                    <>
                        <Col xs={12} sm={6}>
                            <img
                                className="small-image d-block w-100 "
                                src={props.img}
                                alt="First slide"
                            />
                        </Col>
                        <Col xs={12} sm={6}>
                            <Row>
                                <Typography variant="h4" fontSize="4rem">
                                    {props.name}
                                </Typography>
                            </Row>
                            <Row>
                                <BodyText
                                    text={props.desc}
                                    fontSize="3rem"
                                ></BodyText>
                            </Row>
                        </Col>
                    </>
                )}
            </Row>
        </Box>
    );
}

export default WorkCard;

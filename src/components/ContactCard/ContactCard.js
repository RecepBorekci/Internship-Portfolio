import React from "react";
import { Card, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';

function ContactCard(props) {

    const isSmallScreen = useMediaQuery({ maxWidth: 576 });
    const isMediumScreen = useMediaQuery({ minWidth: 577, maxWidth: 768 });
    const isLargeScreen = useMediaQuery({ minWidth: 769, maxWidth: 992 });
    const isXLargeScreen = useMediaQuery({ minWidth: 993, maxWidth: 1200 });
    const isXXLargeScreen = useMediaQuery({ minWidth: 1200 });

    return (
        <div>
            {
                isSmallScreen && (<>
                    <Card variant="outlined" sx={{ backgroundColor: "#088395", padding: "0.4rem", color: "#FFFFFF", width: "50vw", margin: "0.4rem 0", borderRadius: "5px" }}>
                        <Row className="justify-contents-start align-items-center">
                            <Col sm={10}>
                                <Typography variant="h5" fontSize={10}>
                                    {props.content}
                                </Typography>
                            </Col>
                        </Row>
                    </Card>
                </>)
            }
            {
                isMediumScreen && (<>
                    <Card variant="outlined" sx={{ backgroundColor: "#088395", padding: "0.6rem", color: "#FFFFFF", width: "40vw", margin: "0.6rem 0", borderRadius: "10px" }}>
                        <Row className="justify-contents-start align-items-center">
                            <Col sm={2}>
                                {props.icon}
                            </Col>
                            <Col sm={10}>
                                <Typography variant="h5" fontSize={12}>
                                    {props.content}
                                </Typography>
                            </Col>
                        </Row>
                    </Card>
                </>)
            }
            {
                isLargeScreen && (<>
                    <Card variant="outlined" sx={{ backgroundColor: "#088395", padding: "0.8rem", color: "#FFFFFF", width: "35vw", margin: "0.8rem 0", borderRadius: "15px" }}>
                        <Row className="justify-contents-start align-items-center">
                            <Col sm={2}>
                                {props.icon}
                            </Col>
                            <Col sm={10}>
                                <Typography variant="h5" fontSize={16}>
                                    {props.content}
                                </Typography>
                            </Col>
                        </Row>
                    </Card>
                </>)
            }
            {
                isXLargeScreen && (<>
                    <Card variant="outlined" sx={{ backgroundColor: "#088395", padding: "1rem", color: "#FFFFFF", width: "30vw", margin: "1rem 1.5rem", borderRadius: "20px" }}>
                        <Row className="justify-contents-start align-items-center">
                            <Col sm={2}>
                                {props.icon}
                            </Col>
                            <Col sm={10}>
                                <Typography variant="h5" fontSize={18}>
                                    {props.content}
                                </Typography>
                            </Col>
                        </Row>
                    </Card>
                </>)
            }

            {
                isXXLargeScreen && (<>
                    <Card variant="outlined" sx={{ backgroundColor: "#088395", padding: "1rem", color: "#FFFFFF", width: "25vw", margin: "1rem 1.5rem", borderRadius: "20px" }}>
                        <Row className="justify-contents-start align-items-center">
                            <Col sm={2}>
                                {props.icon}
                            </Col>
                            <Col sm={10}>
                                <Typography variant="h5" fontSize={20}>
                                    {props.content}
                                </Typography>
                            </Col>
                        </Row>
                    </Card>
                </>)
            }

        </div>

    )
}

export default ContactCard;
import React from "react";
import { Container, Box } from "@mui/material";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import './contactMe.css';
import ContactCard from "../../components/ContactCard/ContactCard";

import { Email, Phone, LocationOn } from "@material-ui/icons";
import { Col, Row } from "react-bootstrap";

function ContactMe() {
    return (
        <Container sx={{ padding: "4rem" }}>
            <SectionTitle name="Contact Me" />
            <Box justifyContent="center" alignItems="center">
                <Row className="justify-content-center ">
                    <Col className="align-items-center d-flex flex-column" xs={12} sm={12} md={{ span: 6 }} lg={{ span: 4 }}>
                        <ContactCard icon={<Email className="icon" />} content="recepborekci29@gmail.com" />
                    </Col>
                    <Col className="align-items-center d-flex flex-column" xs={12} sm={12} md={{ span: 6 }} lg={{ span: 4, offset: 2 }}>
                        <ContactCard icon={<Phone className="icon" />} content="0555 555 55 55" />
                    </Col>
                </Row>
                <Row>
                    <Col className="align-items-center d-flex flex-column" xs={12} sm={12} md={{ span: 4, offset: 4 }} lg={{ span: 4, offset: 4 }}>
                        <ContactCard icon={<LocationOn className="icon" />} content="Kayseri, Turkey" />
                    </Col>
                </Row>
            </Box>

        </Container>
    );
}

export default ContactMe;

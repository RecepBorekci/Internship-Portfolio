import React from "react";
import { Box, Container } from "@mui/material";
import SkillCard from "../../components/SkillCard/SkillCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Row, Col } from "react-bootstrap";

function Skills() {

    return (
        <Container sx={{ padding: "2rem " }}>
            <SectionTitle name="My Skills" />
            <Box justifyContent="center" alignItems="center">
                <Row>
                    <Col xs={6} md={4} lg={3}>
                        <SkillCard
                            image="html.png"
                            name="HTML"
                        />
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <SkillCard
                            image="css.png"
                            name="CSS"
                        />
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <SkillCard
                            image="js.jpg"
                            name="JavaScript"
                        />
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <SkillCard
                            image="react.png"
                            name="React"
                        />
                    </Col>

                    <Col xs={6} md={4} lg={3}>
                        <SkillCard
                            image="flutter.png"
                            name="Flutter"
                        />
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <SkillCard
                            image="mysql.png"
                            name="MySQL"
                        />
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <SkillCard
                            image="mongodb.png"
                            name="MongoDB"
                        />
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <SkillCard
                            image="git.png"
                            name="Git SCM"
                        />
                    </Col>
                    <Col xs={6} md={4} lg={{ span: 3, offset: 3 }}>
                        <SkillCard
                            image="java.png"
                            name="Java"
                        />
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <SkillCard
                            image="python.png"
                            name="Python"
                        />
                    </Col>
                </Row>
            </Box>
        </Container>
    );
}

export default Skills;

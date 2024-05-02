import React from "react";
import { Col, Row } from "react-bootstrap";
import RightArrow from "./RightArrow";
import CircleAndLine from "./CircleAndLine";

function ExperienceYear(props) {
    return (
        <Row>
            <Col xs={{ span: 3, offset: 3 }}>
                <RightArrow year={props.year} />
            </Col>
            <Col xs={3}>
                <CircleAndLine />
            </Col>

        </Row>
    );
}

export default ExperienceYear;
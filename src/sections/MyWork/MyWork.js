import React from "react";
import { Container } from "@mui/material";
import Carousel from 'react-bootstrap/Carousel';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import './myWork.css';
import WorkCard from "../../components/WorkCard/WorkCard";

function MyWork() {
    return (
        <Container sx={{ padding: "2rem" }}>
            <SectionTitle name="My Works" />
            <Carousel>
                <Carousel.Item>
                    <WorkCard img="/pixie.png" name="Pixie" desc="Lovely photo editing app to perfect your images." />
                </Carousel.Item>
                <Carousel.Item>
                    <WorkCard img="/flow.png" name="Flow" desc="Wonderful messaging app to chat with your loved ones." />
                </Carousel.Item>
                <Carousel.Item>
                    <WorkCard img="/musing.svg" name="Musing" desc="Awesome music website to listen to your favourite musicians." />
                </Carousel.Item>
            </Carousel>

        </Container>
    );
}

export default MyWork;

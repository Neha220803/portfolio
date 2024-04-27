import { Container, Row, Col, Button } from "react-bootstrap";
import projImg1 from "../../images/projects/she.png";
import projImg2 from "../../images/projects/Phistrap.png";
import projImg3 from "../../images/projects/plas.png";
import projImg4 from "../../images/projects/soc.png";
import projImg5 from "../../images/projects/count.png";
import projImg6 from "../../images/projects/food.png";
// import colorSharp2 from "../../images/about2/ui2.png";
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ProjectPage.css';
import '../../App.css';
const ProjectPage = () => {

    const projects = [
        {
            title: "shE-Wallet",
            description: "A mobile app for Co-operative societies which connects women, fostering financial inclusivity by creating communities",
            imgUrl: projImg1,
            projUrl: "https://github.com/Neha220803/she-wallet",
        },
        {
            title: "Phis-Trap",
            description: "A mobile application that identifies spam and phishing messages in SMS and emails through machine learning algorithms, providing alerts within the app.",
            imgUrl: projImg2,
            projUrl: "https://github.com/Neha220803/phistrap",
        },
        {
            title: "PlasTrack",
            description: "A mobile app designed to gather plastic from the local area, collaborating with NGOs and offering financial incentives for the users who donate their plastic waste.",
            imgUrl: projImg3,
            projUrl: "https://github.com/Neha220803/plas_track",
        },
        {
            title: "Open-SoC",
            description: "An Open Source SoC Application Built using ELK Stack for log collection and visualization and used case management system like theHIVE with cortex and using MISP software for threat intelligence",
            imgUrl: projImg4,
            projUrl: "https://github.com/Neha220803",
        },
        {
            title: "Countries App",
            description: "A Web app which uses the REST Countries API and MongoDB to display general country info, population gauge, language distribution pie chart, and an interactive map using Leaflet API",
            imgUrl: projImg5,
            projUrl: "https://github.com/Neha220803/CountriesAPI",
        },
        {
            title: "Omni Foods",
            description: "A captivating landing page crafted by me for an enticing fictional restaurant 'Omni Foods' delivery services",
            imgUrl: projImg6,
            projUrl: "https://github.com/Neha220803/OmniRestaurent",
        },
    ];

    return (
        <Container className="p-5">
            <Row>
                <h2 className="each-head lead display-6 my-4 d-flex align-items-center justify-content-center">Projects</h2>
                <Row>
                    {
                        projects.map((project, index) => {
                            return (

                                <ProjectCard
                                    key={index}
                                    {...project}
                                    index={index}
                                />

                            )
                        })
                    }
                </Row>

            </Row>
            {/* <img className="background-image-right" src={colorSharp2}></img> */}
        </Container>

    )
}


export default ProjectPage;

export const ProjectCard = ({ title, description, imgUrl, projUrl, index }) => {
    const delay = index * 0.5;
    return (
        <Col lg={4} sm={4} md={4}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
                className="mb-4 proj-imgbx"
            >
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx px-2">
                    <a
                        variant="light"
                        className="github-btn"
                        href={projUrl}
                    ><h4><div>{title} <FaArrowRight style={{ color: 'white', marginLeft: '5px', verticalAlign: 'middle' }} /></div></h4>
                    </a>
                    <span >{description}</span>
                </div>

            </motion.div>
        </Col>
    )
};
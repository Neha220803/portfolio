import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../../images/projects/she.png";
import projImg2 from "../../images/projects/Phistrap.png";
import projImg3 from "../../images/projects/plas.png";
// import projImg4 from "../../images/projects/soc.png";
import projImg5 from "../../images/projects/count.png";
import projImg6 from "../../images/projects/food2.png";
import projImg7 from "../../images/projects/pjsym.png";
import projImg8 from "../../images/projects/jp.png";
import projImg9 from "../../images/projects/tiles.png";
import projImg10 from "../../images/projects/todo.png";
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import "./ProjectPage.css"

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
        }
        // {
        // title: "Open-SoC",
        // description: "An Open Source SoC Application Built using ELK Stack for log collection and visualization and used case management system like theHIVE with cortex and using MISP software for threat intelligence",
        // imgUrl: projImg4,
        // projUrl: "https://github.com/Neha220803",
        // },

    ];

    const FreelanceProjects = [
        {
            title: "PJSYM",
            description: "Donation Website",
            imgUrl: projImg7,
            projUrl: "https://pjsym.org/",
        },
        {
            title: "Juice Point",
            description: "Billing System (POS System)",
            imgUrl: projImg8,
            projUrl: "https://juice-point-4d411.web.app/",
        },

        {
            title: "Jes-Tiles",
            description: "Website for a Tiles Company",
            imgUrl: projImg9,
            projUrl: "https://neha220803.github.io/jes-tiles/",
        },
    ];

    const hobbyProjects = [
        {
            title: "Countries App",
            description: "A Web app which uses the REST Countries API and MongoDB to display general country info, population gauge, language distribution pie chart, and an interactive map using Leaflet API",
            imgUrl: projImg5,
            projUrl: "https://github.com/Neha220803/CountriesAPI",
        },
        {
            title: "Task-Manager App",
            description: "A task manager application which uses a REST API and Next.js, styled with Tailwind CSS with the Daisy UI plugin, with features for creating, editing, and deleting tasks along with due date.",
            imgUrl: projImg10,
            projUrl: "https://todo-next-js-opal-seven.vercel.app/",
        },

        {
            title: "Omni Foods",
            description: "A captivating landing page crafted by me for an enticing fictional restaurant 'Omni Foods' delivery services",
            imgUrl: projImg6,
            projUrl: "https://neha220803.github.io/OmniRestaurent/",
        },
    ];

    return (
        <Container className="p-5">
            <Row>
                <div className="each-head lead display-6 my-4 d-flex align-items-center justify-content-center">Projects</div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 p-0 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first"><div className="project-heads">Hackathon Projects</div></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second"><div className="project-heads">Freelance Projects</div></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third"><div className="project-heads">Hobby Projects</div></Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {/* <h5 className="sub-head text-center mb-4">Hackathon Projects</h5> */}
                                {projects.map((project, index) => (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        index={index}
                                    />
                                ))}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            {/* <h5 className="sub-head text-center mb-4">Freelance Projects</h5> */}
                            <Row>
                                {FreelanceProjects.map((project, index) => (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        index={index}
                                    />
                                ))}
                            </Row>

                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            {/* <h5 className="sub-head text-center mb-4">Hobby Projects</h5> */}
                            <Row>
                                {hobbyProjects.map((hobbyProjects, index) => (
                                    <ProjectCard
                                        key={index}
                                        {...hobbyProjects}
                                        index={index}
                                    />
                                ))}
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Row>
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
                className="mb-4 proj-imgbx project"
            >
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx px-2">
                    <a
                        variant="light"
                        className="github-btn"
                        href={projUrl}
                    >
                        <h4>
                            <div>{title} <FaArrowRight style={{ color: 'white', marginLeft: '5px', verticalAlign: 'middle' }} /></div>
                        </h4>
                    </a>
                    <span className="proj-desc">{description}</span>
                </div>
            </motion.div>
        </Col>
    )
};

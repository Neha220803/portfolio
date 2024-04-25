import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../../images/projects/she.png";
import projImg2 from "../../images/projects/Phistrap.png";
import projImg3 from "../../images/projects/plas.png";
import projImg4 from "../../images/projects/soc.png";
import projImg5 from "../../images/projects/count.png";
import projImg6 from "../../images/projects/food.png";
import colorSharp2 from "../../images/about2/ui2.png";
import './ProjectPage.css';
import '../../App.css';
const ProjectPage = () => {

    const projects = [
        {
            title: "shE-Wallet",
            description: "An App developed to help SHG of India",
            imgUrl: projImg1,
        },
        {
            title: "Phis-Trap",
            description: "App which identifies Spam SMS/Emails",
            imgUrl: projImg2,
        },
        {
            title: "PlasTrack",
            description: "A Plastic Collecting App",
            imgUrl: projImg3,
        },
        {
            title: "Open-SoC",
            description: "An Open Source SoC Application",
            imgUrl: projImg4,
        },
        {
            title: "Countries Appication",
            description: "A Web app fully depends on Rest Countries API",
            imgUrl: projImg5,
        },
        {
            title: "Landing Page",
            description: "for a fake restaurant",
            imgUrl: projImg6,
        },
    ];

    return (
        <Container className="p-5">
            <Row>
                <Col size={12}>
                    <h2 className="each-head my-4">Projects</h2>
                    <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                </Col>
            </Row>
            <img className="background-image-right" src={colorSharp2}></img>
        </Container>

    )
}


export default ProjectPage;

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
};
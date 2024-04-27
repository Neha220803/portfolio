import { Container, Col, Row, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../App.css';
import cyber from '../../images/about2/cyber.svg';
import web from '../../images/about2/web.svg';
import mobile from '../../images/about2/mobile.svg';
import ui from '../../images/about2/ui.svg';
import './AboutPages.css';


const upvariants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.9,
            staggerChildren: 0.1,
        }
    }
};



const AboutPages = () => {
    const cardsData = [
        { title: "Cyber Security Analyst", image: cyber },
        { title: "Mern Stack Developer", image: web },
        { title: "Flutter Developer", image: mobile },
        { title: "UI Designer", image: ui }
    ];

    return (
        <motion.div variants={upvariants} initial="initial" whileInView="animate">
            <Container className="d-flex align-items-center justify-content-center flex-column">
                <Row>
                    <motion.div className='each-head display-6 lead mb-2'>About me</motion.div>
                </Row>
                <Row >
                    <motion.div className='lead abt-text px-5'>
                        With a knack for quick learning, I've delved into various domains to satiate my thirst for understanding, I love exploring and adapting.
                    </motion.div>
                </Row>
                <Row className='m-0 m-lg-5 m-xs-0 m-sm-0'>
                    {cardsData.map((card, index) => (
                        <Col lg={3} md={6} sm={6} xs={6} key={index} className='mb-1'>
                            <Card bg="transparent" text="light" border='light' >
                                <Card.Body >
                                    <Card.Img className='card-image' src={card.image}></Card.Img>
                                    <Card.Text className="text-center mt-3"><h5>{card.title}</h5></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </motion.div>
    );
}

export default AboutPages;
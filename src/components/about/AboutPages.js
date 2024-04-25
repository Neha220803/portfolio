import { Container, Col, Row, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../App.css';
import cyber from '../../images/about2/cyber.png';
import web from '../../images/about2/web.png';
import mobile from '../../images/about2/mobile.png';
import ui from '../../images/about2/ui.png';

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
        { title: "Designer", image: ui }
    ];

    return (
        <motion.div variants={upvariants} initial="initial" whileInView="animate">
            <Container className="d-flex align-items-center justify-content-center flex-column">
                <Row>
                    <div className='each-head'>About me</div>
                </Row>
                <Row>
                    I am one of many things below
                </Row>
                <Row className='m-5'>
                    {cardsData.map((card, index) => (
                        <Col lg={3} key={index}>
                            <Card bg="transparent" text="light" border='light'>
                                <Card.Body className="d-flex align-items-center justify-content-center flex-column">
                                    <Card.Img className='card-image mb-3' src={card.image} style={{ height: '170px' }}></Card.Img>
                                    <Card.Title className="text-center">{card.title}</Card.Title>
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
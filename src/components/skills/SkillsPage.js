import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './SkillsPage.css';

import htmlImage from '../../images/tech/html.png';
import cssImage from '../../images/tech/css.png';
import jsImage from '../../images/tech/js.png';
import reactImage from '../../images/tech/react.png';
import flutterImage from '../../images/tech/flutter.png';
import dartImage from '../../images/tech/dart.png';
import nodeImage from '../../images/tech/node.png';
import firebaseImage from '../../images/tech/firebase.png';
import mongoImage from '../../images/tech/mongo.png';
import mysqlImage from '../../images/tech/sql.png';
import gitImage from '../../images/tech/git.png';
import figmaImage from '../../images/tech/figma.png';

const SkillsPage = () => {
    const cardsData = [
        { title: "HTML", image: htmlImage },
        { title: "CSS", image: cssImage },
        { title: "JS", image: jsImage },
        { title: "React", image: reactImage },
        { title: "Flutter", image: flutterImage },
        { title: "Dart", image: dartImage },
        { title: "Node JS", image: nodeImage },
        { title: "Firebase", image: firebaseImage },
        { title: "MongoDB", image: mongoImage },
        { title: "MySQL", image: mysqlImage },
        { title: "GIT", image: gitImage },
        { title: "Figma", image: figmaImage },
    ];

    return (
        <div>
            <Container className="d-flex align-items-center justify-content-center flex-column">
                <Row>
                    <div className="each-head lead display-6 my-4 ">
                        Technical Skills
                    </div>
                </Row>
                <Row className='mt-1'>
                    {cardsData.map((card, index) => (
                        <Col xs={4} sm={4} md={3} lg={3} key={index} className='mb-3 d-flex align-items-center justify-content-center'>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 * index }}// Apply delay to each card
                                className='skills-imgbx'
                            >
                                <Card bg="transparent" text="light" className='image-round p-2 ' >
                                    <Card.Body className="d-flex align-items-center justify-content-center flex-column">
                                        {card.image && <Card.Img variant="top" src={card.image} />}
                                        <div className="skills-txtx mx-auto">
                                            {card.title}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default SkillsPage;
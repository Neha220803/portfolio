import { Container, Row, Col, Card } from 'react-bootstrap';
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
        { title: "Node", image: nodeImage },
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
                    <div className="each-head">
                        Technicall Skills
                    </div>
                </Row>
                <Row className='mt-1'>
                    {cardsData.map((card, index) => (
                        <Col lg={3} key={index} className='mb-3 d-flex align-items-center justify-content-center'>
                            <Card bg="transparent" text="light" className='p-2' border='light' style={{ height: '150px', width: '150px', borderRadius: '50%' }}>
                                <Card.Body className="d-flex align-items-center justify-content-center flex-column">
                                    {card.image && <Card.Img variant="top" src={card.image} style={{ maxHeight: '100%', maxWidth: '100%' }} />}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default SkillsPage;

import { Container, Col, Row, Card } from 'react-bootstrap';
import '../../App.css';

const AboutPages = () => {
    // Data for the cards
    const cardsData = [
        { title: "Cyber Security Analyst" },
        { title: "Mern Stack Developer" },
        { title: "Flutter Developer" },
        { title: "Designer" }
    ];

    return (
        <div>
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
                            <Card bg="dark" text="light" border='light' style={{ height: '250px' }}>
                                <Card.Body className="d-flex align-items-center justify-content-center flex-column">
                                    <Card.Title className="text-center p-2">{card.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default AboutPages;
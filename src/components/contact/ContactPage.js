import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
// import svgImg from '../../images/contact.svg';
import './ContactPage.css';
import { Envelope, Pin } from 'react-bootstrap-icons';



const ContactPage = () => {
    return (

        <Container className='my-md-0 pt-md-5'>
            <Row className='mt-md-4' >
                <Col lg={6} xs={12} className='d-flex flex-column justify-content-center text-start'>
                    <div className='contactText'>
                        <h1>Contact Me</h1>
                        <div className='hide-md show-md'>
                            <div className='text-start mb-2'>
                                <h2>   Mail</h2>
                                <span> <Envelope /> neeharika.srinivasan@gmail.com</span>
                            </div>
                            <div className='text-start'>
                                <h2>Address</h2>
                                <span><Pin /> Chennai, Tamil Nadu</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6} className='d-flex flex-column justify-content-center mt-5 mt-md-0 mt-sm-0' >
                    <div>
                        <Form >
                            {/* <svg src={svgImg}></svg> */}
                            <Form.Group className="my-3 mt-sm-1 " controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" className="bg-transparent text-light" />
                            </Form.Group>
                            <Form.Group className="mb-3 mt-sm-1" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" className="bg-transparent text-light" />
                            </Form.Group>
                            <Form.Group className="mb-3 mt-sm-1" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} className="bg-transparent text-light" />
                            </Form.Group>
                            <Button variant="outline-light">Submit</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default ContactPage;
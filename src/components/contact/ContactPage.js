import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { motion } from 'framer-motion';
import svgImg from '../../images/contact.svg';
import './ContactPage.css';

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
};

const ContactPage = () => {
    return (
        <div>
            <Container className='mt-5 justify-content-center align-items-center py-5'>
                <Row className='mt-5'>
                    <Col lg={6} className='d-flex flex-column justify-content-center text-start px-5'>
                        <motion.div className='contactText' variants={variants} >
                            <motion.h1 variants={variants}  >Contact Me</motion.h1>
                            <motion.div variants={variants} className='text-start' >
                                <motion.h2 variants={variants} >Mail</motion.h2>
                                <motion.span variants={variants} >neeharika.srinivasan@gmail.com</motion.span>
                            </motion.div>
                            <motion.div variants={variants} className='text-start'>
                                <motion.h2 variants={variants} >Address</motion.h2>
                                <motion.span variants={variants} >Chennai, Tamil Nadu</motion.span>
                            </motion.div>
                        </motion.div>
                    </Col>
                    <Col lg={6} className='d-flex flex-column justify-content-center mt-5'>
                        <motion.Form variants={variants} initial="initial" whileInView="animate">
                            {/* <svg src={svgImg}></svg> */}
                            <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" className="bg-transparent text-light" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" className="bg-transparent text-light" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} className="bg-transparent text-light" />
                            </Form.Group>
                            <Button variant="outline-light">Submit</Button>
                        </motion.Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactPage

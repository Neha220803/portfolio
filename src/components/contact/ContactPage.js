import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Envelope, Pin } from 'react-bootstrap-icons';
import emailjs from 'emailjs-com';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        loading: false,
        show: false,
        alertMessage: '',
        variant: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ ...formData, loading: true });

        const templateParams = {
            from_name: formData.email,
            user_name: formData.name,
            to_name: 'neeharika.srinivasan@gmail.com',
            message: formData.message,
        };

        emailjs.send(
            'service_imhtufh',
            'template_9x44tv9',
            templateParams,
            'a7Z2__pbBgExUzaeJ'
        ).then(
            (result) => {
                console.log(result.text);
                setFormData({
                    ...formData,
                    loading: false,
                    alertMessage: 'SUCCESS! Thank you for your message',
                    variant: 'success',
                    show: true,
                });
            },
            (error) => {
                console.log(error.text);
                setFormData({
                    ...formData,
                    loading: false,
                    alertMessage: `Failed to send! ${error.text}`,
                    variant: 'danger',
                    show: true,
                });
            }
        );
    };

    return (
        <Container className='my-md-0 pt-md-5'>
            <Row className='mt-md-4'>
                <Col lg={6} xs={12} className='d-flex flex-column justify-content-center text-start'>
                    <div className='contactText'>
                        <h1 style={{ fontFamily: 'Inknut Antiqua' }}>Contact Me</h1>
                        <div className='hide-md show-md'>
                            <div className='text-start mb-2'>
                                <h2 style={{ fontFamily: 'Inknut Antiqua' }}>Mail</h2>
                                <span><Envelope className='me-2' />neeharika.srinivasan@gmail.com</span>
                            </div>
                            <div className='text-start'>
                                <h2 style={{ fontFamily: 'Inknut Antiqua' }}>Address</h2>
                                <span><Pin /> Chennai, Tamil Nadu</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6} className='d-flex flex-column justify-content-center mt-5 mt-md-0 mt-sm-0'>
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="my-3 mt-sm-1" controlId="exampleForm.ControlInput1">
                                <Form.Label style={{ fontFamily: 'Inknut Antiqua' }}>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    className="bg-transparent text-light"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 mt-sm-1" controlId="exampleForm.ControlInput1">
                                <Form.Label style={{ fontFamily: 'Inknut Antiqua' }}>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    className="bg-transparent text-light"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 mt-sm-1" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{ fontFamily: 'Inknut Antiqua' }}>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    className="bg-transparent text-light"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Button variant="outline-light" style={{ fontFamily: 'Inknut Antiqua' }} type="submit">
                                {formData.loading ? 'Sending...' : 'Submit'}
                            </Button>
                        </Form>
                        <Alert
                            variant={formData.variant}
                            className={`mt-3 ${formData.show ? 'd-block' : 'd-none'}`}
                            onClose={() => setFormData({ ...formData, show: false })}
                            dismissible
                        >
                            {formData.alertMessage}
                        </Alert>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;

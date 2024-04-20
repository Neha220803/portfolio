import './HeroPage.scss';
import heroImg from '../../images/hero.svg';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { motion, animate } from 'framer-motion';

const textVarients = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const sliderVariant = {
    initial: {
        x: 0,
    },
    animate: {
        x: "220%",
        transition: {
            repeat: Infinity,
            duration: 20,
        }
    }
};

const HeroPage = () => {
    return (
        <div className='hero py-4'>
            <Container className='d-flex justify-content-center align-items-center mt-5'>
                <Row>
                    <Col lg={6}>
                        <div className="textCont d-flex flex-column justify-content-center" >
                            <h2>NEEHARIKA S</h2>
                            <h1>Cyber Security Analyst</h1>
                            <div className='d-felx'>
                                <Button variant='outline-light' className='p-3 me-4'>See the Latest Works</Button>
                                <Button variant='light p-3'>Contact Me</Button>
                            </div>
                        </div>
                        <motion.div className='slideText' 
                                    variant={sliderVariant} 
                                    initial="initial" 
                                    animate="animate">
                            Mernstack Developer, Pen Tester, Flutter Developer
                        </motion.div>
                    </Col>
                    <Col lg={6}>
                        <div className='imgCont d-flex justify-content-end'>
                            <img className='img-fluid' src={heroImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default HeroPage
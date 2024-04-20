import './HeroPage.scss';
import heroImg from '../../images/hero.svg';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const textVarient = {
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

const imgVarient = {
    initial: {
        x: 500,
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

};

const sliderVariant = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            duration: 50,
        }
    }
};

const HeroPage = () => {
    return (
        <div className='hero py-4'>
            <Container className='d-flex justify-content-center align-items-center mt-5'>
                <Row>
                    <Col lg={6}>
                        <motion.div className="textCont d-flex flex-column justify-content-center" variants={textVarient} initial="initial"
                            animate="animate">
                            <motion.h2 variants={textVarient} initial="initial"
                                animate="animate">NEEHARIKA S</motion.h2>
                            <motion.h1 variants={textVarient} initial="initial"
                                animate="animate">Cyber Security Analyst</motion.h1>
                            <motion.div variants={textVarient} className='d-felx' initial="initial"
                                animate="animate">
                                <Button variant='outline-light' className='p-3 me-4'>See the Latest Works</Button>
                                <Button variant='light p-3'>Contact Me</Button>
                            </motion.div>
                        </motion.div>
                        <motion.div className='slideText d-flex'
                            variants={sliderVariant}
                            initial="initial"
                            animate="animate">
                            Web Dev, Penetration Tester, Flutter Developer
                        </motion.div>
                    </Col>
                    <Col lg={6}>
                        <div className='imgCont d-flex justify-content-end'>
                            <motion.img className='img-fluid' src={heroImg} alt="" variants={imgVarient} initial="initial"
                                animate="animate" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeroPage
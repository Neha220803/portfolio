import './HeroPage.scss';
import heroImg from '../../images/hero.svg';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Linkedin, Github, Envelope } from 'react-bootstrap-icons';
import { useState, useEffect } from "react";

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
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(1);
    const [index, setIndex] = useState(1);
    const toRotate = ["Pen Tester", "Flutter Developer", "Web Developer", "UI Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <div className='hero py-4'>
            <Container className='d-flex justify-content-center align-items-center mt-5'>
                <Row style={{ width: '100%' }} >
                    <Col lg={6} style={{ width: '60%' }} >
                        <motion.div className="textCont d-flex flex-column justify-content-center" variants={textVarient} initial="initial"
                            animate="animate">
                            <motion.h2 variants={textVarient} initial="initial"
                                animate="animate">NEEHARIKA S</motion.h2>

                            <motion.div className="links" variants={textVarient} initial="initial"
                                animate="animate">
                                <a href="https://www.linkedin.com/in/neeharika-s/"><Linkedin className='icon' text='light' /></a>
                                <a href="https://github.com/Neha220803"><Github className='icon' /></a>
                                <a href="https://www.gmail.com"><Envelope className='icon' /></a>
                            </motion.div>
                            <motion.h3>I'm a</motion.h3>
                            <motion.h1 variants={textVarient} initial="initial"
                                animate="animate">

                                <span className="txt-rotate" dataPeriod="1000" data-rotate='["Pen Tester", "Flutter Developer", "Web Developer", "UI Designer" ]'><span className="wrap">{text}</span></span>
                            </motion.h1>
                            {/* <motion.div variants={textVarient} className='d-felx' initial="initial"
                                animate="animate">
                                <Button variant='outline-light' className='p-3 me-4'>See the Latest Works</Button>
                                <Button variant='light p-3'>Contact Me</Button>
                            </motion.div> */}
                        </motion.div>
                        <motion.div className='slideText d-flex'
                            variants={sliderVariant}
                            initial="initial"
                            animate="animate">
                            Web Dev, Penetration Tester, Flutter Developer
                        </motion.div>
                    </Col>
                    <Col lg={6} sm={12} style={{ width: '40%' }} className='d-none d-sm-block mt-4'>
                        <motion.div className='imgCont d-flex justify-content-end' variants={imgVarient} initial="initial"
                            animate="animate" >
                            <motion.img className='img-fluid' src={heroImg} alt="" variants={imgVarient} initial="initial"
                                animate="animate" />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeroPage
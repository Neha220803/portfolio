import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import '../../index.css';
import sjce from '../../images/logos/sjce.png';
import kv from '../../images/logos/kv.png';
const EducationPage = () => {
    return (
        <div>
            <Container className="d-flex mt-5 align-items-center justify-content-center flex-column">
                <Row className='mt-5 mb-2'>
                    <Col className='each-head lead display-6'>
                        My Education
                    </Col>
                </Row>
                <VerticalTimeline lineColor={"white"}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        contentStyle={{ borderTop: "3px solid  white", background: "#1D1836", color: "white" }}
                        date="2021 - 2025"
                        iconStyle={{ background: "#1D1836", color: "#fff" }}
                        icon={<img src={sjce} alt="icon" style={{ width: '100%', height: '100%', borderRadius: '50%', padding: '5px' }} />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            St. Joseph’s College of Engineering
                        </h3>
                        <p>
                            B.Tech in Information Technology
                        </p>
                        <ul>
                            <li>
                                8.34 CGPA
                            </li>
                        </ul>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        contentStyle={{ borderTop: "3px solid  white", background: "#1D1836", color: "white" }}
                        date="2021"
                        iconStyle={{ background: "#1D1836", color: "#fff" }}
                        icon={<img src={kv} alt="icon" style={{ width: '100%', height: '100%', borderRadius: '50%', padding: '3px' }} />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Kendriya Vidyalaya
                        </h3>
                        <p>
                            Higher Secondary Education
                        </p>
                        <ul>
                            <li>
                                94.8%
                            </li>
                        </ul>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Container>
        </div>
    )
}

export default EducationPage
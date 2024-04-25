import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import '../../index.css';
import hebe from '../../images/logos/hebe.png';
import smart from '../../images/logos/smarther.png';
import cyber from '../../images/logos/cs.png';

const ExpiriencePage = () => {
  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center flex-column">
        <Row className='mt-5 mb-2'>
          <Col className='each-head display-6'>
            My Experience
          </Col>
        </Row>
        <VerticalTimeline lineColor={"white"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            contentStyle={{ borderTop: "3px solid  white", background: "#1D1836", color: "white" }}
            date="Jan 2024 - May 2024"
            iconStyle={{ background: "#1D1836", color: "#fff" }}
            icon={<img src={hebe} alt="icon" style={{ width: '100%', height: '100%', borderRadius: '50%', padding: '5px' }} />}
          >
            <h3 className="vertical-timeline-element-title">
              Product Research Intern
            </h3>
            <p>
              Hebesec Technologies Private Limited
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            contentStyle={{ borderTop: "3px solid  white", background: "#1D1836", color: "white" }}
            date="May 2023 - June 2023"
            iconStyle={{ background: "#1D1836", color: "#fff" }}
            icon={<img src={smart} alt="icon" style={{ width: '100%', height: '100%', borderRadius: '50%', padding: '3px' }} />}
          >
            <h3 className="vertical-timeline-element-title">
              Flutter Developer Intern
            </h3>
            <p>
              Smarther Technologies Pvt. Ltd.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            contentStyle={{ borderTop: "3px solid  white", background: "#1D1836", color: "white" }}
            date="Nov 2022 - Aug 2023"
            iconStyle={{ background: "#1D1836", color: "#fff" }}
            icon={<img src={cyber} alt="icon" style={{ width: '100%', borderRadius: '50%', padding: '5px' }} />}
          >
            <h3 className="vertical-timeline-element-title">
              VAPT Intern
            </h3>
            <p>
              CyberSapeins United LLP
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </Container>
    </div>
  )
}

export default ExpiriencePage;